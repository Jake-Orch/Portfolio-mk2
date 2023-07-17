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
          <CustomLink to="/">About</CustomLink>
          <CustomLink to="/portfolio">Portfolio</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/resume">Resume</CustomLink>
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
