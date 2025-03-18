import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect, useState, useRef } from "react";
import { Link } from "react";

export default function Home() {
  const cards = [
    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      description:
        "This is my Portfolio website with sticky navigation and custom contact me form.Built using React.js.",
      link: "https://sgeorgedev.netlify.app/",
    },
    {
      title: "REST Countries API",
      image: "/RESTcountries.png",
      description:
        "Project integrating REST countries API to pull country data and display it.",
      link: "https://sg-rest-countries.netlify.app/",
    },
    {
      title: "Rock-Paper-Scissors",
      image: "/rps.png",
      description:
        "A classic game of Rock-Paper-Scissors. Implemented using HTML5, CSS and JavaScript",
      link: "https://sg-rockpaperscissors.netlify.app/",
    },
  ];

  return (
    <>
      <div className="wrapper stack v">
        <Navbar />
        <Hero />
        <About />
        <div
          className="projects-container stack v shapedividers_com-6922"
          id="projects"
        >
          <h2 className="projects-h2">PROJECTS</h2>
          <div className="cards-container stack g-5">
            {cards.map(function (elem, i) {
              return (
                <Card
                  image={elem.image}
                  title={elem.title}
                  description={elem.description}
                  link={elem.link}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div
          className="form-container stack v g-5 shapedividers_com-3296"
          id="contact"
        >
          <h2 className="form-h2">GET IN TOUCH WITH ME</h2>
          <Form />
        </div>
        <Footer />
      </div>

      <style jsx>{`
        .wrapper {
          box-shadow: 35px 0 40px -20px rgba(0, 0, 0, 0.45);
          margin: 0 auto;
          width: 80vw;
          min-height: 100vh;
          background: radial-gradient(
            circle at 10% 20%,
            rgb(0, 0, 0) 0%,
            rgb(64, 64, 64) 90.2%
          );
          align-items: center;
          justify-content: space-between;
        }

        .projects-h2 {
          font-weight: 400;
          font-size: 40px;
          color: black;
          font-family: "Rubik", sans-serif;
        }
        .form-h2 {
          font-weight: 400;
          font-size: 40px;
          color: white;
          font-family: "Rubik", sans-serif;
          padding: 3rem 1rem;
        }
        .projects-container {
          width: 100%;
          height: 70vh;
          padding-top: 6rem;
          align-items: center;
          justify-content: space-between;
          background-color: #f1f1f1;
        }
        .cards-container {
          width: 100%;
          height: 70vh;
          align-items: center;
          justify-content: space-evenly;
        }
        .form-container {
          width: 100%;
          height: 66vh;
          align-items: center;
          justify-content: space-evenly;
          background-color: black;
          padding-top: 3rem;
        }

        .shapedividers_com-6922 {
          overflow: hidden;
          position: relative;
        }
        .shapedividers_com-6922::before {
          content: "";
          font-family: "shape divider from ShapeDividers.com";
          position: absolute;
          z-index: 3;
          pointer-events: none;
          background-repeat: no-repeat;
          bottom: -0.1vw;
          left: -0.1vw;
          right: -0.1vw;
          top: -0.1vw;
          background-size: 100% 44px;
          background-position: 50% 0%;
          background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381 59.27" preserveAspectRatio="none"><g fill="%23000000"><path d="M381 8.47L0 42.33V0h381z"/><path d="M381 33.87L0 59.27V0h381z" opacity=".66"/></g></svg>');
        }

        @media (min-width: 2100px) {
          .shapedividers_com-6922::before {
            background-size: 100% calc(2vw + 44px);
          }
        }

        .shapedividers_com-3296 {
          overflow: hidden;
          position: relative;
        }
        .shapedividers_com-3296::before {
          content: "";
          font-family: "shape divider from ShapeDividers.com";
          position: absolute;
          z-index: 3;
          pointer-events: none;
          background-repeat: no-repeat;
          bottom: -0.1vw;
          left: -0.1vw;
          right: -0.1vw;
          top: -0.1vw;
          background-size: 100% 96px;
          background-position: 50% 0%;
          background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381 77.25" preserveAspectRatio="none"><g fill="%23f1f1f1"><path d="M381 8.47L0 42.33V0h381z"/><path d="M381 33.87L0 59.27V0h381z" opacity=".33"/><path d="M381 59.27L0 77.25V0h381z" opacity=".33"/></g></svg>');
        }

        @media (min-width: 2100px) {
          .shapedividers_com-3296::before {
            background-size: 100% calc(2vw + 96px);
          }
        }

        @media (min-width: 2100px) {
          .projects-container {
            padding-top: 10rem;
          }
          .projects-h2 {
            font-weight: 400;
            font-size: 50px;
          }
          .form-container {
            height: 100%;
            padding-top: 10rem;
          }
          .form-h2 {
            font-weight: 400;
            font-size: 50px;
          }
        }
        @media (max-width: 1440px) {
          .projects-container {
            width: 100%;
            height: 70vh;
          }
          .projects-h2 {
            font-size: 35px;
          }
          .cards-container {
            height: 100%;
          }
          .form-container {
            width: 100%;
            height: 100%;
            gap: 10px;
          }
          .form-h2 {
            font-size: 35px;
          }
        }
        @media (max-width: 1025px) {
          .projects-container {
            width: 100%;
            height: 65vh;
          }
          .projects-h2 {
            font-size: 25px;
          }
          .cards-container {
            height: 100%;
          }
          .form-container {
            height: 100%;
          }
        }
        @media (max-width: 768px) {
          .projects-container {
            width: 100%;
            height: 100%;
            padding: 4rem 0;
          }
          .cards-container {
            height: 100%;
            flex-direction: column;
            flex-flow: wrap;
          }
          .form-container {
            height: 100%;
            gap: 10px;
          }
          .projects-h2 {
            font-size: 25px;
            margin: 2rem;
          }
          .form-h2 {
            font-size: 25px;
            margin: 2rem;
          }
        }

        @media (max-width: 500px) {
          .projects-container {
            width: 100%;
            height: 100%;
            padding: 4rem 0;
          }
          .cards-container {
            height: 100%;
            flex-direction: column;
            flex-flow: wrap;
          }
          .form-container {
            height: 100%;
            gap: 10px;
          }
          .projects-h2 {
            font-size: 24px;
            margin: 2rem;
          }
          .form-h2 {
            font-size: 24px;
            margin: 2rem;
          }
        }
      `}</style>
    </>
  );
}
