import map from "../../assets/images/cooperation-map.png";
import HeadingBlock from "../UI/HeadingBlock/HeadingBlock";
import IconWrapper from "../UI/IconWrapper/IconWrapper";

const Cooperation = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={300}
      style={{
        background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24)0%, rgba(37, 39, 46, 0.50)50%, rgba(37, 39, 46, 0.24)100%)",
      }}
      className="h-1/2 xl:h-auto rounded-2xl border border-solid border-baseBorder flex flex-col justify-end gap-10"
    >
      <div className="px-4 md:px-6 pt-4 md:pt-6 flex flex-col gap-4">
        <IconWrapper iconName="globe-icon.svg" label="Cooperation"/>
        <HeadingBlock>We work in 18 countries</HeadingBlock>
      </div>

      <img className="w-full h-full" src={map} alt="map image" draggable={false} />
    </div>
  );
};

export default Cooperation;