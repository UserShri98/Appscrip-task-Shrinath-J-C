import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <div className="rectangle-parent">
      <div className="frame-child" />
      <div className="frame-item" />
      <div className="filter-options">
        <div className="item-filter">
          <b className="items">3425 Items</b>
          <div className="item-filter-toggle">
            <div className="item-filter-icon">
              <img
                className="vuesaxlineararrow-left-icon5"
                alt=""
                src="/vuesaxlineararrowleft-5.svg"
              />
            </div>
            <div className="hide-filter">HIDE FILTER</div>
          </div>
        </div>
        <div className="recommendations-filter">
          <b className="recommended">RECOMMENDED</b>
          <div className="recommendations-filter-toggle">
            <img
              className="vuesaxlineararrow-left-icon6"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="filter-parent">
        <div className="filter">Filter</div>
        <div className="frame-inner" />
        <div className="frame-wrapper">
          <div className="lorem-parent">
            <b className="lorem">Lorem</b>
            <img
              className="vuesaxlineararrow-left-icon7"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
        </div>
        <div className="line-div" />
        <div className="lorem-group">
          <b className="lorem1">Lorem</b>
          <img
            className="vuesaxlineararrow-left-icon8"
            alt=""
            src="/vuesaxlineararrowleft@2x.png"
          />
        </div>
        <div className="frame-child1" />
        <div className="lorem-container">
          <b className="lorem2">Lorem</b>
          <img
            className="vuesaxlineararrow-left-icon9"
            alt=""
            src="/vuesaxlineararrowleft@2x.png"
          />
        </div>
        <div className="frame-child2" />
        <div className="frame-div">
          <b className="lorem3">Lorem</b>
          <img
            className="vuesaxlineararrow-left-icon10"
            alt=""
            src="/vuesaxlineararrowleft@2x.png"
          />
        </div>
        <div className="frame-child3" />
        <div className="lorem-parent1">
          <b className="lorem4">LOREM</b>
          <img
            className="vuesaxlineararrow-left-icon11"
            alt=""
            src="/vuesaxlineararrowleft@2x.png"
          />
        </div>
      </div>
      <div className="rectangle-div" />
      <div className="sort">Sort</div>
      <div className="frame-child4" />
      <div className="frame-child5" />
      <div className="newest-first">Newest first</div>
      <div className="price-high">Price : high to low</div>
      <div className="popular">popular</div>
      <div className="price-low">Price : low ot high</div>
    </div>
  );
};

export default GroupComponent;
