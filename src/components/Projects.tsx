import Project from "../models/Project";
import ProjectComponent from "./Project";

type Props = {
  projectsCollection?: Project[];
};

const ProjectsComponent = ({ projectsCollection }: Props) => {
  return (
    <section className="flex flex-col gap-6 lg:col-span-10 lg:col-start-2 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
      {projectsCollection?.map((project: Project, projectKey: number) => {
        return (
          <section key={projectKey}>
            {project.title && <h4 className="lg:hidden">{project.title}</h4>}
            <ProjectComponent project={project} projectKey={projectKey} />
          </section>
        );
      })}
    </section>
  );
};

export default ProjectsComponent;
