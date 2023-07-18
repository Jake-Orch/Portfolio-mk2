import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => {

  const handleClick = (e) => {
    e.preventDefault();
        // This if statement is making sure that even if the click lands on the child element of the icons provided by react-icons, that the ID of the wanted element is retrieved,
    // then, it directs the user to the correct website depending on the id of the element the user clicks
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
            // This else statement is for if the click lands on the element with the ID needed
      // then, it directs the user to the correct website depending on the id of the element the user clicks
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
            className="h-8 w-8 self-center fill-slate-300 hover:fill-slate-500 hover:cursor-pointer"
            onClick={handleClick}
          />
          <span>Github</span>
        </div>
        <div className="flex flex-col text-slate-300">
          <AiFillLinkedin
            id="linkedin"
            className="h-8 w-8 self-center fill-slate-300 hover:fill-slate-500 hover:cursor-pointer"
            onClick={handleClick}
          />
          <span>LinkedIn</span>
        </div>
        <div className="flex flex-col text-slate-300">
          <BsStackOverflow
            id="stack"
            className="h-8 w-8 self-center fill-slate-300 hover:fill-slate-500 hover:cursor-pointer"
            onClick={handleClick}
          />
          <span>Stack Overflow</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
