"use client";
import Image from "next/image";
import Link from "next/link";
export function ImagesSliderDemo() {
  return (
    <div className="py-5 item-center">
      <div>
        <Image
          src={"/hero1.jpg"}
          width={1920 / 1}
          height={1080 / 1.5}
          alt="heroImage"
          layout=" responsive"
          className=" absolute opacity-30 mx-auto md:h-[728px] h-[300px]"
        />
      </div>
      <div className="relative md:py-48">
        <div className="  text-6xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          TOKUSEI
        </div>{" "}
        <div>
          <p className="text-sm w-5/6 md:w-[656px] text-center item-center mx-auto ">
            Step into Anime Couture, where style meets storytelling. Explore
            premium garments that blend comfort with character. Redefine your
            wardrobe with timeless pieces inspired by your favorite anime. Shop
            now and embrace the essence of anime-inspired fashion.
          </p>
        </div>
        <div className=" py-6  ">
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
    </div>
  );
}
