import { useState } from "react";
import ProductCard from "./productCard/productCard";
import SearchBar from "./searchBar/SearchBar";
import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import { bikeDataInterface } from "@/assets/fakeAPI/interfaceFakeAPI";

// ✅ Use actual data
const allBikes: bikeDataInterface[] = FakeAPIRespond.data.bikeData;

const Products = () => {
  type FilterType = {
  brand: string;
  version: string;
  year: string;
  type: string;
};

  const [filters, setFilters] = useState<FilterType>({
  brand: "",
  version: "",
  year: "",
  type: "",
});


  const filteredProducts = allBikes.filter((product) => {
    return (
      (filters.brand === "" || product.brand === filters.brand) &&
      (filters.version === "" || product.version === filters.version) &&
      (filters.year === "" || product.year === Number(filters.year)) && // ✅ Fix here
      (filters.type === "" || product.type === filters.type)
    );
  });

  return (
    <div>
      <SearchBar onFilterChange={setFilters} />
      <ProductCard products={filteredProducts} />
    </div>
  );
};

export default Products;
