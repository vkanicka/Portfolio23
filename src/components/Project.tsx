import Project from "../models/Project";
import ProjectModal from "./ProjectModal";

type Props = {
  project: Project;
  projectKey: number;
};

const ProjectComponent = ({ project, projectKey }: Props) => {
  const { url, projectImage, reviews, githubRepoUrl } = project;

  return (
    <section className="relative col-span-5">
      {projectImage && (
        <img
          className="z-0 h-auto max-h-[390px] w-full object-contain hover:opacity-20"
          src={projectImage.url}
          alt={projectImage.title}
        />
      )}

      <ProjectModal
        url={url}
        githubRepoUrl={githubRepoUrl}
        reviews={reviews}
        projectKey={projectKey}
      />
    </section>
  );
};
export default ProjectComponent;
