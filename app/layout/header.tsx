import Image from "next/image";
import Link from "next/link";
import { SiPinterest } from "react-icons/si";
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
    url: "/",
  },
  {
    label: "Gallery",
    url: "/",
  },
  {
    label: "Contact",
    url: "/",
  },
];

export default function Header() {
  return (
    <nav className="w-full md:px-20 py-5">
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <div>
          <Image
            src="/Logo/logo.png"
            width={582 / 6}
            height={513}
            alt="logo"
            className=""
          />
        </div>
        <div className=" py-5 md:py-0 text-xl md:text-2xl  flex flex-row justify-between gap-10  ">
          {navItems.map((navItems, index) => (
            <Link href={navItems.url} key={index}>
              <h1 className=" lg:hover:scale-125 hover:text-stone-300 transition-all">
                {navItems.label}
              </h1>
            </Link>
          ))}
        </div>
        <div className=" flex flex-row justify-between gap-5 md:text-xl text-lg">
          {socials.map((social, index) => (
            <Link
              className="hover:scale-150 transition-all"
              href={social.url}
              key={index}
              target="_blank"
              rel="noopener"
            >
              <social.icon />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
