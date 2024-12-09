import ProjectShortStats from "../ProjectShortStats/ProjectShortStats";

const ProjectsList = () => {
  return (
    <table className="w-full rounded-b-2xl overflow-hidden">
      <thead className="pt-6 px-3 pb-3">
        <tr className="bg-baseBackground">
          <th className="pl-3 pt-6 pb-3 w-1/5 text-secondaryText text-xs font-medium leading-[130%] text-left">Securities</th>
          <th className="pt-6 pb-3 w-1/5 text-secondaryText text-xs font-medium leading-[130%] text-left">Column 2</th>
          <th className="pt-6 pb-3 w-1/5 text-secondaryText text-xs font-medium leading-[130%] text-left">Column 3</th>
          <th className="pt-6 pb-3 w-1/5 text-secondaryText text-xs font-medium leading-[130%] text-left">Column 4</th>
          <th></th>
        </tr>
      </thead>
      
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (<ProjectShortStats key={index} background={index % 2 !== 0 ? "#101318" : ""} />))}
        </tbody>
    </table>
  );
};

export default ProjectsList;