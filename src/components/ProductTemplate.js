import { useMemo } from "react";
import "./ProductTemplate.css";

const ProductTemplate = ({ vuesaxlinearheart, propAlignSelf, propWidth }) => {
  const productNameStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className="product-template">
      <b className="product-name" style={productNameStyle}>
        Product Name
      </b>
      <div className="product-action">
        <div className="product-price">
          <div className="sign-in-or-container">
            <span className="sign-in">Sign in</span> or Create an account to see
            pricing
          </div>
        </div>
        <img
          className="vuesaxlinearheart-icon1"
          alt=""
          src={vuesaxlinearheart}
        />
      </div>
    </div>
  );
};

export default ProductTemplate;
