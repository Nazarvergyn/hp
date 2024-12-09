import aboutUs from "../../assets/images/about-us.jpg";
import FactCard from "../FactCard/FactCard";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import HeadingSection from "../UI/HeadingSection/HeadingSection";

const AboutUs = () => {
  return (
    <MaxWidthContainer>
      <div id="about-us" className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-24">
        <div className="max-w-[725px] lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            <HeadingSection>About us</HeadingSection>
            <p data-aos="fade-right" data-aos-delay={300} className="text-secondaryText text-base sm:text-lg leading-[140%]">Hypermind Labs is a prominent entity in the AI industry, distinguished by its innovative ventures across various sectors, including healthcare, gaming, and emerging technologies. The company leverages its expertise in AI, data analytics, and technology development to create impactful solutions and secure a competitive position in the market.</p>
          </div>

          <img data-aos="zoom-in" data-aos-delay={300} className="w-full h-full rounded-lg object-cover" src={aboutUs} alt="our company" draggable={false} />
        </div>

        <div className="max-w-[725px] lg:w-1/2 flex flex-col justify-end gap-6 md:gap-8 lg:gap-12">
          <FactCard index={0} title="Web 3.0" description="Web 3.0 Data Storage for GENAI is one of Hypermind Labs’ strategic projects, which aims to advance data storage solutions by leveraging blockchain-based technologies."/>
          <FactCard index={1} title="20 publication" description="The company boasts a strong commitment to research, with over 20 publications in peer-reviewed journals and 17 intellectual properties related to HR gaming."/>
          <FactCard index={2} title="$1.5 million" description="Hypermind Labs has raised substantial funding, such as $1.5 million for projects like Ringfence, highlighting its ability to attract investor interest."/>
        </div>
      </div>
    </MaxWidthContainer>
  );
};
export default AboutUs;