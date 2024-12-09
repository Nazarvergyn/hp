import avatar from "../../assets/images/avatar.svg";
import circles from "../../assets/images/circles.png";
import HeadingBlock from "../UI/HeadingBlock/HeadingBlock";
import IconWrapper from "../UI/IconWrapper/IconWrapper";

const Support = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={100}
      style={{
        background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24)0%, rgba(37, 39, 46, 0.50)50%, rgba(37, 39, 46, 0.24)100%)",
      }}
      className="p-4 md:p-6 relative rounded-2xl border border-solid border-baseBorder flex flex-col gap-20 overflow-hidden"
    >
      <div className="flex flex-col gap-4">
        <IconWrapper iconName="headphones-icon.svg" label="Fantastic support" />
        <HeadingBlock>24/7 fast chat support</HeadingBlock>
      </div>

      <div className="flex justify-center items-center gap-2.5">
        <div className="w-14 h-14 rounded-full bg-[#E7DDF7] flex justify-center items-center">
          <img src={avatar} alt="avatar icon" draggable={false} />
        </div>
        <span
        style={{
          background: "linear-gradient(138deg, rgba(61, 61, 63, 0.30) 2.35%, rgba(61, 61, 63, 0.56) 49.19%, rgba(61, 61, 63, 0.30) 91.6%)"
        }}
        className="px-4 md:px-6 py-4 rounded-r-[40px] rounded-tl-[40px] text-baseText font-medium text-xl leading-[120%]"
        >Hey there! I’m here to help. 👋</span>
      </div>

      <img className="absolute bottom-0 left-1/2 -translate-x-1/2" src={circles} alt="circles icon" draggable={false} />
    </div>
  );
};

export default Support;