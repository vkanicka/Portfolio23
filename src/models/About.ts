type About = {
  listsCollection: {
    items: {
      label: string;
      values: string[];
      wordDivider: string;
    }[];
  };
  externalLink: {
    label: string;
    url: string;
    urlShorthand: string;
  };
};

export default About;
