import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
// import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
// import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.png";
import IMG10 from "../../assets/portfolio10.png";

import Shopiverse from "../../assets/shopiverse.png";
import ShopiverseAdmin from "../../assets/shopiverse-admin.png";
import NikeUI from "../../assets/nike-ui.png";
import MyxelliaAdmin from "../../assets/myxellia-admin.png";
import Hubeatz from "../../assets/hubeatz.png";

import navigate from "../../assets/navigate-podcast.jpg";
import nftmarket from "../../assets/nftmarket.jpg";
import pronef from "../../assets/pronef.png";
import ignovations from "../../assets/ignovations.jpg";
import adrianport from "../../assets/hyperrealms_square.png";
import frznfit from "../../assets/frznfit.jpg";
import aura from "../../assets/Auraapparel.jpg";
import nikeredesign from "../../assets/nikeredesign.jpg";
import neatCleaning from "../../assets/neat_cleaning.jpg";

const data = [
  {
    id: 1,
    image: Shopiverse,
    title: "Shopiverse",
    github: "https://github.com/igudy/shopiverse",
    demo: "https://shopiverse-client.vercel.app/",
    description:
      "Advanced E-Commerce platform built with the powerful MERN stack (MongoDB, Express.js, React, Node.js). With advanced authentication, state of the art admin dashboard and payment integration. It uses Reat query and redux toolkit for API integration and global state management.",
  },
  {
    id: 2,
    image: IMG6,
    title: "Quickteller Homes",
    github: "#",
    demo: "https://homes.quickteller.com",
    description:
      "Quickteller Homes is a platform designed to simplify the process of finding and buying homes in Nigeria. It provides a seamless experience for individuals and families seeking to buy or rent properties.",
  },
  {
    id: 3,
    image: nikeredesign,
    title: "VibeKicks",
    description:
      "VibeKicks is a bold and stylish shoe brand that blends comfort with street-ready aesthetics. Designed for modern movers, it's all about stepping out with confidence and flair.",
    demo: "https://nike-redesign-liart.vercel.app/",
  },
  {
    id: 4,
    image: navigate,
    title: "Navigate Podcast",
    description:
      "Navigate podcast is the go-to resource for Canadian and international students navigating life in Canada. From essential tips to insider advice, we help students make the most of their academic journey and everyday life. Whether you're new to Canada or already studying here, we've got everything you need to thrive!",
    demo: "https://www.navigateco.ca/",
  },
  {
    id: 9,
    image: Hubeatz,
    title: "Hubeatz",
    github: "#",
    demo: "https://hubeatz.com",
    description:
      "Worked with a team of engineers to build Hubeatz. I worked on the frontend with Typescript, Next and React Query.",
  },
  {
    id: 5,
    image: aura,
    title: "Aura Apparel",
    github: "#",
    description:
      "Aura Apparel is a fashion brand celebrating individuality through bold, minimalistic designs. It's crafted for those who embrace self-expression and timeless style.",
    demo: "https://aura-apparel.vercel.app/",
  },
  {
    id: 6,
    image: frznfit,
    title: "FrznFit (Mobile)",
    github: "#",
    description:
      "FrznFit is your mobile destination for top-quality shoes and clothing. Blending convenience with style, it’s designed to give users a sleek and simple fashion shopping experience.",
    demo: "#",
  },
  {
    id: 7,
    image: neatCleaning,
    title: "Neat Cleaning",
    github: "#",
    description:
      "Neat Cleaning is a professional home and office cleaning service committed to delivering a spotless, refreshing environment every time — because you deserve to live and work in clean spaces.",
    demo: "https://neatcleaning.vercel.app/",
  },
  {
    id: 8,
    image: pronef,
    title: "ProNef (Mobile & Desktop)",
    github: "#",
    description:
      "Your own store for Nifty NFTs—start selling and growing today. Buy, store, and collect NFTs while exchanging and earning crypto. Join a thriving community on the ProNef Marketplace. Discover, trade, and grow your digital assets effortlessly.",
    demo: "https://nft-marketplace-showcase-sepia.vercel.app/",
  },
  {
    id: 10,
    image: adrianport,
    title: "Adrian 3D Portfolio",
    github: "#",
    description:
      "This is a 3D portfolio for Adrian called HyperRealms, who's a developer with over 12 years of experience in both frontend and backend development.",
    demo: "https://hyperrealms-chi.vercel.app/",
  },
  {
    id: 11,
    image: ignovations,
    title: "Ignovations Portfolio",
    github: "#",
    description:
      "This is a 3D portfolio for Adrian called HyperRealms, who's a developer with over 12 years of experience in both frontend and backend development.",
    demo: "https://hyperrealms-chi.vercel.app/",
  },
  {
    id: 12,
    image: ShopiverseAdmin,
    title: "Shopiverse Admin",
    github: "https://github.com/igudy/shopiverse",
    demo: "https://shopiverse-client.vercel.app/admin",
    description:
      "Advanced admin dashboard with React, Mongo, Express, Node and React Query for api integrastion.The admin system also make use of Apex Charts for displaying charts.",
  },
  {
    id: 13,
    image: nftmarket,
    title: "NFTopia",
    github: "#",
    description:
      "Easily set up your online shop, showcase your NFTs, and start selling in minutes. Turn your digital artwork into NFTs and reach a global audience effortlessly. Connect with artists, collectors, and enthusiasts to grow your presence. Join the thriving NFT community and bring your creative vision to life.",
    demo: "https://nftopia-smoky.vercel.app/",
  },
  {
    id: 14,
    image: IMG10,
    title: "Shirt Fusion360",
    github: "https://github.com/igudy/shirtfusion360",
    demo: "https://shirtfusion360.vercel.app/",
    description:
      "This project uses ThreeJS and React Three Fiber for 3D graphics, TailwindCSS and Framer Motion. Explore loading and customizing 3D models, camera manipulation, and object positioning. Create your own t-shirt model and download the result.",
  },
  // {
  //   id: 15,
  //   image: IMG7,
  //   title: "Igshop E-Commerce Web Application",
  //   github: "https://github.com/igudy/igshop-react-e-commerce-redux",
  //   demo: "https://igshop.vercel.app/",
  //   description:
  //     "E-commerce web app built with React, Redux Toolkit, and Firebase for authentication and storage.",
  // },
  {
    id: 16,
    image: IMG8,
    title: "Evogym (UI Only)",
    github: "https://github.com/igudy/gym-typescript",
    demo: "https://evogym-bice.vercel.app/",
    description:
      "Landing page for a gym built with React and TypeScript,Framer Motion for animations. Styling is done with Tailwind, providing a clean and responsive layout.",
  },
  {
    id: 17,
    image: IMG9,
    title: "Promptsea",
    github: "https://github.com/igudy/promptsea-nextjs",
    demo: "https://promptsea-f5c3micvs-igudy.vercel.app/",
    description:
      "The web app is built using Next.js. It utilizes OAuth for authentication and MongoDB for the database. It offers a convenient platform for users to save and manage AI prompts.",
  },
  {
    id: 18,
    image: MyxelliaAdmin,
    title: "Myxellia Admin (UI Only)",
    github: "https://github.com/igudy/myxellia-admin",
    demo: "https://myxellia-admin-dashboard.vercel.app/",
    description: "Myxellia admin page with Next, Typescript and Chakra UI",
  },
  {
    id: 19,
    image: IMG3,
    title: "Igudy Portfolio Web App With React",
    github: "https://github.com/igudy/igudy-portfolio",
    demo: "#",
    description:
      "This project was built with Html, CSS, JavaScript, React, React Icons and Javascript libraries - SwiperJS(For Carousels/slides), EmailJs.",
  },
  {
    id: 20,
    image: NikeUI,
    title: "Nike Ecommerce UI",
    github: "https://github.com/igudy/e-commerce-nike-store",
    demo: "https://nike-store-e-commerce-eta.vercel.app/",
    description:
      "NIke ecommerce UI with cart system, built with Javascript, React and Redux Toolkit",
  },
  {
    id: 21,
    image: IMG1,
    title: "Modern Bank UI With React & Tailwind (UI Only)",
    github: "https://github.com/igudy/modern_bank_ui",
    demo: "https://modern-bank-ui.vercel.app/",
    description:
      "Modern bank ui built with HTML/CSS, Tailwind, React, Typewriter.js & React Reveal(For Animation).",
  },
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
