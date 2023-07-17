import React from "react";

const Project = ({ name, img, alt, deployed, git }) => {
  const handleGit = () => {
    window.open(git);
  };
  const handleDeployed = () => {
    window.open(deployed);
  };

  return (
    <div className="grid w-96 h-78 border-2 border-black rounded-lg mb-14 content-between custom-background text-slate-300">
      <span className="flex justify-around items-center w-full h-10">
        {name}
      </span>
      <div className="w-full h-52 border-2 border-black">
        <img className="w-full h-full" src={img} alt={alt}></img>
      </div>
      <div className="flex items-center h-10">
        <span
          className="flex justify-center items-center w-full h-full hober:text-slate-600 hover:cursor-pointer"
          onClick={handleGit}
        >
          GitHub Repository
        </span>
        <span
          className="flex justify-center items-center w-full h-full hover:text-slate-600 hover:cursor-pointer"
          onClick={handleDeployed}
        >
          Deployed Page
        </span>
      </div>
    </div>
  );
};

export default Project;
