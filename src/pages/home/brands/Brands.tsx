import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import { brandsInterface } from "@/assets/fakeAPI/interfaceFakeAPI";
import { Link } from "react-router-dom";

const Brands = () => {
  const data: brandsInterface[] = FakeAPIRespond.data.brands;
  return (
    <div className="h-[500px] sm:h-[300px] lg:h-[150px] bg-[#B3CDE0]  ">
      <div className="grid grid-cols-2  sm:grid-cols-4 lg:flex justify-evenly items-center h-[100%]">
        {data.map((item) => {
          return (
            <div key={`${item.brandName}-brand`} className="m-auto">
              <span className="">
                <Link to="/">
                  <img
                    src={item.url}
                    alt={`${item.brandName}`}
                    className="h-[100px]"
                  />
                </Link>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
