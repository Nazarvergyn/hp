import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpFormStep1 from "../../components/SignUpFormStep1/SignUpFormStep1";
import SignUpFormStep2 from "../../components/SignUpFormStep2/SignUpFormStep2";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import Steps from "../../components/Steps/Steps";

const SignUpPage = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  }

  const handleUpdateStep = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(1);
    }
  }

  return (
    <div
      style={{
        backgroundImage: "url('/bg-sign-up.jpg')",
      }}
      className="bg-cover bg-no-repeat w-full p-6 flex flex-col lg:flex-row flex-1"
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(37, 39, 46, 0.24) 0%, rgba(37, 39, 46, 0.50) 50%, rgba(37, 39, 46, 0.24) 100%)',
        }}
        className="lg:w-1/2 min-h-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 rounded-2xl flex flex-col justify-between gap-8 border border-solid border-[rgba(61,63,69,0.56)]"
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-baseText text-xl md:text-2xl lg:text-3xl font-semibold leading-[140%]">Get up and running in 3 minutes</h2>
          <Steps activeStep={activeStep}/>
        </div>

        <div className="flex items-center flex-wrap justify-between gap-4">
          <span className="text-baseText text-sm leading-[140%] tracking-[0.5px]">Copyright © 2024 Hypermind</span>
          <SocialMediaIcons />
        </div>
      </div>

      <div className="lg:w-1/2 min-h-full py-10 md:px-8 flex justify-center">
        <div className="w-full lg:max-w-[525px] flex flex-col justify-center">
          <div className="flex flex-col gap-2 sm:gap-3.5">
            <h1 className="text-baseText text-2xl md:text-3xl lg:text-4xl font-bold leading-[140%]">Create An Account</h1>
            <p className="text-secondaryText leading-[150%]">New to Hypermind? Quickly sign up for an account now.</p>
          </div>

            {activeStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <SignUpFormStep1 handleNavigate={handleNavigate} onNextStep={handleUpdateStep} />
              </motion.div>
            )}
            {activeStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
              <SignUpFormStep2 handleNavigate={handleNavigate} onNextStep={handleUpdateStep} />
              </motion.div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
