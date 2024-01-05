import { brandList, versionList, year, typeOfBike } from "./searchList";
import "@/index.css";

const SearchBar = () => {
  return (
    <div className="bg-[url('src/assets/images/shop/relative/groupTravel.webp')] ">
      <form className="h-[200px] flex justify-evenly items-center px-[5%]">
        <select className="bg-blue-600 w-[150px] font-semibold capitalize border group border-blue-800 text-white text-sm rounded-2xl block  p-2.5  ">
          {brandList.map((item, index) => (
            <option key={`brand-key-${index}`} value={index} className="">
              {item}
            </option>
          ))}
        </select>
        <select className="bg-blue-600 w-[150px] font-semibold capitalize border border-blue-800 text-white text-sm rounded-2xl block  p-2.5  ">
          {versionList.map((item, index) => (
            <option
              key={`brand-key-${index}`}
              value={index}
              className="hover:bg-slate-400 hover:text-white"
            >
              {item.version}
            </option>
          ))}
        </select>
        <select className="bg-blue-600  w-[150px] font-semibold capitalize border border-green-800 text-white text-sm rounded-2xl block  p-2.5  ">
          {year.map((item, index) => (
            <option
              key={`brand-key-${index}`}
              value={index}
              className="hover:bg-slate-400 hover:text-white"
            >
              {item}
            </option>
          ))}
        </select>
        <select className="bg-blue-600  w-[150px] font-semibold capitalize border border-blue-800 text-white text-sm rounded-2xl block  p-2.5  ">
          {typeOfBike.map((item, index) => (
            <option
              key={`brand-key-${index}`}
              value={index}
              className="hover:bg-black hover:text-white"
            >
              {item}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
