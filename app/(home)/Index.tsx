import Image from "next/image";
import Header from "../layout/header";
import ImageCarousel from "../layout/imageCarousel";
import { ImagesSliderDemo } from "../layout/imageSlider";
import Footer from "../layout/footer";

export default function () {
  const newArivals = [
    {
      image: "/Products/2nd Lot/1.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 1",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/2.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 2 ",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/3.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 3",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/4.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 4",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/5.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 5 ",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/6.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 6 ",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/7.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 7 ",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/8.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 8",
      price: "1000",
    },
  ];
  const topCollection = [
    {
      image: "/Products/2nd Lot/1.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 1",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/2.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 2 ",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/3.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 3",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/4.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 4",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/5.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 5 ",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/6.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 6 ",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/7.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 7 ",
      price: "1000",
    },
    {
      image: "/Products/2nd Lot/8.Tshirt Mockup with Watermark.jpg",
      productName: "T-Shirt 8",
      price: "1000",
    },
  ];
  return (
    <div className="w-full">
      <div className=" px-36">
        <Header />
      </div>
      <ImagesSliderDemo />
      <div className="md:py-28 md:px-36">
        <h1 className=" px-5 text-6xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pt-10">
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
          src={"/section 2.jpg"}
          width={4098}
          height={1080}
          alt="heroImage"
          layout=" responsive"
          className=" mx-auto "
        />
      </div>
      <div className="">
        <h1 className=" md:pt-28 relative font-bold text-7xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          Top Collection
        </h1>
        <div className="md:py-10 md:px-36">
          <div className="md:py-10 md:px-36">
            <div className=" py-10 px-10 lg:px-0 bg-stone-700 justify-center flex flex-row flex-wrap gap-5 my-auto">
              {topCollection.map((item, index) => (
                <div
                  key={index}
                  className="bg-stone-900 rounded-2xl w-[360px] h-[434px] item-center "
                >
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-[300px] h-[300px] mx-auto my-5 items-center rounded-xl "
                  />
                  <h1 className="text-center flex flex-col justify-between">
                    <span>{item.productName}</span>
                    <span>Price : 450 tk</span>
                  </h1>
                  <h1></h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
