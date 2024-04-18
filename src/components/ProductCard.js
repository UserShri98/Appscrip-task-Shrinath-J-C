import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="image">
        <img className="hover-pic-icon" alt="" src="/hover-pic@2x.png" />
        <img className="front-pic-icon" alt="" src="/front-pic-1@2x.png" />
      </div>
      <div className="rectangle-group">
        <div className="frame-child6" />
        <div className="ppxoc-milkyway-dress-in-presse-parent">
          <b className="ppxoc-milkyway-dress">
            PPXOC Milkyway dress in pressed flowers
          </b>
          <div className="explore-this-skill16">Explore this skill</div>
          <div className="frame-parent">
            <div className="sign-in-or-create-an-account-t-wrapper">
              <div className="sign-in-or-container1">
                <span className="sign-in1">Sign in</span> or Create an account
                to see pricing
              </div>
            </div>
            <img
              className="vuesaxlinearheart-icon2"
              alt=""
              src="/vuesaxlinearheart-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
