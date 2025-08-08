import CompanyAddress from "./companyAdress/CompanyAddress";
import ProductDisplay from "./productDisplay/ProductDisplay";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { indexID } = useParams<{ indexID: string }>();
  return (
    <div>
      <ProductDisplay indexID={indexID || "0"} /> {/* Default to "0" if undefined */}
      <CompanyAddress />
    </div>
  );
};

export default ProductDetail;