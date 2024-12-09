import prostateLogo from "../../../assets/images/prostate-logo.svg";

interface Props {
  type?: "circle" | "square";
}

const LogoWrapper: React.FC<Props> = ({type = "circle"}) => {
  return (
    <div className={`min-w-8 max-w-8 min-h-8 max-h-8 p-2 ${type === "circle" ? "rounded-full" : "rounded-md"} border border-solid border-baseBorder flex justify-center items-center`}>
      <img className="w-full h-full object-cover" src={prostateLogo} alt="prostate logo" />
    </div>
  );
};

export default LogoWrapper;