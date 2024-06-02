"use client";

import { ReactNode, useEffect, useState, FC } from "react";
import Head from "next/head";
import Header from "../layout/header";
import Footer from "../layout/footer";
import BackToTop from "../layout/ScrollTop";

interface NavItem {
  label: string;
  url: string;
}

interface ProviderProps {
  children: ReactNode;
  title: string;
  description: string;
  header: any; // Adjust the type as necessary for your header prop
  footer: any; // Adjust the type as necessary for your footer prop
  dark: boolean;
  navItems: NavItem[];
}

const Provider: FC<ProviderProps> = ({
  children,
  title,
  description,
  header,
  footer,
  dark,
  navItems,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="page-wrapper">
        {isClient && (
          <>
            <Header header={header} dark={dark} navItems={navItems} />
            {children}
            <Footer footer={footer} dark={dark} navItems={navItems} />
          </>
        )}
      </div>
      <BackToTop />
    </>
  );
};

export default Provider;
