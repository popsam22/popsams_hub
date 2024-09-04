import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      NavBar
      {children}
      Footer
    </>
  );
};

export default layout;
