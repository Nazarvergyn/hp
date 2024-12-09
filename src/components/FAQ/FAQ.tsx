import { faqs } from "../../assets/data/faqs";
import AccordionItem from "../AccordionItem/AccordionItem";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import HeadingSection from "../UI/HeadingSection/HeadingSection";

const FAQ = () => {
  return (
    <MaxWidthContainer>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="max-w-[400px] flex flex-col gap-2 sm:gap-4 md:gap-6">
          <HeadingSection>FAQ</HeadingSection>
          <p data-aos="fade-right" data-aos-delay={300} className="text-secondaryText text-base sm:text-lg leading-[140%]">Your Questions Answered: Discover How Hypermind Labs is Shaping the Future of AI and Innovation</p>
        </div>

        <div className="max-w-[725px] flex flex-col gap-4 sm:gap-6">
          {faqs.map(({ title, description }, index) =>
            <AccordionItem key={index} index={index} title={title} description={description} />)}
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default FAQ;