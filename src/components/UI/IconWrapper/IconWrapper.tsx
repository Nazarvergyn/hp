import React from "react";
import useDynamicIcon from "../../../hooks/useDynamicIcon";

interface Props {
  iconName: string;
  label?: string;
}

const IconWrapper: React.FC<Props> = ({iconName, label}) => {
  const iconSrc = useDynamicIcon(iconName);

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="relative w-10 md:w-12 h-10 md:h-12 flex justify-center items-center">
        <div 
          className="absolute inset-0 rounded-xl p-[1px]"
          style={{
            background: 'linear-gradient(135deg, #E4E7EC00 0%, #E4E7EC4D 30%, #E4E7EC00 100%)'
          }}
        >
          <div className="w-full h-full rounded-xl bg-[#222429]" />
        </div>
        {iconSrc && <img src={iconSrc} alt={iconName} draggable={false} className="relative z-10" />}
      </div>

      {label && <span className="text-secondaryText text-lg sm:text-xl leading-[120%]">{label}</span>}
    </div>
  );
};
export default IconWrapper;