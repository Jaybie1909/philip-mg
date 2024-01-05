import { bikeData } from "@/assets/fakeAPI/FakeAPI";
import React, { useEffect, useState } from "react";
import { GoDot } from "react-icons/go";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const CarouselDetail = ({ num }: { num: number }) => {
  const [current, setCurrent] = useState(0);

  const arr = [];
  useEffect(() => {
    for (let i = 0; i < bikeData[num].pictures.length; i++) {
      arr.push(bikeData[num].pictures[i]);
    }
  }, []);
  const nextPic = () => {
    if (current === bikeData[num].pictures.length - 1) {
      setCurrent(0);
    } else setCurrent(current + 1);
  };
  const prePic = () => {
    if (current === 0) {
      setCurrent(bikeData[num].pictures.length - 1);
    } else setCurrent(current - 1);
  };

  useEffect(() => {
    const interval_id = setInterval(nextPic, 5000);
    return () => {
      clearInterval(interval_id);
    };
  }, [current]);
  return (
    <div>
      {" "}
      <div className="w-[100%] m-auto overflow-hidden ">
        <div className="relative">
          <div
            className="flex my-2 items-center transition-all duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {bikeData[num].pictures.map((item, index) => {
              return (
                <div
                  key={`cover-link-key-${index}`}
                  className="min-w-full lg:max-h-[90vh] md:max-h-[70vh] sm:max-h-[60vh] max-h-[50vh] flex items-center justify-center"
                >
                  <img
                    src={item}
                    alt={item}
                    key={`cover-key-${index}`}
                    className="min-w-full"
                  />
                </div>
              );
            })}
          </div>
          <div className="absolute flex w-[100%] justify-center bottom-3">
            <div className="bg-gray-500 bg-opacity-50 flex rounded-xl px-1">
              {bikeData[num].pictures.map((item, index) => {
                return (
                  <button
                    onClick={() => setCurrent(index)}
                    className={` bg-opacity-35 rounded-full  text-xl text-white ${
                      current === index ? "bg-cyan-600" : ""
                    } `}
                    key={`Carousel-nav-key-${index}`}
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
    </div>
  );
};

export default CarouselDetail;
