import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="navigation-logo">
          <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
        </div>
        <img className="india-in-icon" alt="" src="/india-in.svg" />
        <img className="header-child" alt="" src="/star-1.svg" />
        <div className="icons">
          <img
            className="vuesaxlinearsearch-normal-icon"
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
          <img
            className="vuesaxlinearsearch-normal-icon1"
            alt=""
            src="/vuesaxlinearsearchnormal1.svg"
          />
          <div className="language">
            <img className="india-in-icon1" alt="" src="/india-in1.svg" />
            <img className="language-child" alt="" src="/star-1.svg" />
            <b className="eng">ENG</b>
            <img
              className="vuesaxlineararrow-left-icon3"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
        </div>
        <div className="navigation-actions">
          <div className="brand-parent">
            <div className="brand">
              <h1 className="logo">LOGO</h1>
              <div className="search">
                <div className="search-icons">
                  <img
                    className="vuesaxlinearsearch-normal-icon2"
                    alt=""
                    src="/vuesaxlinearsearchnormal1.svg"
                  />
                  <img
                    className="vuesaxlinearheart-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="navigation-tabs">
              <div className="tabs">
                <div className="product-tabs">
                  <div className="tab-1">
                    <b className="shop">SHOP</b>
                  </div>
                  <div className="product-tabs-child" />
                </div>
                <div className="product-tabs1">
                  <div className="tab-2">
                    <b className="skills">SKILLS</b>
                  </div>
                  <div className="product-tabs-item" />
                </div>
                <div className="tab-3">
                  <b className="stories">STORIES</b>
                  <div className="tab-3-child" />
                </div>
                <div className="tab-4">
                  <b className="about">ABOUT</b>
                  <div className="tab-4-child" />
                </div>
                <div className="tab-5">
                  <b className="contact-us">CONTACT US</b>
                  <div className="tab-5-child" />
                </div>
              </div>
            </div>
          </div>
          <div className="action-icons">
            <img
              className="vuesaxlinearshopping-bag-icon"
              loading="lazy"
              alt=""
              src="/vuesaxlinearshoppingbag.svg"
            />
          </div>
          <div className="action-icons1">
            <img
              className="vuesaxtwotoneprofile-icon"
              loading="lazy"
              alt=""
              src="/vuesaxtwotoneprofile.svg"
            />
          </div>
          <div className="language1">
            <div className="language-dropdown">
              <div className="language-name">
                <b className="eng1">ENG</b>
              </div>
              <img
                className="vuesaxlineararrow-left-icon4"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent;
