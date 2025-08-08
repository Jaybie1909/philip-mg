import CompanyCard from "../../../components/CompanyCard.component";

const CompanyDetail = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-[20px] justify-evenly items-center w-[100%] md:h-[650px]  px-[5%] py-[20px]">
        <div className="md:w-[50%] md:h-[100%] bg-gray-300">
          <div className="font-semibold text-2xl flex flex-col px-[10%] py-[15%]">
            <CompanyCard />
          </div>
        </div>
        <div className="md:w-[50%] w-[100%] h-[100%] bg-gray-300 flex justify-center items-center">
          <div className="w-[90%] h-[90%] overflow-hidden">
            <div className="bg-[url('/images/shop/1.jpg')] bg-no-repeat bg-cover w-[1100px] h-[1000px] md:translate-x-[-45%] translate-x-[-50%] lg:translate-x-[-38%] sm:translate-x-[-43%] sm:translate-y-[-43%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
