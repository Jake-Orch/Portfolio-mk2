import React, { useState } from "react";

const Contact = () => {
  const [formState, setFromState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState('')

  const handleBlank = (e) => {
    console.log(e.target.value);

    if (e.target.value === "") {
      alert(`${e.target.name} Required`);
    } else if (e.target.id === "email") {
        
    } else {
    }

    const handleSubmit = () => {
        console.log(this)
    }
    
  };

  return (
    <div className="pb-3">
      <h1 className="grid justify-items-center my-10 custom-color text-bold">
        Contact Page
      </h1>
      <div>
        <form id="contactform" className="flex flex-col p-20 m-5 custom-background border-2 border-black rounded-lg text-slate-300">
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
            type="text"
            className="w-5/6 p-1 text-black"
            id="email"
            name="Email"
            placeholder="Email Address"
            onBlur={handleBlank}
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            className="h-60 p-1 text-black"
            id="message"
            name="Message"
            onBlur={handleBlank}
          ></textarea>
          <button className="px-2 py-1 m-2 bg-slate-300 custom-color self-end border-2 border-black rounded-lg" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
