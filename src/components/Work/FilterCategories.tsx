import projects, { ProjectType } from "../DB/Projects";
import { FlexRow } from "../UI/themeStyles";
import { Category, Count, FilterDot } from "./WorkStyles";

interface CategoryProps {
  label: string;
  value: string;
  activeFilter: string[];
  onFilter: (values: string[]) => void;
  count: number;
}

const FilterCategories = ({
  label,
  value,
  activeFilter,
  onFilter,
  count,
}: CategoryProps) => {
  const clickHandler = (value: string) => {
    let active = activeFilter.includes(value) ? false : true;
    filterHandler(active, value);
  };

  const filterHandler = (active: boolean, value: string) => {
    if (value === "all") {
      activeFilter.includes("all") ? onFilter([]) : onFilter(["all"]);
      return;
    }

    activeFilter = activeFilter.filter((filter) => filter !== "all");

    let filterBy = active
      ? [...activeFilter, value]
      : activeFilter.filter((filter) => filter !== value);
    onFilter(filterBy);
  };

  return (
    <Category
      onClick={() => clickHandler(value)}
      $active={activeFilter.includes(value)}
      key={value}
    >
      <FlexRow>
        <FilterDot $active={activeFilter.includes(value)} />
        {label}
      </FlexRow>
      <Count $active={activeFilter.includes(value)}>{count}</Count>
    </Category>
  );
};

export default FilterCategories;
