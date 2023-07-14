import React, { type ReactNode } from "react";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="md:px-24 xl:px-48">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
