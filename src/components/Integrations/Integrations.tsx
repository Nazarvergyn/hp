import integrations from "../../assets/images/integrations.png";
import HeadingBlock from "../UI/HeadingBlock/HeadingBlock";
import IconWrapper from "../UI/IconWrapper/IconWrapper";

const Integrations = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={300}
      style={{
        background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24)0%, rgba(37, 39, 46, 0.50)50%, rgba(37, 39, 46, 0.24)100%)",
      }}
      className="rounded-2xl border border-solid border-baseBorder flex flex-col justify-end gap-8 overflow-hidden"
    >
      <div className="px-4 md:px-6 pt-4 md:pt-6 flex flex-col gap-4">
        <IconWrapper iconName="ayer-icon" label="Awesome integrations" />
        <HeadingBlock>Works with your favorite tools</HeadingBlock>
      </div>

      <img className="" src={integrations} alt="integrations image" draggable={false} />
    </div>
  );
};

export default Integrations;