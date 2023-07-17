import React from "react";
import img from "../assets/images/projects";

const Project = ({ name, img, alt, deployed, git }) => {

    return (
      <div className="w-96 h-52 border-2 border-black mb-14">
        <div>
            <img src={img.img} alt={alt}></img>
        </div>
        <span>{name}</span>
      </div>
    );
};

export default Project;
