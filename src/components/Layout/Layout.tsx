import React, { type ReactNode } from "react";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
