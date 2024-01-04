import { useEffect, useState } from "react";
import { coverCarosel } from "@/assets/fakeAPI/FakeAPI";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { GoDot } from "react-icons/go";

const CarouselPictureShow = () => {
  const [current, setCurrent] = useState(0);

  const nextPic = () => {
    if (current === coverCarosel.length - 1) {
      setCurrent(0);
    } else setCurrent(current + 1);
  };
  const prePic = () => {
    if (current === 0) {
      setCurrent(coverCarosel.length - 1);
    } else setCurrent(current - 1);
  };

  useEffect(() => {
    const interval_id = setInterval(nextPic, 5000);
    return () => {
      clearInterval(interval_id);
    };
  }, [current]);

  return (
    <div className="w-[80%] m-auto overflow-hidden ">
      <div className="relative">
        <div
          className="flex my-2 items-center transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {coverCarosel.map((item, index) => {
            return (
              <img
                src={item.url}
                alt={item.tags[0]}
                key={`cover-key-${index}`}
                className="min-w-[100%] "
              />
            );
          })}
        </div>
        <div className="absolute flex w-[100%] justify-center bottom-3">
          <div className="bg-gray-500 bg-opacity-50 flex rounded-xl px-1">
            {coverCarosel.map((item, index) => {
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

export default CarouselPictureShow;
