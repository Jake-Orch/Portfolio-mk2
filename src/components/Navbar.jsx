import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../assets/style.css";

const Navbar = () => {
  return (
    <div className="grid">
      <nav className="flex flex-col md:flex-row justify-between nav">
        <a href="/" className="my-name">
          Jake Orchard
        </a>
        <ul>
          {/* Here I have defined all of my page tabs, using the CustomLink function to add more style to them*/}
          <CustomLink to="/Portfolio-mk2/">About</CustomLink>
          <CustomLink to="/Portfolio-mk2/portfolio">Portfolio</CustomLink>
          <CustomLink to="/">Contact</CustomLink>
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

export default Navbar;
