import Link from "next/link";
import React from "react";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <nav className=" sticky top-0 flex w-full justify-between bg-white px-2 py-4 font-semibold md:px-0">
      <span className="text-3xl font-extrabold text-[#000080] ">
        <Link href="/">ChromaFX</Link>
      </span>
      <span className="hidden justify-end gap-8 text-lg md:flex">
        <NavBarLink name="Home" href="/" />
        <NavBarLink name="About us" href="/" />
        <NavBarLink name="Pricing" href="/" />
        <NavBarLink name="Contact" href="/" />
      </span>
    </nav>
  );
};

export default NavBar;
