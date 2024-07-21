import React from "react"
import CV from "../../assets/Software-Engineer-Goodness-Igunma.pdf"
import { BsGithub } from "react-icons/bs"

const CTA = () => {
  return (
    <div className="flex justify-center my-3 gap-4">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
