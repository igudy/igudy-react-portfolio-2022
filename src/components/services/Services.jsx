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
          <div className="service__head h-[200px] max-h-[200px]">
            <h3 className="text-xl font-bold">
              Senior Front End Software Engineer <br />
              <span className="text-light">
                STERLING BANK - SEABAAS CORE BANKING <br />
                (Jan 2024 - Present)
              </span>
            </h3>
          </div>

          <ul className="service__list overflow-y-auto max-h-[500px] h-[500px]">
            <li>
              <p>
                - Collaborated with the frontend team of the URM(User And Access
                Module) which was in charge of handling the user and access
                management for our Core banking application
              </p>
            </li>
            <li>
              <p>
                - Implemented a Maker/Checker based system dashboard which
                enforces all user activity to be strictly permission based
              </p>
            </li>
            <li>
              <p>
                - Review proposed UI and UX designs for technical feasibility by
                standing as a middle-man while collaborating with back-end and
                product design teams
              </p>
            </li>
            <li>
              <p>
                - Implemented the Transaction-Limit feature which allows
                permissioned users to set up the maximum amount a bank teller
                officer can post without seeking for approval
              </p>
            </li>
            <li>
              <p>
                - Implemented a Micro Frontend architecture in order to break
                down our large monolithic codebase into smaller apps, each
                addressing a specific business vertical
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head h-[200px] max-h-[200px] ">
            <h3 className="text-xl font-bold">
              Front End Engineer <br />
              <span className="text-light">
                PETRA SOLUTIONS <br />
                (June 2023 - Dec 2023)
              </span>
            </h3>
          </div>

          <ul className="service__list overflow-y-auto max-h-[500px] h-[500px]">
            <li>
              <p>
                - Developed an employee admin page to monitor over 30,000
                employees, tracking their health status within the company and
                identifying potential departures.
              </p>
            </li>
            <li>
              <p>
                - Utilized React and Firebase technologies to develop and
                maintain frontend and database functionalities for the web
                application.
              </p>
            </li>
            <li>
              <p>
                - Implemented complex features such as a map feature to track
                the number of employees in each state in the USA.
              </p>
            </li>
            <li>
              <p>
                - Implemented a graph and line chart feature to visualize and
                track the health status of staff.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head h-[200px] max-h-[200px] ">
            <h3 className="text-xl font-bold">
              Front End Engineer <br />
              <span className="text-light">
                INTERSWITCH GROUP <br />
                (May 2022 - April 2023)
              </span>
            </h3>
          </div>

          <ul className="service__list overflow-y-auto max-h-[500px] h-[500px]">
            <li>
              <p>
                - Applied pragmatism and best practices in software engineering,
                delivering tasks on time, and with excellent quality.
              </p>
            </li>
            <li>
              <p>
                - Experience with Rest APIs to fetch data and manage state with
                global state management libraries.
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
          <div className="service__head h-[200px] max-h-[200px] ">
            <h3 className="text-xl font-bold">
              Software Engineer <br />
              <span className="text-light">
                CODEZOOMERS NIG. LTD. <br />
                (Aug. 2019 - Jan. 2020)
              </span>
            </h3>
          </div>

          <ul className="service__list overflow-y-auto max-h-[500px] h-[500px]">
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
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;