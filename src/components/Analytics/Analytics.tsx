import analytics from "../../assets/images/analytics.png";
import HeadingBlock from "../UI/HeadingBlock/HeadingBlock";
import IconWrapper from "../UI/IconWrapper/IconWrapper";

const Analytics = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={100}
      style={{
        background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24)0%, rgba(37, 39, 46, 0.50)50%, rgba(37, 39, 46, 0.24)100%)",
      }}
      className="h-1/2 xl:h-auto pl-4 md:pl-6 py-4 md:py-6 rounded-2xl border border-solid border-baseBorder flex flex-col justify-between gap-8 overflow-hidden"
    >
      <div className="flex flex-col gap-4">
        <IconWrapper iconName="trending-up-icon.svg" label="Advanced analytics data" />
        <HeadingBlock>Access powerful data to help you boost your business</HeadingBlock>
      </div>

      <img className="-mb-4 md:-mb-6 ml-10 md:ml-12" src={analytics} alt="analytics image" draggable={false} />
    </div>
  );
};

export default Analytics;