import SocialMediaCard from "./SocialMediaCard.conponent";

const CompanyCard = () => {
  return (
    <>
      <h2 className="text-[35px] font-bold">Company Name</h2>
      <span className="pt-[15px] font-bold ">Business Address</span>
      <span className="pl-[10px] text-lg">
        &#160;&#160;&#160;&#160; Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A blanditiis voluptatibus modi nihil animi. Esse,
        eaque fugit ipsam
      </span>
      <span className="pt-[15px] text-xl">Tel. : 088-888-8888</span>
      <span className="text-xl">Email : kaideemakemake@mail.com</span>
      <SocialMediaCard />
    </>
  );
};

export default CompanyCard;
