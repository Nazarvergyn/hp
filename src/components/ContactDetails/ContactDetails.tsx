import BlockWrapper from "../BlockWrapper/BlockWrapper";
import IconWrapper from "../UI/IconWrapper/IconWrapper";

const ContactDetails = () => {
  return (
    <BlockWrapper>
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-6">
          <IconWrapper iconName="phone-icon.svg" />
          
          <div className="flex flex-col gap-1 md:gap-2">
            <p data-aos="fade-up" data-aos-delay={100} className="text-baseWhite text-base sm:text-lg md:text-xl font-semibold leading-[130%]">Call Us Directly</p>
            <span data-aos="fade-up" data-aos-delay={300} className="text-secondaryText text-sm sm:text-base leading-[150%]">Available during working hours.</span>
          </div>
        </div>

        <a data-aos="fade-up" data-aos-delay={400} href="tel:+12344567789" className="text-basePrimary text-base sm:text-lg font-medium leading-[130%] underline">(+1)234-4567-789</a>
      </div>
    </BlockWrapper>
  );
};
export default ContactDetails;