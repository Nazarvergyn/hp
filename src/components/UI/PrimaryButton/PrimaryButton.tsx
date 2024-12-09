import React from "react";

interface Props {
  children: React.ReactNode;
  aosDirection?: "left" | "right" | "up" | "down";
  aosDelay?: number;
  onClick?: () => void;
}

const PrimaryButton: React.FC<Props> = ({children, aosDirection, aosDelay, onClick}) => {
  return (
    <button onClick={onClick} data-aos={`fade-${aosDirection}`} data-aos-delay={aosDelay} className="p-1 sm:p-1.5 rounded-[100px] border border-solid border-[rgba(134,120,255,0.24)]">
      <div
        style={{
          boxShadow: `0px 4px 64px 0px rgba(92, 75, 240, 0.32), 0px 4px 128px 0px rgba(92, 75, 240, 0.32)`,
        }}
        className="px-6 sm:px-8 py-2 sm:py-4 rounded-[100px] border border-solid border-[#8678FF] bg-basePrimary"
      >
        <span className="text-baseText text-sm sm:text-base font-semibold leading-[150%]">{children}</span>
      </div>
    </button>
  );
};
export default PrimaryButton;