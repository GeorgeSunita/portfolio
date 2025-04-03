export const Hero = () => {
  return (
    <>
      <div className="myself-wrapper stack v g-4" id="hero">
        <div className="image-container">
          <img src="/designer.svg" alt="image of coder" />
        </div>
        <div>
          {" "}
          <h1>Sunita George</h1>
        </div>
        <div>
          {" "}
          <h3>Junior Front End Developer</h3>
        </div>
      </div>

      <style jsx>{`
        .myself-wrapper {
          color: black;
          background-color: #f1f1f1;
          font-family: "Alegreya", sans-serif;
          align-items: center;
          justify-content: center;
          width: 80vw;
          height: 55vh;
        }
        .image-container {
          border-radius: 50%;
          width: 14rem;
          height: 16rem;
          overflow: hidden;
          padding: 5px;
          border: 3px solid black;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        img {
          border-radius: 50%;
        }

        h1 {
          font-weight: 900;
          font-size: 46px;
          font-style: italic;
        }
        h3 {
          font-weight: 400;
          font-size: 40px;
          font-style: italic;
        }

        @media (min-width: 2100px) {
          .image-container {
            width: 300px;
            height: 300px;
            overflow: hidden;
          }
          h1 {
            font-weight: 900;
            font-size: 55px;
            font-style: italic;
          }
          h3 {
            font-weight: 400;
            font-size: 50px;
            font-style: italic;
          }
        }

        @media (max-width: 1025px) {
          .myself-wrapper {
            width: 100%;
            height: 100%;
          }
          .image-container {
            margin: 20px 0;
            width: 170px;
            height: 170px;
          }
          .image-container img {
            width: 100%;
            height: 100%;
          }
        }
        @media (max-width: 1440px) {
          .myself-wrapper {
            width: 100%;
            height: 100%;
          }
          .image-container {
            margin: 20px 0;
            width: 170px;
            height: 170px;
          }
          .image-container img {
            width: 100%;
            height: 100%;
          }
        }

        @media (max-width: 500px) {
          h3 {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
};
