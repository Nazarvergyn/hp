import Analytics from "../Analytics/Analytics";
import Cooperation from "../Cooperation/Cooperation";
import Integrations from "../Integrations/Integrations";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import OpenSource from "../OpenSource/OpenSource";
import Support from "../Support/Support";
import HeadingSection from "../UI/HeadingSection/HeadingSection";

const Advantages = () => {
  return (
    <MaxWidthContainer>
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-[72px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 sm:gap-6 lg:gap-12">
          <HeadingSection>Our advantages</HeadingSection>
          <p data-aos="fade-left" data-aos-delay={300} className="max-w-[725px] lg:max-w-[550px] xl:max-w-[625px] text-secondaryText text-base sm:text-lg leading-[150%]">Innovating with Purpose: Why Hypermind Labs is Your Partner in Future-Ready Solutions. Our Unique Strengths: Driving Excellence in AI and Game-Changing Technologies!</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="w-full flex flex-col gap-6 lg:gap-12">
            <Analytics />
            <Cooperation />
          </div>

          <div className="w-full flex flex-col gap-6 lg:gap-12">
            <Support />
            <Integrations />
            <OpenSource />
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};
export default Advantages;