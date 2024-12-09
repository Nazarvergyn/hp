import React from "react";

interface Props {
  children: React.ReactNode;
}

const BlockWrapper: React.FC<Props> = ({children}) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(37, 39, 46, 0.24)0%, rgba(37, 39, 46, 0.50)50%, rgba(37, 39, 46, 0.24)100%)",
      }}
      className="w-full p-4 md:p-6 rounded-2xl border border-solid border-baseBorder overflow-hidden"
    >
      {children}
    </div>
  );
};

export default BlockWrapper;