import { useNavigate } from "react-router-dom";
import { MAIN_ROUTES } from "../../routing/mainRoutes";
import LogoWrapper from "../UI/LogoWrapper/LogoWrapper";

interface Props {
  background: string;
}

const ProjectShortStats: React.FC<Props> = ({ background }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${MAIN_ROUTES.PROJECTS_STATISTICS}/1`);
  }

  return (
    <tr style={{background}}>
            <td className="w-1/5 min-h-16 px-3 py-4">
              <div className="flex items-center gap-2.5">
                <LogoWrapper />
                <p className="text-baseText text-xs font-semibold leading-[130%]">Prostate AI</p>
              </div>
            </td>
            <td className="w-1/5 min-h-16 px-3 py-4">
              <div className="flex flex-col gap-2">
                <span className="text-baseText text-sm font-semibold leading-[120%]">50.5</span>
                <span className="text-baseText text-xs font-medium leading-[130%]">150,092$</span>
              </div>
            </td>
            <td className="w-1/5 min-h-16 px-3 py-4">
              <span className="text-baseText text-xs font-medium leading-[130%]">3.2$</span>
            </td>
            <td className="w-1/5 min-h-16 px-3 py-4">
              <span className="text-success text-sm font-semibold leading-[120%]">+0.82%</span>
            </td>
            <td className="min-h-16 px-3 py-4">
              <div className="flex justify-end items-center gap-6">
                <button onClick={handleNavigate} className="py-2 px-3.5 rounded-md bg-basePrimary text-baseText text-xs font-semibold leading-[140%] uppercase">
                  Open
                </button>
                <span className="text-baseText font-bold transform rotate-90 cursor-pointer">...</span>
              </div>
            </td>
          </tr>
  );
};

export default ProjectShortStats;