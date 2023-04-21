import Project from "../models/Project";
import ProjectComponent from "./Project";

type Props = {
  projectsCollection?: Project[];
};

const ProjectsComponent = ({ projectsCollection }: Props) => {
  return (
    <section className="col-span-10 mx-auto grid grid-cols-2 gap-12 lg:col-start-2">
      {projectsCollection?.map((project: Project, projectKey: number) => {
        return (
          <section key={projectKey}>
            <ProjectComponent project={project} projectKey={projectKey} />
          </section>
        );
      })}
    </section>
  );
};

export default ProjectsComponent;
