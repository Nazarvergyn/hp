import LogoWrapper from "../UI/LogoWrapper/LogoWrapper";

const ProjectRevenueCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <LogoWrapper />
        <span className="text-baseText text-[32px] font-semibold leading-[125%]">17.52$</span>
      </div>

      <p className="text-secondaryText text-sm font-semibold leading-[170%]">Esport.bio</p>
    </div>
  );
};

export default ProjectRevenueCard;