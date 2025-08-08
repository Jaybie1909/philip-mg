import SocialMediaCard from "./SocialMediaCard.conponent";

const CompanyCard = () => {
  return (
    <>
      <h2 className="text-[35px] font-bold">Philip Moto Garage</h2>
      <span className="pt-[15px] font-bold ">Navotas</span>
      <span className="pl-[10px] text-lg">
        &#160;&#160;&#160;&#160; "Quality Bikes. Honest Deals. Every Time."
      </span>
      <span className="pt-[15px] text-xl">Tel. : 0969 574 1682</span>
      <span className="text-xl">Email : orquejohnphilip4@gmail.com</span>
      <SocialMediaCard />
    </>
  );
};

export default CompanyCard;
