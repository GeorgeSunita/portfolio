export const About = () => {
  return (
    <>
      <div className="about-wrapper stack h shapedividers_com-1902" id="about">
        <div className="about">
          <h3>About me</h3>
          <p className="para-1">
            Passionate about web, particularly front-end. I am an enthusiastic
            and detail-oriented Junior Front-end Developer with proficient
            knowledge in HTML, CSS, JavaScript as well as third-party libraries
            such as React.js (using Next.js).{" "}
          </p>

          <p className="para-2">
            {" "}
            When not online, I am in my home in Luxembourg trying out new
            recipes in the kitchen, trying my hand in gardening when it is
            Spring/Summer or getting excited about the next travel destination.{" "}
          </p>

          <a href="resume.pdf" download="resume">
            Download CV
          </a>
        </div>

        <div className="skills-container">
          <h3 className="skills-heading">Skills</h3>
          <div className="skills">
            <div className="skill">HTML5</div>
            <div className="skill">CSS3</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React.js</div>
            <div className="skill">Node.js/NPM</div>
            <div className="skill">PHP</div>
            <div className="skill">MySQL</div>
            <div className="skill">SEO</div>
            <div className="skill">Responsive Design</div>
            <div className="skill">Version Control: GIT</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-wrapper {
          flex-wrap: wrap;
          gap: 6rem;
          color: white;
          font-family: "Rubik", sans-serif;
          align-items: center;
          justify-content: center;
          height: 60vh;
          background-color: black;
          line-height: 1.3;
          margin-bottom: 1rem;
        }
        h3 {
          font-size: 30px;
          font-weight: 500;
          margin: 0.5rem 0;
          text-align: center;
        }
        .para-1 {
          margin-bottom: 10px;
        }
        .para-2 {
          margin-bottom: 10px;
        }

        a {
          background-color: #b4afa9;
          border-radius: 6px;
          color: white;
          cursor: pointer;
          display: inline-block;
          font-family: inherit;
          font-size: 18px;
          font-weight: 400;
          margin: 12px;
          padding: 10px 35px;
          transition: all 0.15s ease-in-out;
          text-decoration: none;
        }
        a:hover {
          background-color: #b4afa9;
          filter: brightness(80%);
          transform: translateY(4px);
        }

        .skills {
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          gap: 37px;
          align-items: center;
          justify-content: space-evenly;
        }

        .skill {
          border-radius: 5px;
          padding: 10px;
          background-color: #b4afa9;
        }
        .about {
          flex-basis: 35%;
          height: 55vh;
          margin: 5px;
          align-items: center;
          justify-content: space-evenly;
        }
        .skills-container {
          flex-basis: 30%;
          height: 55vh;
          margin: 5px;
        }
        h3 {
          font-size: 35px;
          font-weight: 400;
          margin: 4rem;
        }

        .shapedividers_com-1902 {
          overflow: hidden;
          position: relative;
        }
        .shapedividers_com-1902::before {
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
          background-size: 100% 47px;
          background-position: 50% 0%;
          background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.278 3.62" preserveAspectRatio="none"><path d="M35.278.092S8.238.267 0 3.62V.092z" opacity=".2" fill="%23f1f1f1"/><path d="M35.278.092S8.238.246 0 3.194V.092z" opacity=".2" fill="%23f1f1f1"/><path d="M35.278.092S8.238.223 0 2.738V.092zM35.278.092H0V0h35.278z" fill="%23f1f1f1"/></svg>');
        }

        @media (min-width: 2100px) {
          .shapedividers_com-1902::before {
            background-size: 100% calc(2vw + 47px);
          }
        }

        @media (min-width: 2100px) {
          .about-wrapper {
            height: 100%;
            line-height: 1.6;
          }
          h3 {
            font-size: 40px;
            margin: 4rem;
          }
          a {
            font-size: 20px;
          }
          .about {
            flex-basis: 37%;
            height: 55vh;
            margin: 5px;
          }
          .skills-container {
            flex-basis: 30%;
            height: 55vh;
            margin: 5px;
          }
          .skills {
            gap: 45px;
          }
          .skill {
            padding: 15px;
            font-size: 20px;
          }
          p {
            font-size: 22px;
          }
        }

        @media (max-width: 1440px) {
          .about-wrapper {
            height: 100%;
          }
          h3 {
            font-size: 28px;
            margin: 3rem;
          }

          .about {
            flex-basis: 40%;
            height: 60vh;
            margin: 5px;
            line-height: 1.3;
          }
          .skills-container {
            flex-basis: 40%;
            height: 60vh;
            margin: 5px;
            line-height: 1.6;
          }
        }

        @media (max-width: 1025px) {
          .about-wrapper {
            height: 100%;
          }
          .about {
            flex-basis: 45%;
            height: 100%;
            padding: 5px;
            line-height: 1.6;
          }
          .skills-container {
            flex-basis: 38%;
            height: 100%;
            padding: 5px;
            line-height: 1;
          }
          h3 {
            font-size: 25px;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .about-wrapper {
            flex-direction: column;
            height: 100%;
          }
          h3 {
            font-size: 25px;
            padding: 1rem;
            text-align: center;
          }

          .about {
            flex-basis: 45%;
            height: 100%;
            text-align: center;
          }
          .skills-container {
            flex-basis: 45%;
            height: 100%;
          }
          .skills {
            padding: 0 2rem;
          }
        }
        @media (max-width: 500px) {
          .about-wrapper {
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          h3 {
            margin-top: 2.5rem;
            text-align: center;
          }
          .about {
            flex-basis: 100%;
            height: 100%;
            text-align: center;
          }
          .skills-container {
            flex-basis: 100%;
            height: 100%;
          }
          .skills {
            width: 80%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
};
