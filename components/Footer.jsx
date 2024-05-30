import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  let iconStyles = { color: "black", fontSize: "2.5em" };
  return (
    <>
      <div className="footer-container stack g-4">
        <div className="g-5">
          &copy; Copyright {new Date().getFullYear()}. Developed by Sunita
          George | All rights reserved.
        </div>

        <div className="socials stack g-3">
          <a href="https://www.linkedin.com/in/sunita-george/">
            <FaLinkedin style={iconStyles} />
          </a>
          <a href="https://github.com/GeorgeSunita">
            {" "}
            <FaGithub style={iconStyles} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-container {
          font-size: 10px;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 4rem;
          background-color: #f1f1f1;
          font-family: "Rubik", sans-serif;
          margin-bottom: -20px;
        }
        a {
          cursor: pointer;
          padding: 0.5rem;
        }
        a:hover {
          background-color: #b4afa9;
        }
        .socials {
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 2100px) {
          .footer-container {
            font-size: 15px;
          }
        }
        @media (max-width: 500px) {
          .footer-container {
            padding: 10px 0;
            width: 100%;
            height: 100%;
            flex-direction: column-reverse;
            justify-content: space-evenly;
          }
        }
      `}</style>
    </>
  );
};
