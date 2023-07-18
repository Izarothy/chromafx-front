import React, { useState } from "react";
import HoverSource from "./HoverSource";

type Props = {
  count: number;
  linkTitle: string;
  link: string;
};

const SourceReference = ({ count, link, linkTitle }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <sup
        className="cursor-pointer text-blue-400"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
      >
        [{count}]
      </sup>
      {isHovered ? (
        <HoverSource text={linkTitle} link={link} setIsHovered={setIsHovered} />
      ) : (
        <></>
      )}
    </>
  );
};

export default SourceReference;
