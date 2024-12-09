import HorizontalBarChart from "../../components/Charts/HorizontalBarChart/HorizontalBarChart";
import LineChartCustom from "../../components/Charts/LineChartCustom/LineChartCustom";
import PieChartCustom from "../../components/Charts/PieChartCustom/PieChartCustom";
import StepChartCustom from "../../components/Charts/StepChartCustom/StepChartCustom";
import FactCard from "../../components/FactCard/FactCard";
import MaxWidthContainer from "../../components/MaxWidthContainer/MaxWidthContainer";
import LogoWrapper from "../../components/UI/LogoWrapper/LogoWrapper";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const ProjectStatisticsPage = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className="min-h-full my-4 md:my-6">
      <MaxWidthContainer>
        <div className="flex flex-col gap-16">
          <div className="flex flex-wrap gap-6 items-start justify-between">
        <div className="flex items-center gap-3.5">
          <LogoWrapper type="square" />
          <p className="text-baseText font-semibold text-2xl md:text-[32px] leading-[125%]">Prostate AI</p>
        </div>

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row">
          <div className="md:max-w-[250px]">
            <FactCard index={0} title="700x" description="Lorem ipsum dolor sit amet consectetur." smallerText borderPosition={windowWidth >=768 ? "right" : "bottom"}/>
          </div>
          <div className="md:max-w-[250px]">
            <FactCard index={1} title="23%" description="Lorem ipsum dolor sit amet consectetur." smallerText borderPosition={windowWidth >=768 ? "right" : "bottom"} />
          </div>
          <div className="md:max-w-[250px]">
              <FactCard index={2} title="10,000" description="Lorem ipsum dolor sit amet consectetur." smallerText borderPosition={windowWidth >=768 ? "right" : "bottom"} isBorder={windowWidth >=768 ? false : true} />
          </div>
        </div>
      </div>
          <div className="flex flex-col gap-8">
            <StepChartCustom />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col gap-8 order-1 lg:-order-none">
              <HorizontalBarChart />
              <div className="flex flex-col gap-8 order-2 lg:-order-none">
                <PieChartCustom />
              </div>
              </div>
              <LineChartCustom />
            </div>
      </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default ProjectStatisticsPage;