import React, { useState } from "react";

const Contact = () => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  function validEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

  }

  const handleEmail = (e) => {
    if (!validEmail(e.target.value)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('')
    }
    setEmail(e.target.value)
  }

  const handleBlank = (e) => {
    if (e.target.value === "") {
      alert(`${e.target.name} Required`);
    } 
  };

  return (
    <div className="pb-3">
      <h1 className="grid justify-items-center my-10 custom-color text-bold">
        Contact Page
      </h1>
      <div>
        <form action="https://formsubmit.co/jakeorchard@live.co.uk" method="POST" id="contactform" className="flex flex-col p-20 m-5 custom-background border-2 border-black rounded-lg text-slate-300">
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
          {emailError && <h2 className="" style={{color: 'red'}}>{emailError}</h2>}
          <button className="px-2 py-1 m-2 bg-slate-300 custom-color self-end border-2 border-black rounded-lg" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
