import { AiOutlineDownload } from "react-icons/ai";

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
    </div>
  );
};

export default Resume;
