const SearchBar = () => {
  return (
    <div className="h-[200px] bg-orange-300 flex items-center">
      <div className="">
        <a href="">
          <button className="hover:scale-125 scale-95 active:scale-105  w-[200px] rounded-xl py-1 border-[2px] border-opacity-60 border-gray-500 shadow-2xl bg-gray-300 text-2xl font-semibold transition-all delay-150 duration-300 ease-in-out">
            Recommnaded
          </button>
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
