import CompanyAddress from "./companyAdress/CompanyAddress";
import CarouselDetail from "./productDisplay/Carousel.detail";
import ProductDisplay from "./productDisplay/ProductDisplay";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { indexID } = useParams();
  return (
    <div>
      <ProductDisplay indexID={indexID} />
      <CompanyAddress />
    </div>
  );
};

export default ProductDetail;
