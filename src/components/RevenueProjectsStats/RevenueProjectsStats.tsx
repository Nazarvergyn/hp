import { useEffect, useRef, useState } from "react";
import incomeIcon from "../../assets/images/income-icon.svg";
import BarcodeChart from "../Charts/BarcodeChart/BarcodeChart";
import ProjectRevenueCard from "../ProjectRevenueCard/ProjectRevenueCard";

const RevenueProjectsStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setTotalWidth(containerRef.current.clientWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-w-[1240px] relative w-full overflow-hidden px-8 py-12 rounded-2xl border border-solid border-[rgba(61,63,69,0.56)]">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-grid-lines-expanded.png')",
        }}
      ></div>

      <div className="relative z-10 flex flex-col gap-10">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="text-baseText font-semibold leading-[150%]">OPTIONS PORTFOLIO</h3>
            <p className="text-baseText text-[32px] font-semibold leading-[125%]">$1,024,654.80</p>
          <div className="flex items-center gap-3">
            <span className="text-secondaryText text-sm font-semibold leading-[170%]">PNL for today:</span>
              <div className="flex items-center gap-1">
              <img src={incomeIcon} alt="income icon" draggable={false} />
              <span className="text-success text-sm font-semibold leading-[170%]">+$1.15(3.82%)</span>
          </div>
          </div>
        </div>

          <div className="flex gap-20">
            <ProjectRevenueCard/>
            <ProjectRevenueCard/>
            <ProjectRevenueCard/>
          </div>
        </div>

        <div ref={containerRef} className="flex">
          <BarcodeChart percentage={50} background="#2C463F" totalWidth={totalWidth * 0.5}/>
          <BarcodeChart percentage={25} background="#5C4BF0" totalWidth={totalWidth * 0.5}/>
          <BarcodeChart percentage={15} background="#F15758" totalWidth={totalWidth * 0.5}/>
          <BarcodeChart percentage={10} background="#A8C5DA" totalWidth={totalWidth * 0.5}/>
        </div>
      </div>
    </div>
  );
};

export default RevenueProjectsStats;
