import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.getAttribute("id") === null) {
      const currentId = e.target.parentElement.getAttribute("id");
      console.log(e.target.parentElement.getAttribute("id"));
      if (currentId === "github") {
        window.open("https://github.com/Jake-Orch?tab=repositories");
      } else if (currentId === "linkedin") {
        window.open("https://www.linkedin.com/in/jake-orchard-dev/");
      } else if (currentId === "stack") {
        window.open("https://stackoverflow.com/users/21576331/jake-orchard");
      }
    } else {
      const currentId = e.target.getAttribute("id");
      console.log(e.target.getAttribute("id"));
      if (currentId === "github") {
        window.open("https://github.com/Jake-Orch?tab=repositories");
      } else if (currentId === "linkedin") {
        window.open("https://www.linkedin.com/in/jake-orchard-dev/");
      } else if (currentId === "stack") {
        window.open("https://stackoverflow.com/users/21576331/jake-orchard");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-24 footer">
      <div className="flex justify-between w-3/5 md:w-2/5 text-sm">
        <div className="flex flex-col text-slate-300">
          <AiFillGithub
            id="github"
            className="h-8 w-8 self-center fill-slate-300 hover:fill-slate-500"
            onClick={handleClick}
          />
          <span>Github</span>
        </div>
        <div className="flex flex-col text-slate-300">
          <AiFillLinkedin
            id="linkedin"
            className="h-8 w-8 self-center fill-slate-300 hover:fill-slate-500"
            onClick={handleClick}
          />
          <span>LinkedIn</span>
        </div>
        <div className="flex flex-col text-slate-300">
          <BsStackOverflow
            id="stack"
            className="h-8 w-8 self-center fill-slate-300 hover:fill-slate-500"
            onClick={handleClick}
          />
          <span>Stack Overflow</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
