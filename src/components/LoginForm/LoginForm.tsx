import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTES } from "../../routing/mainRoutes";
import Checkbox from "../UI/Checkbox/Checkbox";
import InputField from "../UI/InputField/InputField";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const LoginForm = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <form className="flex flex-col gap-6 sm:gap-8">
      <div data-aos-delay={200} data-aos={"fade-up"}>
        <InputField label="Email" placeholder="Your Email" iconName="email-icon.svg" />
      </div>
      <div data-aos-delay={250} data-aos={"fade-up"}>
        <InputField label="Password" placeholder="Min. 8 characters" iconName="email-icon.svg" />
      </div>
      <div className="mb-2 w-full flex items-center justify-between">
        <Checkbox checked={checked} toggleChecked={toggleChecked} label="Remember me" />
        <p className="text-baseText font-medium leading-[130%]">Forgot password?</p>
      </div>

      <PrimaryButton aosDelay={0} aosDirection="up">Log In</PrimaryButton>
      
      <div data-aos-delay={250} data-aos={"fade-up"} className="-mt-2 flex items-center justify-center gap-6">
        <span className="text-baseText leading-[130%]">Dont have account?</span>
        <span onClick={() => handleNavigate(MAIN_ROUTES.SIGN_UP)} className="text-basePrimary font-semibold leading-[130%] cursor-pointer">Create an Account</span>
      </div>
    </form>
  );
};

export default LoginForm;