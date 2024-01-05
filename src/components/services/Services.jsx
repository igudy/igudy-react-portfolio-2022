import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

// This is later changed to work experience
const Services = () => {
  return (
    <section id="services">
      <h5>Summary of Work Experience</h5>
      <h2>Work Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>
              SOFTWARE ENGINEER <br></br>
              <span className="service__white">
                RILLE TECHNOLOGIES <br></br>(Nov. 2023 - Present)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                - Assisted in creating engaging user interfaces, ensuring
                consistency in design, layout, and functionality across
                different browsers and devices.
              </p>
            </li>
            <li>
              <p>
                - Performed code reviews to encourage quality, reusable, and
                more efficient code.
              </p>
            </li>
            <li>
              <p>- I worked with Typescript and NextJs.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>
              SOFTWARE ENGINEER (CONTRACT)<br></br>
              <span className="service__white">
                GEMSTONE TECHNOLOGIES <br></br>(Sept. 2023 - Nov. 2023)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>- Actively participated in Agile development processes</p>
            </li>
            <li>
              <p>
                - Experience with Rest APIs to fetch data and manage state with
                React Query
              </p>
            </li>
            <p>
              - Writing unit and functional tests with RTL(React Testing
              Library) and Jest, thereby continually improving the web
              application.
            </p>
            <li>
              <p>
                - Implemented advanced filtering system for the web application
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>
              JUNIOR FRONTEND SOFTWARE ENGINEER (CONTRACT)<br></br>
              <span className="service__white">
                INTERSWITCH <br></br>(May. 2022 - April 2023)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                - Applied pragmatism and best practices in software engineering,
                delivering tasks on time, and with excellent quality.
              </p>
            </li>
            <li>
              <p>
                - Experience with Rest APIs to fetch data and manage state with
                Redux Toolkit.
              </p>
            </li>
            <li>
              <p>
                - Actively participated in Agile development processes (SCRUM,
                KANBAN, JIRA), including sprint planning, daily stand-ups, and
                retrospectives.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>
              JUNIOR SOFTWARE ENGINEER <br></br>
              <span className="service__white">
                SYBORF BUSINESS VENTURE <br></br>(Oct. 2021 - JAN. 2022)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                - Assisted in the creation of engaging user interfaces, ensuring
                consistency in design, layout, and functionality across
                different browsers and devices.
              </p>
            </li>
            <li>
              <p>
                - Performed code reviews to encourage quality, reusable, and
                more efficient code.
              </p>
            </li>
            <li>
              <p>
                - Translated Figma designs and prototypes into pixel-perfect
                user interfaces.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>
              SOFTWARE ENGINEER INTERN <br></br>
              <span className="service__white">
                CODEZOOMERS NIG. LTD. <br></br> (Aug. 2019 - Jan. 2020)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                - Developed strong problem-solving abilities, troubleshooting
                and debugging issues to ensure smooth website functionality.
              </p>
            </li>
            <li>
              <p>
                - Developed proficiency in version control systems, such as Git,
                for efficient collaboration and code management.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
