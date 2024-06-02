import Image from "next/image";

import Link from "next/link";
import Provider from "../Providers/Provider";
import ImageCarousel from "../layout/imageCarousel";

const navItems = [
  {
    label: "About",
    url: "/",
  },
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

const header = {}; // Define your header prop here
const footer = {}; // Define your footer prop here
const dark = true; // Example value, adjust as needed

export default function () {
  const newArivals = [
    {
      image: "/Products/2nd Lot/1.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 1",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/2.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 2 ",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/3.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 3",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/4.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 4",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/5.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 5 ",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/6.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 6 ",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/7.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 7 ",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/8.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 8",
      price: "450৳",
    },
  ];
  const topCollection = [
    {
      image: "/Products/2nd Lot/1.Tshirt Mockup with Watermark.jpg",
      productName: "Drop Shoulder",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/2.Tshirt Mockup with Watermark.jpg",
      productName: "Drop Shoulder",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/3.Tshirt Mockup with Watermark.jpg",
      productName: "Drop Shoulder",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/4.Tshirt Mockup with Watermark.jpg",
      productName: "Drop Shoulder",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/5.Tshirt Mockup with Watermark.jpg",
      productName: "Drop Shoulder",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/6.Tshirt Mockup with Watermark.jpg",
      productName: "Drop Shoulder",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/7.Tshirt Mockup with Watermark.jpg",
      productName: "Drop Shoulder",
      price: "450৳",
    },
    {
      image: "/Products/2nd Lot/8.Tshirt Mockup with Watermark.jpg",
      productName: "Drop Shoulder",
      price: "450৳",
    },
  ];
  return (
    <Provider
      title="Gallery"
      description="Welcome to Tokusei Shop"
      header={header}
      footer={footer}
      dark={dark}
      navItems={navItems}
    >
      <div className="w-full">
        <div className="py-5 item-center">
          <div>
            <Image
              src={"/hero2.jpg"}
              width={1920 / 1}
              height={1080 / 1.5}
              alt="heroImage"
              layout=" responsive"
              className=" absolute opacity-30 mx-auto md:h-[728px] h-[350px] "
            />
          </div>
          <div className="relative md:py-48">
            <div className="  text-6xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Gallery
            </div>{" "}
            <div>
              <p className="text-sm w-5/6 md:w-[656px] text-center item-center mx-auto ">
                Discover the Gallery at Tokusei: a visual journey where fashion
                and fandom collide. Explore stunning collections that transform
                your favorite anime moments into wearable art. Redefine your
                style with unique pieces that celebrate the essence of anime.
                Visit now and immerse yourself in the world of anime-inspired
                fashion
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
        <div className="md:py-28 md:px-36">
          <h1
            className=" px-5 text-6xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pt-20 lg:pt-10"
            id="newArrivals"
          >
            New Arrivals
          </h1>

          <div className=" m-auto py-10 px-10 lg:px-0">
            <ImageCarousel
              price={newArivals.map((product) => product.price)}
              image={newArivals.map((product) => product.image)}
              productName={newArivals.map((product) => product.productName)}
            />
          </div>
        </div>
        <div>
          <Image
            src={"/section2_2.jpg"}
            width={4098}
            height={1080}
            alt="heroImage"
            layout=" responsive"
            className=" mx-auto "
          />
        </div>
        <div className="">
          <h1 className="  pt-20  md:pt-28 relative font-bold text-6xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
            Collections
          </h1>
          <div className="py-5 px-4 md:py-10 lg:px-36">
            <div className="md:py-10 md:px-36">
              <div className=" py-10 px-10 lg:px-0 bg-stone-700 justify-center flex flex-row flex-wrap gap-5 my-auto rounded-2xl">
                {topCollection.map((item, index) => (
                  <div
                    key={index}
                    className=" relative bg-stone-900 rounded-2xl w-[300px] h-[300px] md:w-[360px] md:h-[400px] item-center "
                  >
                    <img
                      src={item.image}
                      alt={item.productName}
                      className=" absolute px-5 w-[300px] h-[260px] md:w-[400px] md:h-[350px] mx-auto my-5 items-center "
                    />
                    <h1 className="  relative text-center flex flex-col justify-between">
                      <span className=" bg-zinc-400 w-auto mx-auto rounded-sm md:mt-72 mt-52 text-black">
                        Catagory: {item.productName}
                      </span>
                      <span className=" bg-zinc-400 w-24 mx-auto rounded-sm mt-2 text-black">
                        Price : 450 tk
                      </span>
                    </h1>
                    <h1></h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Provider>
  );
}
