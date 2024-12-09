import filtersIcon from "../../assets/images/filters-icon.svg";
import reloadIcon from "../../assets/images/reload-icon.svg";
import ProjectsList from "../ProjectsList/ProjectsList";

const ProjectsTools = () => {
  return (
    <div
      style={{
          background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24) 0%, rgba(37, 39, 46, 0.50) 50%, rgba(37, 39, 46, 0.24) 100%)"
        }}
      className="min-w-[1240px] w-full rounded-2xl border border-solid border-[rgba(61,63,69,0.56)]"
    >
      <div className="py-3 px-4 flex items-center justify-between border-b border-solid border-[rgba(61,63,69,0.56)]">
        <div className="w-1/3 h-12 bg-[#292B30] rounded-lg"></div>

        <div className="flex items-center gap-2.5">
          <button className="py-2.5 px-4 bg-[#292B30] rounded-md border border-solid border-[rgb(61,63,69,0.56)] flex items-center gap-2 text-baseText text-sm font-medium leading-[160%]">
            <img src={filtersIcon} alt="filters icon" />
            Filters
          </button>
          <button className="p-2.5 bg-[#292B30] rounded-md border border-solid border-[rgb(61,63,69,0.56)] flex items-center justify-center">
            <img src={reloadIcon} alt="reload icon" />
          </button>
        </div>
      </div>
      
      <ProjectsList />
    </div>
  );
};

export default ProjectsTools;