import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../assets/style.css";

const Navigation = () => {
  return (
    <div className="grid">
      <nav className="flex flex-col md:flex-row justify-between nav sm:px-10">
        <a href="/" className="my-name self-center">
          Jake Orchard
        </a>
        {/* Here I have defined all of my page tabs, using the CustomLink function to add more style to them*/}
        <ul className="flex flex-wrap justify-center">
          <CustomLink to="/Portfolio-mk2/">About</CustomLink>
          <CustomLink to="/Portfolio-mk2/portfolio">Portfolio</CustomLink>
          <CustomLink to="/Portfolio-mk2/contact">Contact</CustomLink>
          <CustomLink to="/Portfolio-mk2/resume">Resume</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

// This customLink function is used to add the "active" class to whichever link is active
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navigation;
