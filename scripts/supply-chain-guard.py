#!/usr/bin/env python3
"""
Detect and remove Lazarus/PolinRider JS config injection markers in build configs.

Usage:
  python3 scripts/supply-chain-guard.py scan [root]
  python3 scripts/supply-chain-guard.py clean [root]
"""

from __future__ import annotations

import argparse
import os
import subprocess
import sys
from pathlib import Path

# Primary IOC markers — built dynamically so this file is not flagged by text scans
def _malware_markers() -> tuple[str, ...]:
    g = "global["
    return (
        g + "'!']",
        g + '"!"]',
        g + "'_V']",
        g + '"_V"]',
        "_$_1e42",
        "rmcej%otb%",
        "Cot%3t=shtP",
    )


MALWARE_MARKERS = _malware_markers()

# Known attack artifact filenames (safe to delete when present)
ARTIFACT_NAMES = frozenset(
    {
        "temp_auto_push.bat",
        "temp_interactive_push.bat",
        "config.bat",
        "branch_structure.json",
        "fa-solid-400.woff2",
    }
)

# Lazarus hides payloads in VS Code auto-run tasks (opens folder -> runs node on fake font file)
VSCODE_SUSPICIOUS = (
    "fa-solid-400.woff2",
    '"runOn": "folderOpen"',
    '"runOn":"folderOpen"',
    "eslint-check",
    "task.allowAutomaticTasks",
    "terminal.integrated.hideOnStartup",
)

SKIP_DIR_NAMES = frozenset(
    {
        ".git",
        "node_modules",
        "dist",
        "build",
        ".next",
        "coverage",
        "vendor",
        ".pnpm-store",
    }
)

GITIGNORE_ARTIFACT_LINES = frozenset(
    {
        "branch_structure.json",
        "temp_auto_push.bat",
        "temp_interactive_push.bat",
        "config.bat",
        "fa-solid-400.woff2",
    }
)

CONFIG_BASENAMES = frozenset(
    {
        "tailwind.config.js",
        "tailwind.config.ts",
        "tailwind.config.cjs",
        "tailwind.config.mjs",
        "postcss.config.js",
        "postcss.config.mjs",
        "postcss.config.cjs",
        "vite.config.js",
        "vite.config.ts",
        "vite.config.mjs",
        "next.config.js",
        "next.config.mjs",
        "next.config.ts",
        "eslint.config.js",
        "eslint.config.mjs",
        "babel.config.js",
        "webpack.config.js",
        "rollup.config.js",
        "nuxt.config.js",
        "nuxt.config.ts",
        "app.config.js",
    }
)


def should_skip_dir(path: Path) -> bool:
    return path.name in SKIP_DIR_NAMES


def find_marker_index(text: str) -> int:
    indices = [text.find(m) for m in MALWARE_MARKERS if m in text]
    return min(indices) if indices else -1


def iter_vscode_files(root: Path) -> list[Path]:
    files: list[Path] = []
    vscode = root / ".vscode"
    if not vscode.is_dir():
        return files
    for path in sorted(vscode.rglob("*")):
        if path.is_file() and path.suffix in {".json", ".code-snippets"}:
            files.append(path)
    return files


def scan_vscode_file(path: Path) -> bool:
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return False
    if find_marker_index(text) >= 0:
        return True
    name = path.name
    if name == "tasks.json":
        if "fa-solid-400.woff2" in text or (
            "folderOpen" in text and "hide" in text and "eslint-check" in text
        ):
            return True
    if name == "settings.json":
        if "task.allowAutomaticTasks" in text and "folderOpen" in text:
            return True
        if "fa-solid-400.woff2" in text:
            return True
    return False


def find_fake_font_payloads(root: Path) -> list[Path]:
    found: list[Path] = []
    for path in root.rglob("fa-solid-400.woff2"):
        if any(p in SKIP_DIR_NAMES for p in path.parts):
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        if find_marker_index(text) >= 0 or "global[" in text:
            found.append(path)
    return sorted(found)


def clean_vscode(root: Path, dry_run: bool) -> bool:
    cleaned = False
    for path in iter_vscode_files(root):
        if not scan_vscode_file(path):
            continue
        if path.name == "tasks.json":
            target = '{\n  "version": "2.0.0",\n  "tasks": []\n}\n'
            if dry_run:
                print(f"WOULD RESET: {path}")
            else:
                path.write_text(target, encoding="utf-8")
                print(f"RESET: {path}")
            cleaned = True
        elif path.name == "settings.json":
            try:
                import json

                data = json.loads(path.read_text(encoding="utf-8"))
            except (OSError, json.JSONDecodeError):
                if dry_run:
                    print(f"WOULD DELETE: {path}")
                else:
                    path.unlink(missing_ok=True)
                    print(f"DELETED: {path}")
                cleaned = True
                continue
            for key in (
                "task.allowAutomaticTasks",
                "tasks",
                "debug.openDebug",
                "terminal.integrated.hideOnStartup",
            ):
                data.pop(key, None)
            new_text = json.dumps(data, indent=2) + "\n"
            if dry_run:
                print(f"WOULD CLEAN: {path}")
            else:
                path.write_text(new_text, encoding="utf-8")
                print(f"CLEANED: {path}")
            cleaned = True
        else:
            if dry_run:
                print(f"WOULD DELETE: {path}")
            else:
                path.unlink(missing_ok=True)
                print(f"DELETED: {path}")
            cleaned = True
    return cleaned


