import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Nsb = () => {
  return <div></div>;
};
const Projekcija = () => {
  return (
    <div className="text-left">
      <div className="p-2">
        <h3 className="text-3xl font-bold text-center">Projekcija</h3>
        <p className="text-center mt-4">
          Web app for remotly displaying slideshows using Raspberry Pi
        </p>
      </div>

      <h2
        id="about-the-project"
        className="text-2xl border-b border-b-stone-700"
      >
        About The Project
      </h2>
      <div className="space-y-6">
        <p className="p-4">
          <a href="https://example.com">
            <img src="/projekcija.png" alt="Product Name Screen Shot" />
          </a>
        </p>
        <p>
          This is custom built app. I built it while I had an internship at
          Osnovna šola Rače. My mentor said they need a way to display
          images/videos on tv mounted around the school so I came up with this
          idea.
        </p>
        <p>
          This uses Raspberry Pi 3s attached to the back of the tv`s. The
          Raspberry`s are connected to a server hosting a Express app that is
          controling them over HTTP requests
        </p>
      </div>
    </div>
  );
};

const Pixboard = () => {
  window.location.href = "https://github.com/alkrajnc/imageboard";
};

const Project = () => {
  const [projectId] = useState(useLoaderData());
  if (projectId === "projekcija") {
    return <Projekcija />;
  } else if (projectId === "nsb") {
    return <Nsb />;
  } else {
    return <Pixboard />;
  }
};
export default Project;
