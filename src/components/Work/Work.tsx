import { useMemo, useState } from "react";
import { Eyebrow, Line, Section, Title } from "../UI/themeStyles";
import Filter from "./Filter";
import { ProjectRow, Text } from "./WorkStyles";
import Projects from "./Projects";
import projects, { ProjectType } from "../DB/Projects";
import { capitalise } from "../../utils/string";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  group: string;
  field: keyof ProjectType;
  options: FilterOption[];
}

const sortOptions = (options: string[]): FilterOption[] =>
  Array.from(new Set(options)).map((value: string) => ({
    label: capitalise(value),
    value: value,
  }));

export const projectFilterBy = (label: keyof ProjectType): string[] =>
  projects.flatMap((project: ProjectType) => project[label]);

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<string[]>([]);

  const filters: FilterGroup[] = useMemo(
    () => [
      {
        group: "Type",
        field: "category",
        options: sortOptions(projectFilterBy("category")),
      },
      {
        group: "Tech",
        field: "stack",
        options: sortOptions(projectFilterBy("stack")),
      },
      {
        group: "Year",
        field: "date",
        options: sortOptions(projectFilterBy("date")),
      },
    ],
    [projects],
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter.length === 0) return projects;

    return projects.filter((project) =>
      filters.every(({ field, options }) => {
        const values = options.map((option) => option.value);
        const active = activeFilter.filter((filter) => values.includes(filter));
        if (active.length === 0) return true;
        const projectValue = project[field] as string[];
        return active.every((filter) => projectValue.includes(filter));
      }),
    );
  }, [activeFilter, filters, projects]);

  return (
    <Section id="projects">
      <Eyebrow>WORK</Eyebrow>
      <Title>Projects</Title>
      <Line />
      <ProjectRow>
        <Filter
          projects={projects}
          activeFilter={activeFilter}
          onFilter={setActiveFilter}
          filters={filters}
        />
        <Projects visibileProjects={visibleProjects} />
      </ProjectRow>
    </Section>
  );
};

export default Work;
