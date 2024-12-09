interface Props {
  title: string;
  description: string;
  index: number;
  smallerText?: boolean;
  borderPosition?: "right" | "bottom";
  isBorder?: boolean;
}

const FactCard: React.FC<Props> = ({title, description, index, smallerText, borderPosition = "bottom", isBorder = true}) => {
  return (
    <div className={`${isBorder ? (borderPosition === "bottom" ? "pb-4 sm:pb-6 md:pb-8 lg:pb-12 border-b" : "px-8 py-2 border-r") : "px-8 py-2"} border-dashed border-[rgba(61,63,69,0.80)] flex flex-col gap-2 sm:gap-4`}>
      <p data-aos="fade-up" data-aos-delay={index * 100} className="text-baseText text-xl sm:text-2xl md:text-[32px] font-bold leading-[125%]">{title}</p>
      <p data-aos="fade-up" data-aos-delay={index * 150} className={`text-secondaryText ${smallerText ? "text-xs sm:text-sm" : "text-sm sm:text-base"} leading-[150%] tracking-[0.3px]`}>{description}</p>
    </div>
  );
};

export default FactCard;