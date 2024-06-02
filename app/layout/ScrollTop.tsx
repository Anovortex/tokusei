"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [BackToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {BackToTop && (
        <div
          className=" fixed bottom-10 md:right-10 right-0 transition-all py-2 px-4 rounded-full z-10"
          onClick={scrollUp}
        >
          <Image
            src="/Logo/logo.png"
            alt="logo back to top"
            width={4000}
            height={4000}
            className="w-12 h-12 "
          />
        </div>
      )}
    </div>
  );
}
