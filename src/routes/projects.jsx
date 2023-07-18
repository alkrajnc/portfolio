import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Project = ({ children, className, bgImage, project }) => {
  return (
    <div
      style={{ backgroundImage: `url(/${bgImage})` }}
      className={
        "bg-indigo-400 w-full rounded-2xl border p-2 bg-center bg-cover " +
        " " +
        className
      }
    >
      <Link className="w-full h-full" to={`/projects/${project}`}>
        {children}
      </Link>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/portfolio/projects`).then((res) => {
      setProjects(res.data);
    });
  }, []);
  console.log(projects);
  return (
    <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-projects">
      <h2 className="text-4xl sm:col-span-2 lg:col-span-3 mb-4 font-black bg-clip-text text-transparent p-2 bg-gradient-to-r from-sky-800 to-violet-700">
        Projects
      </h2>
      <Project project="projekcija" bgImage="projekcija.png" className="">
        <h3 className="text-2xl mt-4 text-indigo-800">ProjekcijaJS</h3>
        <p className="text-white p-2">
          Web app for remotly displaying slideshows using Raspberry Pi
        </p>
      </Project>
      <Project project="nsb" className="">
        <a
          href="https://github.com/alkrajnc/imageboard"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="text-2xl mt-4 text-indigo-800">NSB Erasmus</h3>
          <p className="text-stone-900 p-2">
            A new Erasmus+ project aimed to foster the motivation of NEET
            students
          </p>
        </a>
      </Project>
      <Project project="pixboard" className="">
        <h3 className="text-2xl mt-4 text-indigo-800">PixBoard</h3>
        <p className="text-stone-900 p-2">
          An image board social media webapp built with react
        </p>
      </Project>
    </div>
  );
};

export default Projects;
