import React from "react";
import { brands } from "@/assets/fakeAPI/FakeAPI";

const Brands = () => {
  return (
    <div className="h-[150px] bg-[#B3CDE0]">
      <div className="flex justify-evenly items-center h-[100%]">
        {brands.map((item) => {
          return (
            <div key={`${item.brandName}-brand`}>
              <span className="">
                <a href="/">
                  <img
                    src={item.url}
                    alt={`${item.brandName}`}
                    className="h-[100px]"
                  />
                </a>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
