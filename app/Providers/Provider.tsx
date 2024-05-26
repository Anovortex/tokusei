"use client";
import { ReactNode, useEffect, useState, FC } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Head from "next/head";

interface NavItem {
  label: string;
  url: string;
}

interface ProviderProps {
  children: ReactNode;
  title: string;
  description: string;
  header: any; // Replace 'any' with the correct type for your header prop
  footer: any; // Replace 'any' with the correct type for your footer prop
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
        {/* <Header header={header} dark={dark} navItems={navItems} /> */}
        {children}
        <Footer footer={footer} dark={dark} navItems={navItems} />
      </div>
    </>
  );
};

export default Provider;
