import React, { Component } from "react";
import ICTopNavigationBar from "./iccomponents/ICTopNavigationBar";
import "./iccmponentsstyles/InvestmentConsoleLayout.css";

class InvestmentConsoleLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developer: "Anudeep"
    };
  }

  render() {
    return (
      <div className="investment_console_layout">
        <ICTopNavigationBar />
        <div>side stock bar</div>
        <div>stock ribbon rotation</div>
        <div>Top 5 section</div>
        <div>Market news</div>
        <div>This site is developed by : {this.state.developer}</div>
      </div>
    );
  }
}

export default InvestmentConsoleLayout;
