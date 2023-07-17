import { AiOutlineDownload } from "react-icons/ai";
import { skills } from "../data";

import Icon from "../components/Icon";

const onButtonClick = () => {
  window.open("https://docs.google.com/document/d/1TVMCmGbm7vlNpFXzRMM0NiUBZhGsFAHbx4LsFmiVUug/edit?usp=sharing")
}

const Resume = () => {
  return (
    <div className="resume">
      <div>
        <h1 className="grid justify-items-center mt-10 mb-10 custom-color text-bold">
          Resume Page
        </h1>
      </div>
        <div className="flex flex-col items-center py-10 self-center">
          <span>Click here to download my resume</span>
          <AiOutlineDownload className="h-12 w-12 self-center fill-slate-300 hover:fill-slate-500 hover:cursor-pointer" onClick={onButtonClick} />
        </div>
        <div>
        <h3 className="grid justify-items-center mt-10 custom-color text-bold">Skills</h3>
        <div className="flex justify-around sa_section md:m-10 pt-5 ">
          {skills.map((data) => {
            return (
              <Icon key={data.id} title={data.title} src={data.src}></Icon>
            );
          })}
        </div>
        </div>
    </div>
  );
};

export default Resume;
