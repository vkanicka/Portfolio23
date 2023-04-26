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
    <div className="flex flex-col gap-y-10 bg-black text-my-blue lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-12 lg:gap-y-20">
      <header className="bg-black lg:col-span-10">
        <div className="flex flex-col gap-y-10 sm:gap-y-6 lg:gap-y-8">
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
