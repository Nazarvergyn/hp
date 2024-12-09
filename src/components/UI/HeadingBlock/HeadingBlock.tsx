import React from "react";

interface Props {
  children: React.ReactNode;
}

const HeadingBlock: React.FC<Props> = ({children}) => {
  return (
    <h3 className="text-baseText text-xl sm:text-2xl md:text-[28px] font-semibold leading-[140%]">{children}</h3>
  );
};
export default HeadingBlock;