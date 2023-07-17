import Project from "../components/Project";
import images from "../assets/images/projects";

const Portfolio = () => {
  const projects = [
    {
      name: "WizDumb",
      img: images.WizDumb,
      alt: "WizDumb Homepage",
      deployed: "/",
      git: "https://github.com/Cdrcar/Wizdumb",
    },
    {
      name: "Safe Keeping",
      img: images.SafeKeeping,
      alt: "Safe Keeping Homepage",
      deployed: "https://safekeeping.herokuapp.com/",
      git: "https://github.com/Jake-Orch/Project2",
    },
    {
      name: "Weather I Go",
      img: images.WeatherIGo,
      alt: "Weather I Go Homepage",
      deployed: "https://faithscoding.github.io/weather-i-go/",
      git: "https://github.com/FaithsCoding/weather-i-go",
    },
    {
      name: "Note Maker PWA",
      img: images.NoteMakerPWA,
      alt: "Note Maker PWA Homepage",
      deployed: "https://note-maker-pwa-48cf86482d7b.herokuapp.com/",
      git: "https://github.com/Jake-Orch/myNoteMakerPWA",
    },
    {
      name: "Weather Dashboard",
      img: images.WeatherDashboard,
      alt: "Weather Dashboard Homepage",
      deployed: "https://jake-orch.github.io/Weather-dashboard/",
      git: "https://github.com/Jake-Orch/Weather-dashboard",
    },
    {
      name: "Portfolio Mk2",
      img: images.PortfolioMk2,
      alt: "Portfolio Mk2 Homepage",
      deployed: "/",
      git: "https://github.com/Jake-Orch/Portfolio-mk2",
    },
  ];

  return (
    <div>
      <h1 className="grid justify-items-center mt-10 custom-color text-bold">Portfolio Page</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center my-14">
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
