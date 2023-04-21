import React, { useState, useEffect } from "react";
import "./App.css";
import Bio from "./models/Bio";
import fetchBio from "./api/fetchBio";
import AboutComponent from "./components/About";
import SocialsComponent from "./components/Socials";
import BioComponent from "./components/Bio";
import ProjectsComponent from "./components/Projects";

function App() {
  let [bio, setBio] = useState({} as Bio);

  useEffect(() => {
    fetchBio(setBio);
  }, []);

  return (
    <div className="mx-auto grid grid-cols-12 bg-black text-my-blue lg:max-w-7xl lg:gap-x-12 lg:gap-y-20">
      <header className="col-span-10 bg-black">
        <div className="flex flex-col gap-y-8">
          <BioComponent bio={bio} />
          <AboutComponent about={bio?.about} />
        </div>
      </header>
      <SocialsComponent socialsCollection={bio?.socialsCollection?.items} />
      <ProjectsComponent projectsCollection={bio?.projectsCollection?.items} />
    </div>
  );
}

export default App;
