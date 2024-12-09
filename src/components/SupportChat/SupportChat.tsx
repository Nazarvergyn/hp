import BlockWrapper from "../BlockWrapper/BlockWrapper";
import IconWrapper from "../UI/IconWrapper/IconWrapper";

const SupportChat = () => {
  return (
    <BlockWrapper>
     <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-6">
          <IconWrapper iconName="chat-icon.svg" />
         
          <div className="flex flex-col gap-1 md:gap-2">
            <p data-aos="fade-up" data-aos-delay={100} className="text-baseWhite text-base sm:text-lg md:text-xl font-semibold leading-[130%]">Chat to support</p>
            <span data-aos="fade-up" data-aos-delay={300} className="text-secondaryText text-sm sm:text-base leading-[150%]">We're here to help!</span>
          </div>
        </div>

        {/* <div data-aos="fade-up" data-aos-delay={400} className="flex items-center gap-2 sm:gap-4">
          <a href="" className="text-basePrimary text-base sm:text-lg font-medium leading-[130%] underline">WhatsApp</a>
          <span className="text-basePrimary text-base sm:text-lg font-medium leading-[130%]">&#8226;</span>
          <a href="" className="text-basePrimary text-lg font-medium leading-[130%] underline">Viber</a>
          <span className="text-basePrimary text-base sm:text-lg font-medium leading-[130%]">&#8226;</span>
          <a href="" className="text-basePrimary text-base sm:text-lg font-medium leading-[130%] underline">Messenger</a>
        </div>    */}
      </div>
    </BlockWrapper>
  );
};

export default SupportChat;