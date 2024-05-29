import React, { useState } from "react";
import { Button } from "../components/Button";
export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <>
      <div className="form stack v">
        {formSuccess ? (
          <div>{formSuccessMessage}</div>
        ) : (
          <form
            method="POST"
            action="https://www.formbackend.com/f/aa307bb232d939a4"
            onSubmit={submitForm}
          >
            <div>
              <input
                placeholder="Name"
                type="text"
                name="name"
                onChange={handleInput}
                value={formData.name}
                required
              />
              <label>Name</label>
            </div>

            <div>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleInput}
                value={formData.email}
                required
              />
              <label>Email</label>
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleInput}
              value={formData.message}
              cols={25}
              rows={7}
            ></textarea>
            <label>Your Message</label>

            <button type="submit">Send Message</button>
          </form>
        )}
      </div>

      <style jsx>{`
        .form {
          width: 55%;
          height: 45vh;
          align-items: center;
          justify-content: space-evenly;
          background-color: #f1f1f1;
          line-height: 1;
          font-family: "Rubik", sans-serif;
          margin-bottom: 1rem;
          padding: 1rem;
          text-align: center;
        }

        .form-group {
          height: 30%;
        }
        input {
          width: 75%;
          display: block;
          font-family: inherit;
          font-size: 1rem;
          padding: 1rem 2rem;
          border-radius: 3px;
          background-color: (255, 255, 255, 0.9);
          border: none;
          border-bottom: 3px solid transparent;
        }
        input:focus {
          outline: none;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
          border-bottom: 3px solid green;
        }
        input:focus:invalid {
          border-bottom: 3px solid red;
        }

        label {
          font-family: "Rubik", sans-serif;
          font-size: 1rem;
          font-weight: 1.5;
          margin-top: 0.7rem;
          margin-left: -10rem;
          display: block;
          transition: all 0.3s;
        }
        input:placeholder-shown + label {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-4rem);
        }
        textarea {
          width: 75%;
          font-family: inherit;
          font-size: 1rem;
          padding: 1rem 2rem;
          border-radius: 3px;
          background-color: (255, 255, 255, 0.5);
          border: none;
          border-bottom: 3px solid transparent;
        }
        textarea:placeholder-shown + label {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-4rem);
        }
        textarea:focus {
          outline: none;
          border: none;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
        }
        button {
          background-color: #b4afa9;
          border-radius: 6px;
          border: none;
          color: white;
          cursor: pointer;
          display: inline-block;
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
          padding: 10px 35px;
          transition: all 0.15s ease-in-out;
          text-decoration: none;
        }
        button:hover {
          background-color: #b4afa9;
          filter: brightness(80%);
          transform: translateY(4px);
        }

        @media (min-width: 2100px) {
          .form {
            width: 75%;
            height: 100%;
            text-align: center;
            padding: 40px 0;
          }
          input {
            width: 85%;
            font-size: 1.5rem;
            padding: 2rem 5rem;
          }
          textarea {
            width: 93%;
            font-size: 1.5rem;
            padding: 2rem 4rem;
          }
          label {
            margin-left: -15rem;
            font-size: 1.5rem;
          }
          button {
            font-family: inherit;
            font-size: 20px;
            font-weight: 600;
            padding: 14px 30px;
          }
        }
        @media (max-width: 1440px) {
          .form {
            width: 75%;
            height: 100%;
            text-align: center;
          }
          .form-group {
            width: 60%;
            height: 20%;
            flex-direction: column;
          }
          input {
            width: 85%;
          }
          textarea {
            width: 85%;
          }
          label {
            margin-left: -10rem;
          }
          button {
            width: 65%;
            font-size: 16px;
            font-weight: 600;
            margin: 20px;
            padding: 14px 30px;
          }
        }
        @media (max-width: 1025px) {
          .form {
            width: 80%;
            height: 100%;
            text-align: center;
          }
          .form-group {
            width: 60%;
            height: 20%;
            flex-direction: column;
          }
          input {
            width: 75%;
          }
          textarea {
            width: 75%;
          }
          label {
            margin-left: -10rem;
          }
          button {
            width: 65%;
            font-size: 16px;
            font-weight: 600;
            margin: 20px;
            padding: 14px 30px;
          }
        }
        @media (max-width: 768px) {
          .form {
            width: 80%;
            height: 100%;
          }
          .form-group {
            width: 100%;
            height: 20%;
            flex-direction: column;
          }
          input {
            width: 100%;
          }
          textarea {
            width: 100%;
          }
          label {
            margin-left: -10rem;
          }
          button {
            width: 55%;
            font-size: 14px;
            font-weight: 600;
            margin: 20px;
            padding: 14px 30px;
          }
        }

        @media (max-width: 426px) {
          .form {
            width: 85%;
            height: 100%;
            text-align: center;
          }

          .form-group {
            width: 60%;
            height: 20%;
          }
          label {
            margin-left: -10rem;
          }

          input {
            width: 78%;
          }
          textarea {
            width: 78%;
          }
          button {
            font-size: 14px;
            margin: 20px;
            padding: 10px 30px;
            width: 65%;
          }
        }
      `}</style>
    </>
  );
};
