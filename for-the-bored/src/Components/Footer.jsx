import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footerFirst">
        <h3>Shortly</h3>
      </div>
      <div className="footerSecond">
        <ul>
          <li>Features</li>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>

        <ul>
          <li>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>

        <ul>
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footerThird">
        <ul>
          <li>
            <img src="/imgs/icon-facebook.svg" />
          </li>
          <li>
            <img src="/imgs/icon-twitter.svg" />
          </li>
          <li>
            <img src="/imgs/icon-pinterest.svg" />
          </li>
          <li>
            <img src="/imgs/icon-instagram.svg" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
