import React from "react";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

interface Props {
  placeholder: string;
  label?: string;
  iconName?: string;
}

const InputField: React.FC<Props> = ({placeholder, label, iconName}) => {
  const windowWidth = useWindowWidth();

  return (
    <label className="w-full flex flex-col gap-2 text-secondaryText text-xs leading-[130%]">
      {label}
      <input
        className={`${iconName ? "p-3 sm:p-4 pl-10 sm:pl-11" : "p-3 sm:p-4"} w-full border border-solid border-[rgba(101,104,110,0.32)] bg-[rgba(62,65,71,0.32)] rounded-xl bg-no-repeat bg-center text-baseText text-sm leading-[135%] placeholder:text-inherit`}
        style={{
          backgroundImage: `url('/${iconName}')`,
          backgroundPosition: '16px center',
          backgroundSize: windowWidth >= 640 ? 20 : 16,
        }}
        placeholder={placeholder}
    />
    </label>
  );
};

export default InputField;