def iter_scan_files(root: Path) -> list[Path]:
    files: list[Path] = []
    target_names = {
        "tailwind.config.js",
        "tailwind.config.ts",
        "tailwind.config.cjs",
        "tailwind.config.mjs",
        "postcss.config.js",
        "postcss.config.mjs",
        "postcss.config.cjs",
        "vite.config.js",
        "vite.config.ts",
        "vite.config.mjs",
        "next.config.js",
        "next.config.mjs",
        "next.config.ts",
        "eslint.config.js",
        "eslint.config.mjs",
        "babel.config.js",
        "webpack.config.js",
        "rollup.config.js",
        "nuxt.config.js",
        "nuxt.config.ts",
    }
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIR_NAMES]
        for name in filenames:
            if name in target_names:
                files.append(Path(dirpath) / name)
    return sorted(files)


def scan_file(path: Path) -> bool:
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError as err:
        print(f"WARN: could not read {path}: {err}", file=sys.stderr)
        return False
    return find_marker_index(text) >= 0


def clean_file(path: Path, dry_run: bool) -> bool:
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError as err:
        print(f"WARN: could not read {path}: {err}", file=sys.stderr)
        return False

    idx = find_marker_index(text)
    if idx < 0:
        return False

    cleaned = text[:idx].rstrip()
    if not cleaned.endswith("\n"):
        cleaned += "\n"

    if dry_run:
        print(f"WOULD CLEAN: {path}")
    else:
        path.write_text(cleaned, encoding="utf-8")
        print(f"CLEANED: {path}")

    return True


def find_artifacts(root: Path) -> list[Path]:
    found: list[Path] = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIR_NAMES]
        for name in filenames:
            if name in ARTIFACT_NAMES:
                found.append(Path(dirpath) / name)
    return sorted(found)


def clean_gitignore(root: Path, dry_run: bool) -> list[Path]:
    changed: list[Path] = []
    for gitignore in root.rglob(".gitignore"):
        if any(p in SKIP_DIR_NAMES for p in gitignore.parts):
            continue
        try:
            lines = gitignore.read_text(encoding="utf-8", errors="replace").splitlines()
        except OSError:
            continue

        new_lines = [line for line in lines if line.strip() not in GITIGNORE_ARTIFACT_LINES]
        # Drop orphaned malware-artifact section headers
        new_lines = [
            line
            for line in new_lines
            if not (
                line.strip().startswith("#")
                and "supply-chain" in line.lower()
                and "artifact" in line.lower()
            )
        ]
        while new_lines and not new_lines[-1].strip():
            new_lines.pop()
        if new_lines == lines:
            continue

        if dry_run:
            print(f"WOULD FIX .gitignore: {gitignore} (remove malware artifact entries)")
        else:
            gitignore.write_text(
                "\n".join(new_lines) + ("\n" if new_lines else ""),
                encoding="utf-8",
            )
            print(f"FIXED .gitignore: {gitignore} (removed malware artifact entries)")
        changed.append(gitignore)

    return changed


def git_show(repo: Path, commit: str, path: str) -> str | None:
    proc = subprocess.run(
        ["git", "-C", str(repo), "show", f"{commit}:{path}"],
        capture_output=True,
        text=True,
    )
    return proc.stdout if proc.returncode == 0 else None


def git_tree_files(repo: Path, commit: str) -> list[str]:
    proc = subprocess.run(
        ["git", "-C", str(repo), "ls-tree", "-r", "--name-only", commit],
        capture_output=True,
        text=True,
    )
    if proc.returncode != 0:
        return []
    return [line.strip() for line in proc.stdout.splitlines() if line.strip()]


def scan_text_for_malware(text: str, path: str) -> bool:
    if find_marker_index(text) >= 0:
        return True
    if path.startswith(".vscode/"):
        if path.endswith("tasks.json"):
            if "fa-solid-400.woff2" in text or (
                "folderOpen" in text and "hide" in text and "eslint-check" in text
            ):
                return True
        if path.endswith("settings.json"):
            if "task.allowAutomaticTasks" in text and "folderOpen" in text:
                return True
            if "fa-solid-400.woff2" in text:
                return True
    if Path(path).name in ARTIFACT_NAMES and path != ".gitignore":
        if Path(path).name == "fa-solid-400.woff2":
            return "global[" in text or find_marker_index(text) >= 0
        return True
    return False


