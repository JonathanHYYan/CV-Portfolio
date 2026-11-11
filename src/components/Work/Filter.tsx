import {
  FilterSidebar,
  Title,
  Text,
  FilterGroups,
  FilterSection,
} from "./WorkStyles";
import FilterCategories from "./FilterCategories";
import { FilterGroup } from "./Work";
import { ProjectType } from "../DB/Projects";

export interface FilterProps {
  projects: ProjectType[];
  activeFilter: string[];
  onFilter: (values: string[]) => void;
  filters: FilterGroup[];
}

const Filter = ({ projects, activeFilter, onFilter, filters }: FilterProps) => {
  
  const getCount = (fieldKey: keyof ProjectType, value: string) =>
    projects.filter((project) => project[fieldKey].includes(value)).length;

  const filterOptions = filters.map(({ group, field, options }, index) => {
    let filterBy = [];

    if (index === 0) {
      filterBy.push(
        <FilterCategories
          key="all"
          label="All"
          value="all"
          activeFilter={activeFilter}
          onFilter={onFilter}
          count={projects.length}
        />,
      );
    }

    filterBy.push(
      ...options.map(({ label, value }) => (
        <FilterCategories
          key={value}
          label={label}
          value={value}
          activeFilter={activeFilter}
          onFilter={onFilter}
          count={getCount(field, value)}
        />
      )),
    );

    return (
      <FilterSidebar key={index}>
        <Title>{group}</Title>
        <FilterGroups>{filterBy}</FilterGroups>
      </FilterSidebar>
    );
  });

  return (
    <FilterSection>
      <div>
        <Text>FILTER BY</Text>
        {filterOptions}
      </div>
    </FilterSection>
  );
};
export default Filter;
