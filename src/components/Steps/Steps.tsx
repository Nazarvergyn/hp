import StepItem from "../StepItem/StepItem";

interface Props {
  activeStep: number;
}

const Steps: React.FC<Props> = ({activeStep}) => {
  const steps = [
    {
      title: "Your details",
      description: "Please provide your name and email",
    },
    {
      title: "Choose a password",
      description: "Choose a secure password",
    },
    // {
    //   title: "Welcome to Hypermind",
    //   description: "Get up and running in minutes",
    // },
  ]

  return (
    <div className="flex flex-col gap-4">
      {steps.map(({title, description}, index) => (
        <StepItem key={index} title={title} description={description} activeStep={activeStep === (index + 1)} isLastStep={index === steps.length - 1} />
      ))}
    </div>
  );
};

export default Steps;