def cmd_scan_git_commit(repo: Path, commit: str) -> int:
    """Scan the full file tree at a commit (not only files changed in that commit)."""
    infected: list[str] = []
    for path in git_tree_files(repo, commit):
        base = Path(path).name
        if base not in CONFIG_BASENAMES and base not in ARTIFACT_NAMES and not path.startswith(
            ".vscode/"
        ):
            continue
        if base in ARTIFACT_NAMES and base != "fa-solid-400.woff2":
            infected.append(path)
            continue
        content = git_show(repo, commit, path)
        if content is None:
            continue
        if scan_text_for_malware(content, path):
            infected.append(path)

    if infected:
        print(f"INFECTED commit {commit[:7]}: {', '.join(infected)}")
        return 1
    return 0


def cmd_scan_git_push(repo: Path, remote_sha: str, local_sha: str) -> int:
    """Scan every commit in a push range (pre-push hook helper)."""
    zero = "0" * 40
    if local_sha == zero:
        return 0
    if remote_sha == zero:
        rev_range = local_sha
    else:
        rev_range = f"{remote_sha}..{local_sha}"

    rev = subprocess.run(
        ["git", "-C", str(repo), "rev-list", rev_range],
        capture_output=True,
        text=True,
    )
    if rev.returncode != 0:
        print(f"ERROR: git rev-list failed: {rev.stderr.strip()}", file=sys.stderr)
        return 2

    commits = [c for c in rev.stdout.splitlines() if c.strip()]
    # Always scan the tip commit tree (covers fast-forward / already-pushed history gaps)
    if local_sha not in commits:
        commits.append(local_sha)

    failed = 0
    seen: set[str] = set()
    for commit in commits:
        if commit in seen:
            continue
        seen.add(commit)
        if cmd_scan_git_commit(repo, commit) != 0:
            failed += 1

    if failed:
        print(f"\nBLOCKED: {failed} commit(s) contain Lazarus/PolinRider markers or attack artifacts.")
        return 1
    return 0


def cmd_scan(root: Path) -> int:
    infected: list[Path] = []
    for path in iter_scan_files(root):
        if scan_file(path):
            infected.append(path)
            print(f"INFECTED: {path}")

    for artifact in find_artifacts(root):
        print(f"ARTIFACT: {artifact}")
        infected.append(artifact)

    for path in iter_vscode_files(root):
        if scan_vscode_file(path):
            print(f"INFECTED_VSCODE: {path}")
            infected.append(path)

    for path in find_fake_font_payloads(root):
        print(f"FAKE_FONT_PAYLOAD: {path}")
        infected.append(path)

    if infected:
        print(f"\nFound {len(infected)} issue(s). Run: python3 scripts/supply-chain-guard.py clean")
        return 1

    print("OK: no malware markers or attack artifacts found.")
    return 0


def cmd_clean(root: Path, dry_run: bool) -> int:
    cleaned_any = False

    for path in iter_scan_files(root):
        if clean_file(path, dry_run):
            cleaned_any = True

    for artifact in find_artifacts(root):
        if dry_run:
            print(f"WOULD DELETE: {artifact}")
        else:
            artifact.unlink(missing_ok=True)
            print(f"DELETED: {artifact}")
        cleaned_any = True

    if clean_gitignore(root, dry_run):
        cleaned_any = True

    if clean_vscode(root, dry_run):
        cleaned_any = True

    for path in find_fake_font_payloads(root):
        if dry_run:
            print(f"WOULD DELETE: {path}")
        else:
            path.unlink(missing_ok=True)
            print(f"DELETED: {path}")
        cleaned_any = True

    if cleaned_any:
        print("\nDone. Re-scan with: python3 scripts/supply-chain-guard.py scan")
        return 0

    print("Nothing to clean.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Scan/clean Lazarus config-file injection")
    parser.add_argument(
        "command",
        choices=("scan", "clean", "scan-git-commit", "scan-git-push"),
        help="scan/clean working tree; scan-git-* for hook integration",
    )
    parser.add_argument(
        "root",
        nargs="?",
        default=".",
        help="Repository root (default: current directory)",
    )
    parser.add_argument(
        "extra",
        nargs="*",
        help="scan-git-commit: COMMIT_SHA | scan-git-push: REMOTE_SHA LOCAL_SHA",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="With clean: show what would change without writing",
    )
    args = parser.parse_args()

    root = Path(args.root).resolve()
    if not root.is_dir():
        print(f"ERROR: not a directory: {root}", file=sys.stderr)
        return 2

    if args.command == "scan":
        return cmd_scan(root)
    if args.command == "scan-git-commit":
        if not args.extra:
            print("ERROR: scan-git-commit requires COMMIT_SHA", file=sys.stderr)
            return 2
        return cmd_scan_git_commit(root, args.extra[0])
    if args.command == "scan-git-push":
        if len(args.extra) < 2:
            print("ERROR: scan-git-push requires REMOTE_SHA LOCAL_SHA", file=sys.stderr)
            return 2
        return cmd_scan_git_push(root, args.extra[0], args.extra[1])
    return cmd_clean(root, args.dry_run)


if __name__ == "__main__":
    sys.exit(main())
