import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background" />
      <div className="footer-child" />
      <div className="footer-content">
        <div className="subscription-form-parent">
          <div className="subscription-form">
            <div className="be-the-first-to-know-parent">
              <b className="be-the-first">Be the first to know</b>
              <div className="sign-up-for">
                Sign up for updates from mettā muse.
              </div>
            </div>
            <div className="subscribe">
              <input
                className="input"
                placeholder="Enter your e-mail..."
                type="text"
              />
              <button className="button">
                <div className="subscribe1">Subscribe</div>
              </button>
            </div>
          </div>
          <div className="contact-info">
            <b className="contact-us1">CONTACT US</b>
            <div className="email-address">
              <div className="parent">
                <div className="div">+44 221 133 5360</div>
                <div className="customercaremettamusecom">
                  customercare@mettamuse.com
                </div>
                <img className="star-icon" alt="" src="/star-11.svg" />
              </div>
            </div>
            <div className="locale-settings">
              <b className="currency">Currency</b>
              <div className="language2">
                <img
                  className="united-states-of-america-us"
                  loading="lazy"
                  alt=""
                  src="/united-states-of-america-us.svg"
                />
                <div className="star-icon1">
                  <img className="star-symbol-icon" alt="" src="/star-11.svg" />
                </div>
                <div className="currency-value">
                  <b className="usd">USD</b>
                </div>
              </div>
              <div className="transactions-will-be">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content-child" />
      </div>
      <div className="brand-info">
        <div className="mett-muse-parent">
          <b className="mett-muse">mettā muse</b>
          <div className="navigation-links">
            <div className="about-us">About Us</div>
            <div className="stories1">Stories</div>
            <div className="artisans">Artisans</div>
            <div className="boutiques">Boutiques</div>
            <div className="contact-us2">Contact Us</div>
            <div className="eu-compliances-docs">EU Compliances Docs</div>
            <div className="join-as-a">Join as a Seller</div>
          </div>
        </div>
        <div className="frame-container">
          <div className="frame-parent1">
            <div className="quick-links-parent">
              <b className="quick-links">Quick Links</b>
              <div className="link-items">
                <div className="orders-shipping">{`Orders & Shipping`}</div>
                <div className="joinlogin-as-a">Join/Login as a Seller</div>
                <div className="payment-pricing">{`Payment & Pricing`}</div>
                <div className="return-refunds">{`Return & Refunds`}</div>
                <div className="faqs">FAQs</div>
                <div className="privacy-policy">Privacy Policy</div>
                <div className="terms-conditions">{`Terms & Conditions`}</div>
              </div>
            </div>
            <div className="copyright-info">
              <div className="copyright-2023">
                Copyright © 2023 mettamuse. All rights reserved.
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="follow-us-parent">
              <b className="follow-us">Follow Us</b>
              <div className="social-media-links">
                <div className="fb">
                  <div className="abefore" />
                  <img className="svg-icon" alt="" src="/svg.svg" />
                </div>
                <div className="insta">
                  <div className="abefore1" />
                  <img className="svg-icon1" alt="" src="/svg-1.svg" />
                </div>
                <div className="twitter">
                  <div className="abefore2" />
                  <img
                    className="twitter-3-svgrepo-com-1-icon"
                    alt=""
                    src="/twitter3svgrepocom-1.svg"
                  />
                </div>
                <div className="a">
                  <div className="abefore3" />
                  <img
                    className="mdilinkedin-icon"
                    loading="lazy"
                    alt=""
                    src="/mdilinkedin.svg"
                  />
                </div>
              </div>
            </div>
            <div className="payment-methods-header">
              <b className="mett-muse-accepts-container">
                {`mettā muse `}
                <span className="accepts">Accepts</span>
              </b>
              <div className="card-icons">
                <img
                  className="card-icons-child"
                  loading="lazy"
                  alt=""
                  src="/group-136188.svg"
                />
                <img
                  className="card-icons-item"
                  loading="lazy"
                  alt=""
                  src="/group-136190.svg"
                />
                <img
                  className="card-icons-inner"
                  loading="lazy"
                  alt=""
                  src="/group-136192.svg"
                />
                <button className="card-icon-parent">
                  <div className="card-icon" />
                  <img className="card-logo-icon" alt="" src="/card-logo.svg" />
                </button>
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src="/group-136194.svg"
                />
                <button className="rectangle-parent1">
                  <div className="frame-child9" />
                  <img className="vector-icon" alt="" src="/vector-1.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
