import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  href: string;
};
const NavBarLink = ({ name, href }: Props) => {
  return (
    <Link href={href} scroll={false}>
      <span className="hover:text-purple-600">{name}</span>
    </Link>
  );
};

export default NavBarLink;
