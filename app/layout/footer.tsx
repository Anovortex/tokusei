import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

const socials = [
  {
    label: "facebook",
    url: "https://facebook.com/",
    icon: SlSocialFacebook,
  },

  {
    label: "Instagram",
    url: "https://instagram.com/",
    icon: SlSocialInstagram,
  },
];

const navItems = [
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Gallery",
    url: "/shop",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

export default function Footer() {
  return (
    <div className=" bg-stone-700">
      <div className=" w-[200px] mx-auto py-20">
        <Image src="/Logo/logo.png" width={372} height={368} alt="footerLogo" />
      </div>
      <div className="mx-auto text-center items-center flex flex-col text-2xl gap-5">
        <span>Ring Road,Mohammadpur, Dhaka- 1207</span>
        <span>+880 177 2206234</span>
      </div>
      <div className="item-center mx-auto py-10">
        <div className=" flex flex-row justify-center gap-5 md:text-xl ">
          {socials.map((social, index) => (
            <Link
              className="hover:scale-150 transition-all text-2xl"
              href={social.url}
              key={index}
              target="_blank"
              rel="noopener"
            >
              <social.icon />
            </Link>
          ))}
        </div>
        <div>
          <div className=" py-5 md:py-10 text-xl md:text-2xl  flex flex-row justify-center gap-10  ">
            {navItems.map((navItems, index) => (
              <Link href={navItems.url} key={index}>
                <h1 className=" lg:hover:scale-125 hover:text-stone-300 transition-all">
                  {navItems.label}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <div className=" py-6 mx-auto    ">
          <div className="text-center">
            <Link href="https://www.instagram.com/tokuseishop/">
              <div className="relative px-5 py-3 overflow-hidden font-medium text-white bg-transparent border border-gray-100 rounded-lg shadow-inner group inline-block">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-stone-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-stone-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-stone-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-stone-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-stone-900 opacity-0 group-hover:opacity-100"></span>
                <span className="text-sm md:text-base relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  To Order Visit Our Socials
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-sm text-center mx-auto">
        Copyright © 2024 Tokusei®. All rights reserved.
      </div>
    </div>
  );
}
