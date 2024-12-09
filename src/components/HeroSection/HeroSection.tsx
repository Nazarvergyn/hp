import getStartedToday from "../../assets/images/get-started-today.svg";
import heroImage from "../../assets/images/hero-section-main-image.png";
import hypermindLabs from "../../assets/images/hypermind-labs.svg";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const HeroSection = () => {
  return (
    <MaxWidthContainer>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
          <div className="max-w-[1140px] flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
            <img data-aos="fade-up" data-aos-delay={100} src={hypermindLabs} alt="hypermind labs" draggable={false} />
            <p data-aos="fade-up" data-aos-delay={350} className="max-w-[830px] text-[#9898AE] text-lg sm:text-xl md:text-2xl leading-[130%] text-center">"Hypermind Labs leverages cutting-edge technology to drive progress and create impactful tools that enhance user experiences and improve lives across industries."</p>
          </div>

          <div className="sm:mr-28 flex items-start gap-3">
            <img className="w-28 mt-6 hidden sm:block" src={getStartedToday} alt="get started today text icon" draggable={false} />
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>

        <img src={heroImage} alt="hero image" draggable={false} />
      </div>
    </MaxWidthContainer>
  );
};

export default HeroSection;