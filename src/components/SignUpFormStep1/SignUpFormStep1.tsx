import { MAIN_ROUTES } from "../../routing/mainRoutes";
import InputField from "../UI/InputField/InputField";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

interface Props { 
  handleNavigate: (path: string) => void;
  onNextStep: () => void;
}

const SignUpFormStep1: React.FC<Props> = ({handleNavigate, onNextStep}) => {
  return (
    <form className="mt-8 sm:mt-10 w-full flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <InputField label="First Name" placeholder="First Name" />
        <InputField label="Last name" placeholder="Last Name" />
      </div>
      <InputField label="Email" placeholder="Email" />
      <span className="text-secondaryText text-xs font-medium">By creating an account, you agree with our <span className="text-baseText underline cursor-pointer">Terms of Service.</span></span>
      <PrimaryButton onClick={onNextStep}>Continue</PrimaryButton>
      <div className="flex justify-center gap-6">
        <span className="text-baseText">Do you already have an account?</span>
        <span onClick={() => handleNavigate(MAIN_ROUTES.LOGIN)} className="text-basePrimary font-semibold cursor-pointer">Log In</span>
      </div>
    </form>
  );
};

export default SignUpFormStep1;