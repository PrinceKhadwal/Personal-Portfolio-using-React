import React from "react";
import { Projects } from "../utils/data";

const Project = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto pb-0 md:pb-20 px-6 md:px-20 relative"
      id="project"
    >
      <h5 className="text-primary text-2xl md:text-3xl font-semibold text-center pb-14 md:p-4">
        Projects
      </h5>
        <div className="bg-gradient-to-br from-blue-950 to-slate-900  rounded-lg border border-blue-800/40 p-3 mx-0 md:mx-6  mb-6 md:mb-0 flex items-center justify-center flex-wrap m-auto">
          {Projects.map((item, index) => (
            <IndividualProject item={item} key={index} />
          ))}
        </div>
    </section>
  );
};

const IndividualProject = ({ item }) => {
  return (
    <div class="text-center m-4 w-72 overflow-hidden rounded-3xl px-4 py-8 bg-navbg flex flex-col items-center">
      {/* <div class="relative h-40 bottom-8 w-[200px]">
          <img src={item.image_link} alt="" className="rounded-2xl"/>
        </div> */}
      <h1 class="text-white text-xl mb-4">{item.title}</h1>
      <p class="text-white text-sm">{item.description}</p>
      <div class=" flex justify-around">
        <a
          href={item.GithubLink}
          target="_blank"
          class="text-sm ml-2 px-5 py-3 border border-solid border-slate-500 bg-transparent text hover:bg-[#1f1f38]  cursor-pointer rounded-lg mx-1 mt-4"
        >
          GitHub
        </a>
        <a
          href={item.LiveServerLink}
          target="_blank"
          class="text-sm ml-2 px-5 py-3 border border-solid border-slate-500 bg-transparent text hover:bg-[#1f1f38] cursor-pointer rounded-lg mx-1 mt-4 live"
        >
          Live Link
        </a>
      </div>
    </div>
  );
};

export default Project;
