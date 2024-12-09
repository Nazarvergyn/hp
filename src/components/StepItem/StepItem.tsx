interface Props {
  title: string;
  description: string;
  activeStep: boolean;
  isLastStep: boolean;
}

const StepItem: React.FC<Props> = ({ title, description, activeStep, isLastStep }) => {
  return (
    <div className="flex items-start gap-6">
      <div className="flex flex-col items-center gap-4">
        <div
          className={`w-8 h-8 flex justify-center items-center border border-solid rounded-full transition-colors duration-300 ease-in-out ${
            activeStep ? "border-basePrimary" : "border-baseBorder"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
              activeStep ? "bg-basePrimary" : "bg-[rgba(251,251,251,0.5)]"
            }`}
          ></div>
        </div>
        {!isLastStep && (
          <div
            className="h-12 w-[1px] bg-[#3D3F45] transition-all duration-300 ease-in-out"
          ></div>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <p className="text-baseText text-base md:text-lg font-semibold leading-[150%]">{title}</p>
        <span className="text-sm text-secondaryText leading-[140%]">{description}</span>
      </div>
    </div>
  );
};

export default StepItem;
