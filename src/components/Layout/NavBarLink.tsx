import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  href: string;
};
const NavBarLink = ({ name, href }: Props) => {
  return <Link href={href}>{name}</Link>;
};

export default NavBarLink;
