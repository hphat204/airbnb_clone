import React from "react";
import "../scss/Footer.css";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
function Footer() {
  return (
    <div className="footerContainer">
      <hr />
      <div className="footerContent">
        <ul>
          <li> &copy; 2021 Airbnb, Inc.</li>
          <li>quyền riêng tư</li>
          <li>điều khoản</li>
          <li>sơ đồ trang web</li>
        </ul>
        <ul>
          <div className="lan">
            <li>Tiếng việt</li>
            <li>VND</li>
          </div>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
