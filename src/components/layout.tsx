import React from "react";
import Header from "./header";
import { links } from "@/config";

type PortfolioLayoutProps = {
  children: React.ReactNode;
};

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <Header links={links} />
      <main className="flex flex-col w-full">{children}</main>
    </div>
  );
};
export default PortfolioLayout;
