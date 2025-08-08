import { useState } from "react";
import { brandList, versionList, year, typeOfBike } from "./searchList";
const bgImage = '/images/shop/relative/1.webp';




type FilterType = {
  brand: string;
  version: string;
  year: string;
  type: string;
};

interface SearchBarProps {
  onFilterChange: React.Dispatch<React.SetStateAction<FilterType>>;
}

const SearchBar = ({ onFilterChange }: SearchBarProps) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleChange = (type: string, value: string) => {
    if (type === "brand") setSelectedBrand(value);
    if (type === "version") setSelectedVersion(value);
    if (type === "year") setSelectedYear(value);
    if (type === "type") setSelectedType(value);

    onFilterChange((prev: FilterType) => ({
      ...prev,
      [type]: value, // ✅ Dynamically update the right filter
    }));
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <form className="h-[200px] flex justify-evenly items-center px-[5%]">
        {/* Brand */}
        <select
          className="bg-blue-600 w-[150px] font-semibold capitalize border border-blue-800 text-white text-sm rounded-2xl p-2.5"
          value={selectedBrand}
          onChange={(e) => handleChange("brand", e.target.value)}
        >
          <option value="">All Brands</option>
          {brandList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Version */}
        <select
          className="bg-blue-600 w-[150px] font-semibold capitalize border border-blue-800 text-white text-sm rounded-2xl p-2.5"
          value={selectedVersion}
          onChange={(e) => handleChange("version", e.target.value)}
        >
          <option value="">All Versions</option>
          {versionList
            .filter((item) => selectedBrand === "" || item.brand === selectedBrand)
            .map((item, index) => (
              <option key={index} value={item.version}>
                {item.version}
              </option>
            ))}
        </select>

        {/* Year */}
        <select
          className="bg-blue-600 w-[150px] font-semibold capitalize border border-green-800 text-white text-sm rounded-2xl p-2.5"
          value={selectedYear}
          onChange={(e) => handleChange("year", e.target.value)}
        >
          <option value="">All Years</option>
          {year.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Type */}
        <select
          className="bg-blue-600 w-[150px] font-semibold capitalize border border-blue-800 text-white text-sm rounded-2xl p-2.5"
          value={selectedType}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <option value="">All Types</option>
          {typeOfBike.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
