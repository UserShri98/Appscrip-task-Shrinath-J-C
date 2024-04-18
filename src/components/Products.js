import ProductTemplate from "./ProductTemplate";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="checkbox-container-parent">
        <div className="checkbox-container">
          <input className="checkbox9" type="checkbox" />
          <div className="checkbox-label">
            <b className="customizble">Customizble</b>
          </div>
        </div>
        <div className="seperator" />
        <div className="filter-1">
          <div className="title3">
            <div className="name3">
              <b className="ideal-for">IDEAL FOR</b>
              <img
                className="vuesaxlineararrow-left-icon12"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="all3">All</div>
          </div>
          <div className="values3">
            <div className="unselect-all3">Unselect All</div>
            <div className="value-13">
              <div className="checkbox10" />
              <div className="men-65">Men (65)</div>
            </div>
            <div className="value-23">
              <div className="checkbox11" />
              <div className="women-63">Women (63)</div>
            </div>
            <div className="value-32">
              <div className="checkbox12" />
              <div className="baby-kids">{`Baby & Kids (59)`}</div>
            </div>
          </div>
        </div>
        <div className="seperator1" />
        <div className="filter-2">
          <div className="title4">
            <div className="name4">
              <b className="occasion">occasion</b>
              <img
                className="vuesaxlineararrow-left-icon13"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="all4">All</div>
          </div>
          <div className="values4">
            <div className="unselect-all4">Unselect All</div>
            <div className="value-14">
              <div className="checkbox13" />
              <div className="rainy-season-1">Rainy Season (1)</div>
            </div>
            <div className="value-24">
              <div className="checkbox14" />
              <div className="casual-3">Casual (3)</div>
            </div>
            <div className="value-33">
              <div className="checkbox15" />
              <div className="wedding-1">Wedding (1)</div>
            </div>
            <div className="value-41">
              <div className="checkbox16" />
              <div className="party-10">Party (10)</div>
            </div>
            <div className="value-5">
              <div className="checkbox17" />
              <div className="regular-2">Regular (2)</div>
            </div>
          </div>
        </div>
        <div className="seperator2" />
        <div className="filter-3">
          <div className="title5">
            <div className="name5">
              <b className="work">work</b>
              <img
                className="vuesaxlineararrow-left-icon14"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="all5">All</div>
          </div>
          <div className="values5">
            <div className="unselect-all5">Unselect All</div>
            <div className="value-15">
              <div className="checkbox18" />
              <div className="french-knot-2">French Knot (2)</div>
            </div>
            <div className="value-25">
              <div className="checkbox19" />
              <div className="zardosi-2">Zardosi (2)</div>
            </div>
            <div className="value-34">
              <div className="checkbox20" />
              <div className="fancy-1">Fancy (1)</div>
            </div>
            <div className="value-42">
              <div className="checkbox21" />
              <div className="embroidery-1">Embroidery (1)</div>
            </div>
          </div>
        </div>
        <div className="seperator3" />
        <div className="filter-4">
          <div className="title6">
            <div className="name6">
              <b className="fabric">fabric</b>
              <img
                className="vuesaxlineararrow-left-icon15"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="all6">All</div>
          </div>
          <div className="values6">
            <div className="unselect-all6">Unselect All</div>
            <div className="value-16">
              <div className="checkbox22" />
              <div className="muslin-1">Muslin (1)</div>
            </div>
            <div className="value-26">
              <div className="checkbox23" />
              <div className="satin-blend-1">Satin Blend (1)</div>
            </div>
            <div className="value-35">
              <div className="checkbox24" />
              <div className="satin-1">Satin (1)</div>
            </div>
            <div className="value-43">
              <div className="checkbox25" />
              <div className="tericoat-1">Tericoat (1)</div>
            </div>
            <div className="value-51">
              <div className="checkbox26" />
              <div className="linen-5">Linen (5)</div>
            </div>
            <div className="value-6">
              <div className="checkbox27" />
              <div className="raw-silk-2">Raw Silk (2)</div>
            </div>
            <div className="value-7">
              <div className="checkbox28" />
              <div className="cotton-13">Cotton (13)</div>
            </div>
            <div className="value-8">
              <div className="checkbox29" />
              <div className="silk-2">Silk (2)</div>
            </div>
            <div className="value-9">
              <div className="checkbox30" />
              <div className="cotton-silk-3">Cotton Silk (3)</div>
            </div>
          </div>
        </div>
        <div className="seperator4" />
        <div className="filter-7">
          <div className="title7">
            <div className="name7">
              <b className="segment">segment</b>
              <img
                className="vuesaxlineararrow-left-icon16"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="all7">All</div>
          </div>
          <div className="values7">
            <div className="unselect-all7">Unselect All</div>
            <div className="value-17">
              <div className="checkbox31" />
              <div className="silver-4">Silver (4)</div>
            </div>
            <div className="value-27">
              <div className="checkbox32" />
              <div className="ethnic-2">Ethnic (2)</div>
            </div>
            <div className="value-36">
              <div className="checkbox33" />
              <div className="contemporary-11">Contemporary (11)</div>
            </div>
          </div>
        </div>
        <div className="seperator5" />
        <div className="filter-8">
          <div className="title8">
            <div className="name8">
              <b className="suitable-for">suitable for</b>
              <img
                className="vuesaxlineararrow-left-icon17"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="all8">All</div>
          </div>
          <div className="values8">
            <div className="unselect-all8">Unselect All</div>
            <div className="value-18">
              <div className="checkbox34" />
              <div className="formal-wear-1">Formal Wear (1)</div>
            </div>
            <div className="value-28">
              <div className="checkbox35" />
              <div className="western-wear-1">Western Wear (1)</div>
            </div>
            <div className="value-37">
              <div className="checkbox36" />
              <div className="casual-wear-7">Casual Wear (7)</div>
            </div>
          </div>
        </div>
        <div className="seperator6" />
        <div className="filter-10">
          <div className="title9">
            <div className="name9">
              <b className="raw-materials">raw materials</b>
              <img
                className="vuesaxlineararrow-left-icon18"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="all9">All</div>
          </div>
          <div className="values9">
            <div className="unselect-all9">Unselect All</div>
            <div className="value-19">
              <div className="checkbox37" />
              <div className="wool-2">Wool (2)</div>
            </div>
            <div className="value-29">
              <div className="checkbox38" />
              <div className="silk-21">Silk (2)</div>
            </div>
            <div className="value-38">
              <div className="checkbox39" />
              <div className="leather-2">Leather (2)</div>
            </div>
            <div className="value-44">
              <div className="checkbox40" />
              <div className="cotton-5">Cotton (5)</div>
            </div>
            <div className="value-52">
              <div className="checkbox41" />
              <div className="cellulosic-fibers-4">Cellulosic Fibers (4)</div>
            </div>
          </div>
        </div>
        <div className="seperator7" />
        <div className="filter-11">
          <div className="title10">
            <div className="name10">
              <b className="pattern">Pattern</b>
              <img
                className="vuesaxlineararrow-left-icon19"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="all10">All</div>
          </div>
          <div className="values10">
            <div className="unselect-all10">Unselect All</div>
            <div className="value-110">
              <div className="checkbox42" />
              <div className="windowpane-2">Windowpane (2)</div>
            </div>
            <div className="value-210">
              <div className="checkbox43" />
              <div className="pinstripes-1">Pinstripes (1)</div>
            </div>
            <div className="value-39">
              <div className="checkbox44" />
              <div className="solid-2">Solid (2)</div>
            </div>
            <div className="value-45">
              <div className="checkbox45" />
              <div className="chalk-stripes-2">Chalk Stripes (2)</div>
            </div>
            <div className="value-53">
              <div className="checkbox46" />
              <div className="slim-fit-1">Slim Fit (1)</div>
            </div>
            <div className="value-61">
              <div className="checkbox47" />
              <div className="tartan-1">Tartan (1)</div>
            </div>
          </div>
        </div>
        <div className="seperator8" />
      </div>
      <div className="product-cards">
        <div className="card-layout">
          <div className="product-card1">
            <div className="image1">
              <div className="hover-pic" />
              <img
                className="front-pic-icon1"
                loading="lazy"
                alt=""
                src="/front-pic@2x.png"
              />
            </div>
            <div className="card-content">
              <div className="card-price" />
              <div className="card-description">
                <b className="ppxoc-milkyway-dress1">
                  PPXOC Milkyway dress in pressed flowers
                </b>
                <div className="explore-this-skill17">Explore this skill</div>
                <div className="card-action">
                  <div className="card-pricing">
                    <div className="sign-in-or-container2">
                      <span className="sign-in2">Sign in</span> or Create an
                      account to see pricing
                    </div>
                  </div>
                  <img
                    className="vuesaxlinearheart-icon3"
                    alt=""
                    src="/vuesaxlinearheart-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="secondary-card-info-parent">
            <div className="secondary-card-info" />
            <b className="new-product">new product</b>
          </div>
        </div>
        <img
          className="product-template-icon"
          loading="lazy"
          alt=""
          src="/rectangle-29438@2x.png"
        />
        <ProductTemplate vuesaxlinearheart="/vuesaxlinearheart-1.svg" />
        <img
          className="product-template-icon1"
          alt=""
          src="/rectangle-29438-1@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-item-icon"
          alt=""
          src="/rectangle-29438-2@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-item-icon1"
          alt=""
          src="/rectangle-29438-3@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-item-icon2"
          alt=""
          src="/rectangle-29438-4@2x.png"
        />
        <div className="product-item">
          <b className="product-name1">Product Name</b>
          <div className="price-info-parent">
            <div className="price-info">
              <div className="sign-in-or-container3">
                <span className="sign-in3">Sign in</span> or Create an account
                to see pricing
              </div>
            </div>
            <img
              className="vuesaxlinearheart-icon4"
              alt=""
              src="/vuesaxlinearheart-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="product-cards1">
        <div className="product-card-parent">
          <ProductCard />
          <div className="product-card-group">
            <ProductCard />
            <div className="rectangle-container">
              <div className="frame-child7" />
              <button className="group-button">
                <div className="frame-child8" />
                <b className="out-of-stock">out of stock</b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="product-cards-child"
          alt=""
          src="/rectangle-29438-5@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-cards-item"
          alt=""
          src="/rectangle-29438-6@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-cards-inner"
          alt=""
          src="/rectangle-29438-7@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img className="rectangle-icon" alt="" src="/front-pic-1@2x.png" />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-cards-child1"
          alt=""
          src="/rectangle-29438-5@2x.png"
        />
        <div className="product-name-parent">
          <b className="product-name2">Product Name</b>
          <div className="frame-group">
            <div className="sign-in-or-create-an-account-t-container">
              <div className="sign-in-or-container4">
                <span className="sign-in4">Sign in</span> or Create an account
                to see pricing
              </div>
            </div>
            <img
              className="vuesaxlinearheart-icon5"
              alt=""
              src="/vuesaxlinearheart-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="product-cards2">
        <img
          className="product-details-icon"
          alt=""
          src="/rectangle-29438-3@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-14.svg"
          propAlignSelf="unset"
          propWidth="269px"
        />
        <img className="product-details-icon1" alt="" src="/hover-pic@2x.png" />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-details-icon2"
          alt=""
          src="/rectangle-29438-4@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-details-icon3"
          alt=""
          src="/rectangle-29438-13@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-details-icon4"
          alt=""
          src="/rectangle-29438@2x.png"
        />
        <ProductTemplate
          vuesaxlinearheart="/vuesaxlinearheart-1.svg"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <img
          className="product-details-icon5"
          alt=""
          src="/rectangle-29438-13@2x.png"
        />
        <div className="product-details">
          <b className="product-name3">Product Name</b>
          <div className="price-info-group">
            <div className="price-info1">
              <div className="sign-in-or-container5">
                <span className="sign-in5">Sign in</span> or Create an account
                to see pricing
              </div>
            </div>
            <img
              className="vuesaxlinearheart-icon6"
              alt=""
              src="/vuesaxlinearheart-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
