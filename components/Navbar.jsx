import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Navbar = forwardRef((props, ref) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  let iconStyles = { color: "white", fontSize: "2em" };
  return (
    <>
      <div className={`${sticky ? "sticky" : ""}`}>
        <div className="nav-wrapper stack h">
          <div className="logo-container">
            <img className="logo" src="/sg-logo1.png" alt="logo" />
          </div>

          <ul>
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {" "}
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {" "}
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {" "}
                Projects
              </Link>
            </li>
            <li className="right">
              {" "}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {" "}
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            {hamburgerOpen === false ? (
              <GiHamburgerMenu style={iconStyles} onClick={toggleHamburger} />
            ) : (
              <IoCloseCircleOutline
                style={iconStyles}
                onClick={toggleHamburger}
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .nav-wrapper {
          width: 80vw;
          height: 70px;
          background-color: #000000;
          color: white;
          align-items: center;
          justify-content: space-evenly;
          padding-top: 2rem;
          font-family: "Rubik", sans-serif;
          font-weight: 400;
          transition: 0.3s;
        }
        ul {
          color: #f1f1f1;
          display: flex;
          gap: 30px;
          width: 35%;
        }
        ul li {
          cursor: pointer;
        }
        ul li:hover {
          color: #b4afa9;
          filter: brightness(80%);
        }
        .right {
          margin-left: 13rem;
        }
        .logo {
          width: 4rem;
          height: 4rem;
          margin-left: -8rem;
        }
        .sticky {
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 100;
        }
        .hamburger {
          display: none;
        }
        @media (min-width: 2100px) {
          .nav-wrapper {
            height: 90px;
            font-size: 23px;
            align-items: center;
            justify-content: space-around;
          }

          ul {
            width: 45%;
            align-items: center;
            justify-content: space-between;
          }
          .right {
            margin-left: 15rem;
          }

          .logo {
            width: 5rem;
            height: 5rem;
            margin-left: -3rem;
          }
        }
        @media (max-width: 1440px) {
          .nav-wrapper {
            height: 50px;
            font-size: 15px;
            align-items: center;
            justify-content: space-around;
          }

          ul {
            width: 45%;
            align-items: center;
            justify-content: space-between;
          }
          .right {
            margin-left: 10rem;
          }

          .logo {
            margin-left: -3rem;
          }
        }

        @media (max-width: 1025px) {
          .nav-wrapper {
            font-size: 14px;
            align-items: center;
            justify-content: space-around;
          }
          ul {
            width: 55%;
            align-items: center;
            justify-content: space-between;
          }
          .logo {
            margin-left: 2rem;
          }
        }

        @media (max-width: 768px) {
          .nav-wrapper {
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
          }
          ul {
            display: ${hamburgerOpen ? "flex" : "none"};
            flex-flow: column;
            background-color: #1b262f;
            opacity: 0.9;
            position: fixed;
            top: 0px;
            right: 77px;
            height: 70vh;
            width: 80%;
            align-items: center;
            justify-content: center;
          }
          .right {
            margin-left: 0;
          }

          .logo {
            margin-left: -14rem;
          }
          .hamburger {
            display: flex;
            z-index: 10;
          }
        }
        @media (max-width: 426px) {
          .nav-wrapper {
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
          }
          ul {
            position: fixed;
            top: 0px;
            right: 42px;
            height: 70vh;
            width: 80%;
            align-items: center;
            justify-content: center;
          }
          .logo {
            margin-left: -8rem;
          }
        }
      `}</style>
    </>
  );
});
