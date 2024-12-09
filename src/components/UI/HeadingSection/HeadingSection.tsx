import React from "react";

interface Props {
  children: React.ReactNode;
}

const HeadingSection: React.FC<Props> = ({children}) => {
  return (
    <h2 data-aos="fade-right" data-aos-delay={100} className="text-baseText text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[130%]">
      {children}
    </h2>
  );
};
export default HeadingSection;