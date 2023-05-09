import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.jpg';
import IMG8 from '../../assets/portfolio8.jpg';

// DO NOT USE THE IMAGES IN PRODUCTION
const data = [
  {
    id: 6,
    image: IMG6,
    title: "QUICKTELLER HOMES",
    github: "#",
    demo: "https://homes.quickteller.com",
    description:
      "Quickteller Homes is a platform designed to simplify the process of finding and buying homes in Nigeria. It provides a seamless experience for individuals and families seeking to buy or rent properties.",
  },
  {
    id: 7,
    image: IMG7,
    title: "IGSHOP E-COMMERCE WEB APPLICATION",
    github: "https://github.com/igudy/igshop-react-e-commerce-redux",
    demo: "https://igshop.vercel.app/",
    description:
      "E-commerce web app built with React, Redux Toolkit, and Firebase for authentication and storage.",
  },
  {
    id: 8,
    image: IMG8,
    title: "EVOGYM",
    github: "https://github.com/igudy/gym-typescript",
    demo: "https://evogym-bice.vercel.app/",
    description:
      "Landing page for a gym built with React and TypeScript,Framer Motion for animations. Styling is done with Tailwind, providing a clean and responsive layout. ",
  },
  {
    id: 1,
    image: IMG1,
    title: "MODERN BANK UI WITH REACT & TAILWIND",
    github: "https://github.com/igudy/modern_bank_ui",
    demo: "https://modern-bank-ui.vercel.app/",
    description:
      "Modern bank ui built with HTML/CSS, Tailwind, React, Typewriter.js & React Reveal(For Animation).",
  },
  {
    id: 2,
    image: IMG2,
    title: "NETFLIX CLONE WITH REACT & TAILWIND",
    github: "https://github.comhttps://github.com/igudy/netflix-clone-react",
    demo: "https://netflix-clone-react-c9e97.web.app/",
    description:
      "Netflix Clone with a Firebase back-end. I utilize the TMDB API(A Movie API) for data and Firebase for authentication & hosting.",
  },
  {
    id: 3,
    image: IMG3,
    title: "IGUDY PORTFOLIO WEB APP WITH REACT",
    github: "https://github.com/igudy/igudy-portfolio",
    demo: "#",
    description:
      "This project was built with Html, CSS, JavaScript, React, React Icons and Javascript libraries - SwiperJS(For Carousels/slides), EmailJs.",
  },
  {
    id: 4,
    image: IMG4,
    title: "BURGER BUILDER WEB APP WITH REACT",
    github: "https://github.com/igudy/burger-builder-react",
    demo: "https://react-my-burger-40b37.firebaseapp.com/",
    description:
      "React and Redux were used to build a burger builder application.The app used suitable authentication, validation, and routing implementation using React Router.",
  },
  {
    id: 5,
    image: IMG5,
    title: "GRAPHIC DESIGN LANDING PAGE",
    github: "https://github.com/igudy/graphics-design-landing-page",
    demo: "https://graphics-design-landing-page.vercel.app/",
    description: "Graphic Design Landing Page built with HTML5, CSS3, Javascript, Bootstrap 4 Framework and Smooth Scroll Library for Scrolling through the Landing Page."
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Crypto Currency Dashboard & Financial Visualization',
  //   github: "https://github.com",
  //   demo: "https://dribbble.com/Alien_pixels"
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
