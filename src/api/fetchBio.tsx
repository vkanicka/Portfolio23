import { SetStateAction } from "react";
import Bio from "../models/Bio";
const {
  REACT_APP_CONTENTFUL_SPACE,
  REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  REACT_APP_CONTENTFUL_ENVIRONMENT,
  REACT_APP_CONTENTFUL_BIO_ID,
} = process.env;

const fetchBio = (setBio: {
  (value: SetStateAction<Bio>): void;
  (arg0: Bio): any;
}) => {
  const apiUrl = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACE}/environments/${REACT_APP_CONTENTFUL_ENVIRONMENT}/?access_token=${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`;

  const query = `query {
    bio (id:"${REACT_APP_CONTENTFUL_BIO_ID}") {
      name
      title
      headshot {
        url
      }
      about {
        listsCollection {
        items {
          label
          values
          wordDivider
        }
      }
        externalLink {
          label
          url
          urlShorthand
        }
      }
      socialsCollection {
        items {
          label
          url
          icon {
            url
            title
          }
        }
      }
      projectsCollection {
        items {
          title
          projectImage {
            title
            url
          }
          reviews
          url
          githubRepoUrl
        }
      }
    }
  }`;
  window
    .fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
    .then((response) => response.json())
    .then((json) => json.data.bio)
    .then((bio: Bio) => setBio(bio));
};

export default fetchBio;
