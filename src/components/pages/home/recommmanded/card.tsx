import { bikeData } from "@/assets/fakeAPI/FakeAPI";
import { useEffect, useState } from "react";

const CardComponent = () => {
  const [current, setCurrent] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const fwCarousel = () => {
    if (current === bikeData.length / 2) {
      setCurrent(0);
    } else setCurrent(current + 0.03);
  };

  const mouseLeave = () => {
    setIsOver(false);
    setCurrent(current + 0.03);
  };

  const moseOver = () => {
    setIsOver(true);
  };

  useEffect(() => {
    let inteval_ID: any;
    if (!isOver) {
      inteval_ID = setInterval(fwCarousel, 1000);
      return () => {
        clearInterval(inteval_ID);
      };
    } else clearInterval(inteval_ID);
  }, [current]);

  return (
    <div>
      <h2 className="md:text-5xl text-3xl font-bold text-center my-5 ">
        Recommanded Bigbike
      </h2>
      <div className="overflow-hidden">
        <div
          className="flex gap-2 transition-all duration-1000 ease-linear"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {bikeData.map((item, index) => {
            return (
              <div
                onMouseOver={moseOver}
                onMouseLeave={mouseLeave}
                key={`product-card-${index}`}
                className=" min-w-[384px] min-h-[504px] max-w-sm rounded-2xl shadow-lg bg-[#709fd2] p-2"
              >
                <a href="">
                  <img
                    className="w-full pb-2 rounded-3xl"
                    src={item.url1}
                    alt={item.tags[0]}
                  />
                </a>
                <div className="px-2 text-white">
                  <div className="flex justify-between items-center">
                    <div
                      key={`status-${index}`}
                      className="font-bold text-xl"
                    >{`${item.brand} ${item.version} Y.${item.year}`}</div>
                    <div
                      className={`font-semibold ${
                        item.isAvailable === "Available"
                          ? "text-white"
                          : item.isAvailable === "Booked"
                          ? "text-yellow-300"
                          : "text-red-600"
                      }`}
                    >
                      {item.isAvailable}
                    </div>
                  </div>
                  <div className="text-base flex flex-col">
                    <span className="text-xl font-semibold">
                      Price : {item.price} THB
                    </span>
                    <span className="text-md my-2">Mile : {item.mile}</span>
                    <div className="flex flex-col text-sm">
                      <span>Down Payment : {item.downPayment} THB</span>
                      <div className="flex justify-between items-center">
                        <span>
                          Monthly Payment : {item.monthlyPayment} THB/month
                        </span>
                        <button
                          className={`bg-[#6189B4] dis px-2 py-1 rounded-2xl active:scale-105 hover:scale-110`}
                        >
                          {item.isAvailable === "Available"
                            ? "Book Now"
                            : "More Detail"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 pt-4 pb-2">
                  {item.tags.map((tag, index) => {
                    return (
                      <span
                        key={`tag-${tag}-${index}`}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        <a href="/">#{tag}</a>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="text-xl my-3 font-bold bg-[#B3CDE0] px-5 py-1 rounded-3xl">
          <a href="/product-detail">
            {">>"}More Bike{"<<"}
          </a>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
