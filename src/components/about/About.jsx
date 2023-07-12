import React from "react"
import "./about.css"
import ME from "../../assets/me_studio.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import { AiFillGithub } from "react-icons/ai"

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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <AiFillGithub className="about__icon" />
              <h5>Github Repos</h5>
              <small>50+ Repositories</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Creative software engineer who strongly focuses on developing
            visually appealing and efficient web applications that drive user
            growth and engagement. Highly skilled in translating designs into
            functional code, and collaborating on solutions with the product and
            server-side teams to offer the best user experience and build higher
            customer lifetime value.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
