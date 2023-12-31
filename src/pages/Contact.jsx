import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // This useState is used to get the value of the email section of the form
  const [email, setEmail] = useState("");
  // This useState sets the value of the error if the email is invalid
  const [emailError, setEmailError] = useState("");

  // This useState sets the value of emptyError, to be used if a field in the form is left empty
  const [emptyError, setEmptyError] = useState("");
  // Here i am defining the email validation function to test the input against this email regex

  function validEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  // This function Checks if the email the user is inputting is a valid email
  const handleEmail = (e) => {
    if (!validEmail(e.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  // This function tells the user that a field is required when they haven't entered any text and have moved away from the element
  const handleBlank = (e) => {
    if (e.target.value === "") {
      setEmptyError(`${e.target.name} Required`);
    } else {
      setEmptyError('')
    }
  };

  return (
    <div className="pb-3">
      <h1 className="grid justify-items-center my-10 custom-color text-bold">
        Contact Page
      </h1>
      <div>
        <form
          action="https://formsubmit.co/jakeorchard@live.co.uk"
          method="POST"
          id="contactform"
          className="flex flex-col p-20 m-5 custom-background border-2 border-black rounded-lg text-slate-300"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="w-5/6 p-1 text-black"
            id="name"
            name="Name"
            placeholder="Full Name"
            onBlur={handleBlank}
          ></input>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="w-5/6 p-1 text-black"
            id="email"
            name="Email"
            value={email}
            placeholder="Email Address"
            onBlur={handleBlank}
            onChange={handleEmail}
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            className="h-60 p-1 text-black"
            id="message"
            name="Message"
            onBlur={handleBlank}
          ></textarea>
          <input
            type="hidden"
            name="_next"
            value="https://jake-orch.github.io/Portfolio-mk2/"
          ></input>
          <input
            type="hidden"
            name="_next"
            value="https://jake-orch.github.io/Portfolio-mk2/"
          ></input>
          {/* This is to display the error message if the email provided isnt formatted correctly */}
          {emailError && (
            <h2 className="" style={{ color: "red" }}>
              {emailError}
            </h2>
          )}
          {/* This is to display the error message if an input area is left unfilled */}
          {emptyError && (
            <h2 className="" style={{ color: "grey" }}>
              {emptyError}
            </h2>
          )}
          <button className="px-2 py-1 m-2 bg-slate-300 custom-color self-end border-2 border-black rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
