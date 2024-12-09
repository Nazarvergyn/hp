import { useState } from "react";
import { MAIN_ROUTES } from "../../routing/mainRoutes";
import Checkbox from "../UI/Checkbox/Checkbox";
import InputField from "../UI/InputField/InputField";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

interface Props { 
  handleNavigate: (path: string) => void;
  onNextStep: () => void;
}

const SignUpFormStep2: React.FC<Props> = ({ handleNavigate, onNextStep }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <form className="mt-10 w-full flex flex-col gap-8">
      <InputField label="Password" placeholder="Password" />
      <InputField label="Repeat Password" placeholder="Repeat Password" />
      <Checkbox checked={checked} toggleChecked={toggleChecked} label="Yes, sign me up for Hypermind newsletter & Marketing Communication" />
      <span className="text-secondaryText text-xs font-medium">By creating an account, you agree with our <span className="text-baseText underline cursor-pointer">Terms of Service.</span></span>
      <PrimaryButton onClick={onNextStep}>Sign Up</PrimaryButton>
      <div className="flex justify-center gap-6">
        <span className="text-baseText">Do you already have an account?</span>
        <span onClick={() => handleNavigate(MAIN_ROUTES.LOGIN)} className="text-basePrimary font-semibold cursor-pointer">Log In</span>
      </div>
    </form>
  );
};

export default SignUpFormStep2;