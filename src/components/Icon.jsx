import React from "react";

function Icon(props) {
  return (
    // This Code is returning the icons provided by its parent element (resume.jsx) and using the data provided in data.jsx to display the wanted icons and titles

    <div className="grid grid-rows-2 justify-items-center h-24 w-24 p-2 ">
      {props.src}
      <span>{props.title}</span>
    </div>
  );
}

export default Icon;
