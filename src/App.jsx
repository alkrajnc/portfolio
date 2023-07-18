import "./App.css";
import imgUrl from "./assets/dev_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faFileAlt,
  faGraduationCap,
  faToolbox,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Block = ({ children, className }) => {
  return (
    <div className={"bg-indigo-500 rounded-2xl" + " " + className}>
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-blocks gap-6">
      <Block className="col-span-2 p-2 row-span-1 flex flex-row justify-center shadow-md shadow-indigo-700 items-center">
        <div className="flex flex-col items-center">
          {/* <img
            className="rounded-full w-8/12 aspect-square shadow-xl"
            src={imgUrl}
            alt=""
          /> */}
          <FontAwesomeIcon icon={faUser} className="text-[600%] text-white" />
          <p className="text-stone-50">Aljaz Krajnc</p>
        </div>
        <h1 className="text-xl text-stone-50 font-semibold">
          18 y/o Front-End Developer
        </h1>
      </Block>
      <a
        href="https://github.com/alkrajnc"
        className="row-span-1 col-span-1 group hover:scale-[98%] duration-200 transition-all"
        target="_blank"
        rel="noreferrer"
      >
        <Block className="group:hover:scale-98 w-full h-full bg-indigo-800 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="text-[500%] text-stone-300"
          />
        </Block>
      </a>
      <div className="col-span-1 row-span-1 grid grid-cols-2 gap-3 grid-rows-2">
        <a
          href="mailto:aljazkrajnc8@gmail.com"
          className="row-span-1 col-span-1 group hover:scale-[98%] duration-200 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <Block className="group:hover:scale-95 w-full h-full  bg-indigo-800 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faAt}
              className="text-[200%] text-stone-300"
            />
          </Block>
        </a>
        <a
          href="https://www.linkedin.com/in/aljaž-krajnc-997153283/"
          className="row-span-1 col-span-1 group hover:scale-[98%] duration-200 transition-all cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <Block className="group:hover:scale-95 w-full h-full  bg-indigo-800 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[200%] text-stone-300"
            />
          </Block>
        </a>
        <Block className="bg-indigo-800 row-start-2 col-end-3">
          <Link
            to={"/cv"}
            className="w-full h-full flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faFileAlt}
              className="text-[200%] text-stone-300"
            />
          </Link>
        </Block>
      </div>
      <Link to="/projects" className="col-span-2">
        <Block className="h-full w-full flex justify-center items-center">
          <div>
            <h2 className="text-4xl  font-extrabold bg-clip-text text-transparent p-2 bg-gradient-to-r from-sky-800 to-violet-700">
              Projects
            </h2>
            <p className="text-stone-50">List of all my projects.</p>
          </div>
        </Block>
      </Link>
      <Block className="col-span-2 bg-transparent">
        <h2 className="text-2xl col-span-2 mb-2 font-extrabold bg-clip-text text-transparent p-2 bg-gradient-to-r from-sky-800 to-violet-700">
          Skills and education
        </h2>
        <div className="flex flex-col gap-4">
          <Block className="text-stone-50 p-2">
            <div className="">
              <FontAwesomeIcon icon={faGraduationCap} size="lg" />
              <p>
                Srednja elektro-racunalniska sola Maribor - Tehnik Racunalnistva
              </p>
            </div>
          </Block>
          <Block className="text-stone-50 px-6 py-2">
            <FontAwesomeIcon icon={faToolbox} size="lg" />
            <ul className="list-disc text-left columns-2">
              <li>Javascript</li>
              <li>NodeJS</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>ExpressJS</li>
              <li>React</li>
              <li>Linux OS</li>
              <li>CSS</li>
              <li>Docker</li>
              <li>Git</li>
            </ul>
          </Block>
          <Block className="text-stone-50 p-2">
            <FontAwesomeIcon icon={faTrophy} />
            <p>
              4th place in Državno tekmovanje elektro-računalniških šol
              Slovenije 2023
            </p>
          </Block>
        </div>
      </Block>
    </div>
  );
}

export default App;
