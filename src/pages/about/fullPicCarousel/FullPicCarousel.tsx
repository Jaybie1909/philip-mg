import { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import { shopInterface } from "@/assets/fakeAPI/interfaceFakeAPI";
import { Link } from "react-router-dom";
import { scrollToTheTopOfThePage } from "@/components/ScrollToTheTopOfThePage.hook";

const FullPicCarousel = () => {
  const data: shopInterface[] = FakeAPIRespond.data.maintenanceShop;
  const [current, setCurrent] = useState(0);

  const nextPic = () => {
    if (current === data.length - 1) {
      setCurrent(0);
    } else setCurrent(current + 1);
  };
  const prePic = () => {
    if (current === 0) {
      setCurrent(data.length - 1);
    } else setCurrent(current - 1);
  };

  useEffect(() => {
    const interval_id = setInterval(nextPic, 5000);
    return () => {
      clearInterval(interval_id);
    };
  }, [current]);

  return (
    <div className="w-[100%] m-auto overflow-hidden ">
      <div className="relative">
        <div
          className="flex my-2 items-center transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((item, index) => {
            return (
              <Link
                onClick={scrollToTheTopOfThePage}
                to="/"
                key={`cover-link-key-${index}`}
                className="min-w-[100%] "
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  key={`cover-key-${index}`}
                  className="min-w-[100%] "
                />
              </Link>
            );
          })}
        </div>
        <div className="absolute top-0 text-center ">
          <div className="bg-slate-100 bg-opacity-60">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold pt-3 px-[4%] transition-all duration-300 ease-in-out">
              Beyond just buying and selling
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-semibold py-5 px-[5%] text-start transition-all duration-300 ease-in-out">
              &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;we aim to build a community of riders who share the same passion for two wheels. Our commitment to integrity, transparency, and personalized service sets us apart. When you choose Philip Moto Garage, you're not just getting a machine—you're joining a family that rides together.
            </p>
          </div>
        </div>
        <div className="absolute flex w-[100%] justify-center bottom-3">
          <div className="bg-gray-500 bg-opacity-50 flex rounded-xl px-1">
            {data.map((item, index) => {
              return (
                <button
                  onClick={() => setCurrent(index)}
                  className={` bg-opacity-35 rounded-full  text-xl text-white ${
                    current === index ? "bg-cyan-600" : ""
                  } `}
                  key={item.url}
                >
                  <GoDot />
                </button>
              );
            })}
          </div>
        </div>
        <button
          onClick={prePic}
          className="absolute text-[30px] top-0 left-0 h-[100%] bg-slate-100 bg-opacity-30 "
        >
          <div className=" hover:scale-110 transition-all delay-150 duration-200 ease-in-out pl-1">
            <MdArrowBackIos />
          </div>
        </button>
        <button
          onClick={nextPic}
          className="absolute text-[30px] top-0 right-0 h-[100%] bg-slate-100 bg-opacity-30  "
        >
          <div className="hover:scale-110 transition-all delay-150 duration-200 ease-in-out pr-1">
            <MdArrowForwardIos />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FullPicCarousel;
