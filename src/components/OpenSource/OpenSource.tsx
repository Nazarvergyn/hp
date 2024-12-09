import openSource from "../../assets/images/open-source.png";
import HeadingBlock from "../UI/HeadingBlock/HeadingBlock";
import IconWrapper from "../UI/IconWrapper/IconWrapper";

const OpenSource = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={500}
      style={{
        background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24)0%, rgba(37, 39, 46, 0.50)50%, rgba(37, 39, 46, 0.24)100%)",
      }}
      className="pt-4 md:pt-6 relative rounded-2xl border border-solid border-baseBorder flex flex-col gap-12 overflow-hidden"
    >
      <div className="px-4 md:px-6 flex flex-col gap-4">
        <IconWrapper iconName="open-source-icon.svg" label="Open source" />
        <HeadingBlock>Public and Decentralized</HeadingBlock>
      </div>

      <img src={openSource} alt="open source" draggable={false} />
    </div>
  );
};

export default OpenSource;