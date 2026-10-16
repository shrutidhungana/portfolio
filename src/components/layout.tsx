import React from "react";
import Header from "./header";
import Footer from "./footer";
import { links } from "@/config";

type PortfolioLayoutProps = {
  children: React.ReactNode;
};

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Header links={links} />
      <main className="flex flex-1 flex-col w-full">{children}</main>
      <Footer />
    </div>
  );
};
export default PortfolioLayout;
