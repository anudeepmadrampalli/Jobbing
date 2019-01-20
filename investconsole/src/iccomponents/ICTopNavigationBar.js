import React, { Component } from "react";
import "../iccmponentsstyles/ICTopNavigationBar.css";

class ICTopNavigationBar extends Component {
  render() {
    return (
      <ul className="ictopnavbar navbar nav nav-tabs">
        <li className="active">
          <a href="#">Investment Console</a>
        </li>
        <li>
          <a href="https://www.investing.com">Investing.com</a>
        </li>
        <li>
          <a href="https://www.moneycontrol.com">Money Control</a>
        </li>
        <li>
          <a href="https://www.ndtv.com">NDTV Profit</a>
        </li>
        <li>
          <a href="https://www.kite.zerodha.com">Zerodha trading</a>
        </li>
      </ul>
    );
  }
}

export default ICTopNavigationBar;
