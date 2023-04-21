import { useState } from "react";
import ProjectButton from "./ProjectButton";
import ProjectReviews from "./ProjectReviews";

type Props = {
  url?: string;
  reviews?: string[];
  githubRepoUrl?: string;
  projectKey: number;
};

const ProjectModal = ({ url, reviews, githubRepoUrl, projectKey }: Props) => {
  const [openReviews, setOpenReviews] = useState(false);
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-40 flex w-full flex-col items-center justify-center gap-6 bg-neutral-900 text-2xl text-my-lilac-400 opacity-75 hover:opacity-95 lg:opacity-0">
      {url && <ProjectButton label={"App"} url={url} />}
      {githubRepoUrl && (
        <ProjectButton label={"Github Repo"} url={githubRepoUrl} />
      )}
      {reviews && (
        <ProjectButton
          label={"Reviews"}
          reviews={reviews}
          setOpenReviews={setOpenReviews}
        />
      )}
      {reviews && openReviews && (
        <ProjectReviews reviews={reviews} projectKey={projectKey} />
      )}
    </div>
  );
};

export default ProjectModal;
