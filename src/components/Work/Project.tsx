import { ProjectType } from "../DB/Projects";
import { Eyebrow } from "../UI/themeStyles";
import {
  Description,
  Pills,
  ProjectBody,
  ProjectCard,
  ProjectTitle,
  Thumbnail,
  ThumbnailWrapper,
  View,
} from "./WorkStyles";
import { Pill } from "../UI/themeStyles";
import { capitalise } from "../../utils/string";
import { ArrowRight } from "@styled-icons/remix-line";


const Project = ({
  title,
  role,
  thumbnail,
  category,
  date,
  description,
  stack,
  link
}: ProjectType) => {
  const techPills = (
    <Pills>
      {stack.map((tech) => (
        <Pill key={tech}>{capitalise(tech)}</Pill>
      ))}
    </Pills>
  );

  return (
    <ProjectCard>
      <ThumbnailWrapper>
        <Thumbnail src={thumbnail} onError={(e)=>{e.currentTarget.style.display = 'none'}} alt={title}/>
      </ThumbnailWrapper>
      <ProjectBody>
        <Eyebrow>{category[0]}</Eyebrow>
        <ProjectTitle>{title}</ProjectTitle>
        <Description>{description}</Description>
        {techPills}
        <View href={link}>View <ArrowRight/></View>
      </ProjectBody>
    </ProjectCard>
  );
};

export default Project;
