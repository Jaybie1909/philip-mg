const ProfessionalUsedCarVendor = () => {
  return (
    <div className="relative w-[100%] h-[280px]  -[20px]">
      <div className="absolute top-[10%] left-[3%] w-[90%] h-[200px] flex z-20 bg-gray-400 bg-opacity-90"></div>

      <div className="absolute bottom-[25px] right-[3%] w-[90%] h-[200px] flex z-20">
        <div className="w-[65%] bg-gray-300 flex justify-evenly">
          <div className="">
            <div className="h-[200px] w-[150px] relative items-center">
              <div className="font-bold text-[150px] leading-none">8</div>
              <div className="absolute font-semibold text-2xl right-0 bottom-[28.5%]">
                Years
              </div>
              <div className="absolute font-semibold text-[31px] bottom-[10%] ">
                experience
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-[200px] w-[150px] relative items-center">
              <div className="font-bold text-[150px] leading-none">7</div>
              <div className="absolute font-semibold text-[21px] right-[4px] bottom-[28.5%]">
                Branches
              </div>
              <div className="absolute font-semibold text-[29px] bottom-[10%] ">
                In Thailand
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-[200px] w-[150px] relative items-center">
              <div className="font-bold text-[150px] leading-none">3</div>
              <div className="absolute font-semibold text-[19px] right-[6px] bottom-[28.5%]">
                Months
              </div>
              <div className="absolute font-semibold text-[31px] bottom-[10%] ">
                Warranty
              </div>
            </div>
          </div>
        </div>
        <div className="pl-[20px] w-[35%] bg-gray-300">
          <div className="flex flex-col h-[100%] justify-evenly">
            <span className="text-black text-4xl font-extrabold">
              Professional
            </span>
            <span className="text-black text-4xl font-extrabold">Used Car</span>
            <span className="text-black text-4xl font-extrabold">Vendor</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalUsedCarVendor;
