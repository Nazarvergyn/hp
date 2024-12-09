import { projects } from "../../assets/data/projects";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import ProjectCard from "../ProjectCard/ProjectCard";
import HeadingSection from "../UI/HeadingSection/HeadingSection";

const Projects = () => {
  return (
    <MaxWidthContainer>
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-[72px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 sm:gap-6 lg:gap-12">
          <HeadingSection>Our projects</HeadingSection>
          <p data-aos="fade-left" data-aos-delay={300} className="max-w-[725px] lg:max-w-[625px] text-secondaryText text-base sm:text-lg leading-[150%]">Each of these projects demonstrates Hypermind Labs’ commitment to leveraging AI for transformative solutions across various industries, including healthcare, gaming, and digital content management.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-8">
          {projects.map((project, index) => <ProjectCard key={index} index={index} project={project} />)}
        </div>
      </div>
    </MaxWidthContainer>
  );
};
export default Projects;