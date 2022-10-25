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
              <span className="service__white">INTERSWITCH <br></br>(May. 2022 - Present)</span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Worked on existing React codebase to add new features using both
                functional and class-based components.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensured cross-platform optimization for mobile phones.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designed User Interactions and responsiveness for web pages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Support maintenance programming development for web pages and
                web applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborated with product team members to implement new feature
                developments.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>
              FRONT-END ENGINEER <br></br>
              <span className="service__white">SYBORF BUSINESS VENTURE <br></br>(Oct. 2021 - Feb. 2022)</span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Work with HTML,CSS, Bootstrap and JavaScript for building
                responsive website for a graphic design and web development
                masterclass.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked with version control software - Git/Github.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Manage website development projects from initial design through
                completion, optimizing all cross-browser and multi-platform
                compatibility.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implemented web applications pages from concept through
                deployment.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Used Wordpress builder like elementor to build out content
                layouts, headers and footer.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>
              FRONT-END ENGINEER INTERN <br></br>
              <span className="service__white">
                CODEZOOMERS NIG. LTD. <br></br> (Aug. 2019 - Jan. 2020)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Built static front end pages with front end technologies like
                Html, CSS, CSS Flexbox, CSS Grid, Bootstrap and JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Built Single Page Applications (SPA's) with AngularJs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designed User Interactions and responsiveness for web pages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked with version control software - Git /Github.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
