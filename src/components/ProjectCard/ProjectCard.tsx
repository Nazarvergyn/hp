import { useNavigate } from "react-router-dom";
import chevron from "../../assets/images/chevron-icon.svg";
import useDynamicIcon from "../../hooks/useDynamicIcon";
import { IProject } from "../../interfaces/IProject";
import "./styles.css";

interface Props {
  index: number;
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({ index, project }) => {
  const navigate = useNavigate();
  const { id, name, description, imageName } = project;

  const iconSrc = useDynamicIcon(imageName);

  const handleProjectClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div onClick={handleProjectClick} className="h-full transition-transform duration-300 transform hover:translate-y-3 cursor-pointer">
      <div data-aos="fade-up" data-aos-delay={index * 150} className="h-full project-card p-4 pb-6 rounded-2xl border border-solid border-baseBorder flex flex-col gap-4 sm:gap-6">
      <div
        style={{
          boxShadow: "0px 0px 8px 0px rgba(15, 15, 16, 0.32)",
        }}
        className="w-full h-[200px] rounded-lg"
      >
        {iconSrc && <img className="w-full h-[200px] rounded-lg object-cover" src={iconSrc} alt="project poster" />}
      </div>

      <div className="flex justify-between items-center gap-6">
        <div className="flex flex-col gap-3">
          <h4 className="text-baseText text-2xl font-semibold">{name}</h4>
          <p className="text-secondaryText leading-[150%]">{description}</p>
        </div>

        <button className="size-14 min-w-14 min-h-14 flex justify-center items-center rounded-full border border-solid border-transparent hover:border-[#8678FF] hover:bg-basePrimary button-box-shadow transition-all duration-300">
          <img src={chevron} alt="chevron icon" draggable={false} />
        </button>
      </div>
      </div>
    </div>

  );
};
export default ProjectCard;
