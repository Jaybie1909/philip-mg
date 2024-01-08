import Branches from "./branches/Branches";
import CompanyDetail from "./companyDetail/CompanyDetail";
import MyLocation from "./map/MapLocation";

const ContactUs = () => {
  return (
    <div>
      <MyLocation />
      <CompanyDetail />
      <Branches />
    </div>
  );
};

export default ContactUs;
