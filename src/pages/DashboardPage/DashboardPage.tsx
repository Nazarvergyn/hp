import MaxWidthContainer from "../../components/MaxWidthContainer/MaxWidthContainer";
import ProjectsTools from "../../components/ProjectsTools/ProjectsTools";
import RevenueProjectsStats from "../../components/RevenueProjectsStats/RevenueProjectsStats";

const DashboardPage = () => {
  return (
    <div className="m-6 xl:m-10 flex flex-col gap-8">
      <MaxWidthContainer>
        <div className="overflow-auto max-w-full flex flex-col gap-8">
          <RevenueProjectsStats />
          <ProjectsTools />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default DashboardPage;