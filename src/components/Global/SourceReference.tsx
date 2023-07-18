import React, { useState } from "react";
import HoverSource from "./HoverSource";

type Props = {
  count: number;
  description: string;
  link: string;
};

const SourceReference = ({ count, link, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <sup
        className="cursor-pointer text-blue-400"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
      >
        <a href={`#${String(count)}`}>[{count}] </a>
      </sup>
      {isHovered ? (
        <HoverSource
          text={description}
          link={link}
          setIsHovered={setIsHovered}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SourceReference;
