import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import Products from "../components/Products";
import Footer from "../components/Footer";
import "./WebPLPWithFilter.css";

const WebPLPWithFilter = () => {
  return (
    <div className="webplpwith-filter">
      <img
        className="webplpwith-filter-child"
        alt=""
        src="/rectangle-29437@2x.png"
      />
      <div className="filter-5">
        <div className="title">
          <div className="name">
            <div className="jacket-material">jacket material</div>
            <img
              className="vuesaxlineararrow-left-icon"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="all">All</div>
        </div>
        <div className="values">
          <div className="unselect-all">Unselect All</div>
          <div className="value-1">
            <div className="checkbox" />
            <div className="velvet-5">Velvet (5)</div>
          </div>
          <div className="value-2">
            <div className="checkbox1" />
            <div className="cotton-7">Cotton (7)</div>
          </div>
          <div className="value-3">
            <div className="checkbox2" />
            <div className="leather-13">Leather (13)</div>
          </div>
        </div>
      </div>
      <div className="filter-6">
        <div className="title1">
          <div className="name1">
            <div className="sleeve-length">sleeve length</div>
            <img
              className="vuesaxlineararrow-left-icon1"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="all1">All</div>
        </div>
        <div className="values1">
          <div className="unselect-all1">Unselect All</div>
          <div className="value-11">
            <div className="checkbox3" />
            <div className="half-sleeve-2">Half Sleeve (2)</div>
          </div>
          <div className="value-21">
            <div className="checkbox4" />
            <div className="cap-sleeve-10">Cap Sleeve (10)</div>
          </div>
        </div>
      </div>
      <div className="filter-9">
        <div className="title2">
          <div className="name2">
            <div className="sleeve">sleeve</div>
            <img
              className="vuesaxlineararrow-left-icon2"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="all2">All</div>
        </div>
        <div className="values2">
          <div className="unselect-all2">Unselect All</div>
          <div className="value-12">
            <div className="checkbox5" />
            <div className="roll-up-sleeve-1">Roll-Up Sleeve (1)</div>
          </div>
          <div className="value-22">
            <div className="checkbox6" />
            <div className="regular-sleeves-1">Regular Sleeves (1)</div>
          </div>
          <div className="value-31">
            <div className="checkbox7" />
            <div className="long-sleeve-1">Long Sleeve (1)</div>
          </div>
          <div className="value-4">
            <div className="checkbox8" />
            <div className="full-sleeve-5">Full Sleeve (5)</div>
          </div>
        </div>
      </div>
      <div className="explore-this-skill">Explore this skill</div>
      <div className="explore-this-skill1">Explore this skill</div>
      <div className="explore-this-skill2">Explore this skill</div>
      <div className="explore-this-skill3">Explore this skill</div>
      <div className="explore-this-skill4">Explore this skill</div>
      <div className="explore-this-skill5">Explore this skill</div>
      <div className="explore-this-skill6">Explore this skill</div>
      <div className="explore-this-skill7">Explore this skill</div>
      <div className="explore-this-skill8">Explore this skill</div>
      <div className="explore-this-skill9">Explore this skill</div>
      <div className="explore-this-skill10">Explore this skill</div>
      <div className="explore-this-skill11">Explore this skill</div>
      <div className="explore-this-skill12">Explore this skill</div>
      <div className="explore-this-skill13">Explore this skill</div>
      <div className="explore-this-skill14">Explore this skill</div>
      <div className="explore-this-skill15">Explore this skill</div>
      <div className="grey-strip">
        <div className="vuesaxlinearelement-4-parent">
          <img
            className="vuesaxlinearelement-4-icon"
            alt=""
            src="/vuesaxlinearelement4.svg"
          />
          <div className="lorem-ipsum-dolor-wrapper">
            <div className="lorem-ipsum-dolor">Lorem ipsum dolor</div>
          </div>
        </div>
        <div className="vuesaxlinearelement-4-group">
          <img
            className="vuesaxlinearelement-4-icon1"
            alt=""
            src="/vuesaxlinearelement4.svg"
          />
          <div className="lorem-ipsum-dolor-container">
            <div className="lorem-ipsum-dolor1">Lorem ipsum dolor</div>
          </div>
        </div>
        <div className="vuesaxlinearelement-4-container">
          <img
            className="vuesaxlinearelement-4-icon2"
            alt=""
            src="/vuesaxlinearelement4.svg"
          />
          <div className="lorem-ipsum-dolor-frame">
            <div className="lorem-ipsum-dolor2">Lorem ipsum dolor</div>
          </div>
        </div>
      </div>
      <FrameComponent />
      <main className="content">
        <section className="content-header">
          <div className="content-header-inner">
            <div className="product-title-parent">
              <div className="product-title">
                <h1 className="discover-our-products">DISCOVER OUR PRODUCTS</h1>
              </div>
              <div className="lorem-ipsum-dolor3">
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
                dolor.
              </div>
            </div>
          </div>
          <GroupComponent />
          <Products />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebPLPWithFilter;
