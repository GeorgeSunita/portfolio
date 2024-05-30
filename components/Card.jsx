export const Card = (props) => {
  return (
    <>
      <div className="card stack v">
        <div className="img-container">&nbsp;</div>
        <h3>{props.title}</h3>
        <p className="para">{props.description}</p>
        <a href={props.link}>live site</a>
      </div>

      <style jsx>{`
        .card {
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 400;
          flex: 0 1 20%;
          height: 26rem;
          line-height: 22px;
          overflow: hidden;
          background-color: #faf9f6;
          box-shadow: 0 8px 8px -4px black;
          padding: 1.5rem 0.5rem;
        }
        h3 {
          font-size: 24px;
          font-weight: 600;
          color: black;
          padding: 20px;
        }

        p {
          line-height: 1.3;
          width: 98%;
          color: black;
          padding: 10px 20px;
          text-align: left;
        }

        .img-container {
          background-blend-mode: darken;
          background-color: rgba(0, 0, 0, 0.1);
          background-image: url(${props.image});
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          height: 50%;
        }
        .img-container img {
          object-fit: contain;
        }

        a {
          background-color: #b4afa9;
          border-radius: 6px;
          color: white;
          cursor: pointer;
          display: inline-block;
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
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
        @media (min-width: 2100px) {
          .card {
            flex: 0 1 20%;
            height: 35rem;
            font-size: 25px;
            font-weight: 500;
          }
          a {
            font-size: 25px;
          }
        }

        @media (max-width: 1440px) {
          .card {
            flex: 0 1 25%;
            height: 25rem;
          }
          .img-container img {
            width: 100%;
            height: 100%;
          }
          h3 {
            font-size: 18px;
          }
        }
        @media (max-width: 1025px) {
          .card {
            padding: 1rem 0.5rem;
            flex: 0 1 27%;
            height: 24rem;
          }
          .img-container img {
            width: 100%;
            height: 100%;
          }
          h3 {
            font-size: 18px;
          }
        }
        @media (max-width: 768px) {
          .card {
            flex: 0 1 48%;
            height: 28rem;
          }
          .img-container img {
            width: 100%;
            height: 100%;
          }
          h3 {
            font-size: 21px;
          }
        }
        @media (max-width: 500px) {
          .card {
            flex: 0 1 75%;
            height: 24rem;
            margin: 0.5rem 0;
          }
          .img-container img {
            width: 100%;
            height: 100%;
          }
          h3 {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
};
