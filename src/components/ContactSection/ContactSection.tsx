import ContactDetails from "../ContactDetails/ContactDetails";
import ContactUs from "../ContactUs/ContactUs";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import SupportChat from "../SupportChat/SupportChat";

const ContactSection = () => {
  return (
    <MaxWidthContainer>
        <div id="contact-us" className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 xl:gap-12">
          <ContactUs />

          <div className="flex flex-col md:flex-row lg:flex-col gap-6 md:gap-8">
            <ContactDetails />
            <SupportChat />
          </div>
        </div>
      </MaxWidthContainer>
  );
};

export default ContactSection;