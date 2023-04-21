import About from "./About";
import Project from "./Project";
import Social from "./Social";

type Bio = {
  name: string;
  title: string;
  headshot: {
    url: string;
  };
  about: About;
  socialsCollection: {
    items: Social[];
  };
  projectsCollection: {
    items: Project[];
  };
};

export default Bio;
