import Project from "../components/Project";
import { projects } from "../data";

const Portfolio = () => {
  return (
    <div>
      <h1 className="grid justify-items-center mt-10 custom-color text-bold">
        Portfolio Page
      </h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center my-14">
        {/* This code block is mapping through the "projects" found in data.jsx, and passing through each bit of information needed to the Project component */}
        {projects.map((project) => (
          <Project
            name={project.name}
            key={project.name}
            img={project.img}
            alt={project.alt}
            deployed={project.deployed}
            git={project.git}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
