import projects, { ProjectType } from "../DB/Projects";
import Project from "./Project";
import {
  CountNumber,
  ProjectCards,
  ProjectSection,
  ShowingCount,
} from "./WorkStyles";

interface ProjectProps {
  visibileProjects: ProjectType[];
}

const Projects = ({ visibileProjects }: ProjectProps) => {
  const projectCards = visibileProjects.map((visibileProject) => (
    <Project key={visibileProject.title} {...visibileProject} />
  ));

  console.log("=========");
  console.log(visibileProjects);
  console.log(projects);

  return (
    <ProjectSection>
      <ShowingCount>
        Showing <CountNumber>{visibileProjects.length}</CountNumber> of{" "}
        {projects.length} projects
      </ShowingCount>
      <ProjectCards>{projectCards}</ProjectCards>
    </ProjectSection>
  );
};

export default Projects;
