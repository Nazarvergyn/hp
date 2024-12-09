import React from "react";

interface Props {
  children: React.ReactNode;
}

const MaxWidthContainer = ({ children }: Props) => {
  return (
    <section className="w-full flex justify-center px-4 md:px-6">
      <div className="max-w-[1280px] w-full">{children}</div>
    </section>
  );
};

export default MaxWidthContainer;