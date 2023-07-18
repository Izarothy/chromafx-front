import React from "react";
import { type Dispatch } from "react";

type Props = {
  text: string;
  link: string;
  setIsHovered: Dispatch<boolean>;
};

const HoverSource = ({ text, link, setIsHovered }: Props) => {
  return (
    <div
      className="absolute mx-1 inline-block max-w-none rounded-lg bg-white px-3 py-2 shadow-sm"
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <a
        href={link}
        target="_blank"
        className="text-xs font-medium text-blue-500"
      >
        {text}
      </a>
    </div>
  );
};

export default HoverSource;
