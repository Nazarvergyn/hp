import logo from "../../assets/images/contact-us-logo.svg";
import contactUs from "../../assets/images/contact-us-text.svg";
import BlockWrapper from "../BlockWrapper/BlockWrapper";
import InputField from "../UI/InputField/InputField";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <BlockWrapper>
      <div
        style={{
          backgroundImage: "url('/bg-grid-lines.png')",
        }}
        className="-mt-6 w-full h-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-10"
    >
        <div className="pt-6 flex flex-col items-center gap-4">
          <div data-aos="fade-up" data-aos-delay={100} className="flex flex-col items-center gap-2 sm:gap-6">
            <img className="w-12 sm:w-14 h-12 sm:h-14" src={logo} alt="logo" draggable={false} />
            <h3 className="text-baseText text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-[140%]">Contact us</h3>
          </div>

          <div data-aos="fade-up" data-aos-delay={300} className="w-full flex items-center gap-2">
            <img className="-mb-5 hidden sm:block" src={contactUs} alt="click to contact us" draggable={false} />
            <p className="max-w-[520px] text-center text-secondaryText text-base sm:text-lg leading-[140%]">"Ready to transform the future with us? Enter your email to connect and receive exclusive insights into our latest innovations and opportunities!"</p>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <div data-aos="fade-right" data-aos-delay={500} className="w-full xs:w-3/4 sm:w-2/5">
            <InputField placeholder="Your Email" iconName="email-icon.svg" />
          </div>
          <PrimaryButton aosDirection="left" aosDelay={500}>Subscribe</PrimaryButton>
        </div>
      </div>
    </BlockWrapper>
  );
};

export default ContactUs;