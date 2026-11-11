import { CardTitle, Eyebrow, Visible} from "../UI/themeStyles";
import { Job, Role, TechStack, Text } from "./TimelineStyles";
import { Pill } from "../UI/themeStyles";

interface Experience {
  start: string;
  end: string;
  role: string;
  company: string;
  contract: string;
  description: string;
  stack?: string[];
  link?: string;
  related: boolean;
}

const experiences: Experience[] = [
  {
    start: "2023",
    end: "Present",
    role: "Full Stack Cloud Developer",
    company: "Sigma Freight",
    contract: "Full-time",
    description:
      "Full-stack developer working on custom PHP framework with Azure Cloud Intrastructure for logistics, CRM, warehousing and inventory management. 50+ bespoked portals for logistics businesses with customer support and error diagnostics.",
    stack: ['Php', 'HTML', 'CSS', 'JS', 'MSSQL', 'Azure', 'Bootstrap'],
    link: "https://www.sigmafreight.com/",
    related: true,
  },
  {
    start: "2022",
    end: "2023",
    role: "Junior Front End Developer",
    company: "Complete Tuition Ltd",
    contract: "Full-time",
    description:
      "Frontend developer for main marketing website along with an online learning portal and mobile responsive design.",
    stack: ['VUE.js', 'PHP', 'HTML', 'SCSS', 'CSS', 'JS', 'Wordpress'],
    link: "https://mmerevise.co.uk/",
    related: true,
  },
  {
    start: "2019",
    end: "2021",
    role: "General Manager",
    company: "DCI & E Ltd",
    contract: "Full-time",
    description:
      "General manager for logistics and import firm in London with retail and manufacturing oversight.",
    related: false,
  },
  {
    start: "2018",
    end: "2019",
    role: "Logistics & Operations Manager",
    company: "Kokoro Trading Ltd",
    contract: "Full-time",
    description:
      "Logistics manager, stock control, personel, and supply chain.",
    related: false,
  },
  {
    start: "2016",
    end: "2017",
    role: "Industrial Business Developer",
    company: "CUPA Burton Group Ltd",
    contract: "Full-time",
    description: "Technical & Sales advisor, estimation and costing drafting.",
    related: false,
  },
];

const Timeline = ({$visible}: Visible) => {

  return (
    <>
      {experiences.map((job) => {
        let stack = job.stack?.map((tech: string) => {
          return <Pill key={tech}>{tech}</Pill>;
        });

        return (
          <Job $visible={$visible} key={job.company}>
            <Eyebrow>
              {job.start} - {job.end}
            </Eyebrow>
            <CardTitle>{job.role}</CardTitle>
            <Role>
              {job.company} · {job.contract}
            </Role>
            <Text $visible={$visible}>{job.description}</Text>
            <TechStack>{stack}</TechStack>
          </Job>
        );
      })}
    </>
  );
};

export default Timeline;
