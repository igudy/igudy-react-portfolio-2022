import React from "react";
import "./about.css";
import ME from "../../assets/me_studio.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Igudy</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="flex justify-center items-center">
                <FaAward className="about__icon " />
              </div>

              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <div className="flex justify-center items-center">
                <AiFillGithub className="about__icon" />
              </div>
              <h5>Github Repos</h5>
              <small>90+ Repositories</small>
            </article>

            <article className="about__card">
              <div className="flex justify-center items-center">
                <FiUsers className="about__icon" />
              </div>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <div className="flex justify-center items-center">
                <VscFolderLibrary className="about__icon" />
              </div>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            Creative Software Engineer with over 5 years proven experience in
            helping business and companies create and maintain a better code
            base for reusability, scalability, and maintainability. Passionate
            about learning and development with a desire to apply skills on a
            larger development team. Eager to tackle more complex problems and
            continue to find ways to maximise user efficiency and build blazing
            fast user interfaces.
          </p>

          <div className="flex gap-2">
                     <a href="#contact" className="btn btn-primary">
            <div className="flex items-center">Let's Talk</div>
          </a>

          <a
            href="http://github.com/igudy"
            download
            className="btn btn-right"
            target="_blank"
          >
            <div className="flex items-center">
              <BsGithub className="small-icon" />
              Github
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/goodness-igunma-65bb581a7/"
            className="btn btn-primary btn-right mobile-top"
          >
            <div className="flex items-center">
              <BsLinkedin className="small-icon" />
              LinkedIn
            </div>
          </a>
          </div>
 

        </div>
      </div>
    </section>
  );
};

export default About;
