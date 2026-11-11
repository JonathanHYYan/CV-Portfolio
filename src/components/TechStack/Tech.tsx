import {
  Css,
  Html,
  JavaScript,
  Nextjs,
  React,
  Scss,
  TechCards,
  TypeScript,
  Text,
  PHP,
  LaravelLogo,
  Jq,
  Boot,
  VueJs,
  Styled,
  Tailwind,
} from "./TechStyles";
import { ComponentType } from "react";

interface TechItem {
  name: string;
  icon: ComponentType;
}

const techStack: TechItem[] = [
  { name: "HTML", icon: Html },
  { name: "CSS", icon: Css },
  { name: "JavaScript", icon: JavaScript },
  { name: "SCSS", icon: Scss },
  { name: "TypeScript", icon: TypeScript },
  { name: "React", icon: React },
  { name: "NextJS", icon: Nextjs },
  { name: "PHP", icon: PHP },
  { name: "Laravel", icon: LaravelLogo },
  { name: "JQuery", icon: Jq},
  { name: "Bootstrap", icon: Boot},
  { name: "VueJS", icon: VueJs},
  { name: "Styled Component", icon: Styled},
  { name: "Tailwind", icon: Tailwind}
];

const Tech = (visible: boolean) => (
  techStack.map(({ name, icon: Icon }, index) => (
    <TechCards key={name} $index={index} $visible={visible}>
      <Icon />
      <Text>{name}</Text>
    </TechCards>
  ))
);

export default Tech;
