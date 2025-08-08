import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import { shopInterface } from "@/assets/fakeAPI/interfaceFakeAPI";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Branches = () => {
  const data: shopInterface[] = FakeAPIRespond.data.frontShop;
  return (
    <div className="lg:h-[600px]">
      <div>
        <h2 className="text-[50px] font-bold text-center mt-[50px]">
          Contact Us
        </h2>
      </div>
      <div className="block lg:flex justify-evenly items-center px-[2%]">
        {data.map((item) => {
          return (
            <div
              key={item.phone}
              className="rounded-xl shadow bg-gray-700 border-gray-500 lg:max-w-[30%] max-w-[90%] mx-auto my-[30px] lg:min-h-[490px]"
            >
              <Link to="#">
                <img
                  className="rounded-t-lg w-[100%]"
                  src={`${item.url}`}
                  alt={item.alt}
                />
              </Link>
              <div className="p-5">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  &#160;&#160;&#160;&#160;&#160;&#160;Where Your Ride Meets Expert Care..
                </p>
                <Link
                  to={`#`}
                  className="nav-linker inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <FaPhone />
                  &#160; {item.phone}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Branches;
