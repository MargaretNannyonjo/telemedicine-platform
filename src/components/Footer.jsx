import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="footer-div flex-items">
          <div>
            <h5>About Us</h5>
            <p>About Us</p>
            <p>Our Providers</p>
            <p>Careers</p>
            <p>How it works</p>
          </div>

          <div>
            <h5>Learn more</h5>
            <p>Frequently asked questions</p>
            <p>Contact Us</p>
            <p>Blog</p>
          </div>
        </div>

        <div className="icons">
          <i className="fa-brands fa-facebook flex-icons"></i>
          <i className="fa-brands fa-twitter flex-icons"></i>
          <i className="fa-brands fa-instagram flex-icons"></i>
          <i className="fa-brands fa-tiktok flex-icons"></i>
          <i className="fa-brands fa-youtube flex-icons"></i>

          <div className="subscribe">
            <p>Subscribe to our news letter for more info</p>
            <input type="email" placeholder="Enter E-mail address" />
            <button>Subscribe</button>

            <p style={{ marginTop: "10px" }}>
              Download the <span className="app">Virtualcare</span> app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
