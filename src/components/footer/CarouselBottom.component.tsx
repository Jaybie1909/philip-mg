import { useState } from "react";
import { FakeAPIRespond } from "../../assets/fakeAPI/FakeAPIRespond";
import { bikeDataInterface } from "../../assets/fakeAPI/interfaceFakeAPI";
import { Link } from "react-router-dom";
import { scrollToTheTopOfThePage } from "../ScrollToTheTopOfThePage.hook";

const CarouselBottom = () => {
  const data: bikeDataInterface[] = FakeAPIRespond.data.bikeData;
  const [current, setCurrent] = useState(0);
  const preSlide = () =>
    current! >= 1
      ? setCurrent(current - 1)
      : setCurrent(Math.round(data.length / 10) - 1);
  const nextSlide = () =>
    current! <= Math.round(data.length / 10) - 1
      ? setCurrent(current + 1)
      : setCurrent(0);

  return (
    <div>
      <div className="relative overflow-hidden bg-[#1C5696] ">
        <div
          className="h-[150px] lg:h-[284.19px] md:h-[200px] flex gap-5 items-center z-50 transition delay-150 duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((item, index) => (
            <Link
              to={`/product-detail/${index}`}
              onClick={scrollToTheTopOfThePage}
              className="lg:min-w-[300px] md:min-w-[200px] min-w-[150px] flex justify-center items-center"
              key={index}
            >
              <img
                src={item.pictures[0]}
                alt="item"
                className="max-h-[220px] overflow-hidden"
              />
            </Link>
          ))}
        </div>
        <div
          className="absolute left-0 translate-y-[-288px]  pr-3 text-black bg-[#ffffffac] w-[30px] h-[300px] flex items-center cursor-pointer font-extrabold text-[30px] z-0"
          onClick={preSlide}
        >
          {"<"}
        </div>
        <div
          className="absolute right-0 translate-y-[-288px]  pr-3 text-black bg-[#ffffffac]  w-[30px] h-[300px] flex items-center cursor-pointer font-extrabold text-[30px] z-0"
          onClick={nextSlide}
        >
          {">"}
        </div>
      </div>
      ;
    </div>
  );
};

export default CarouselBottom;
