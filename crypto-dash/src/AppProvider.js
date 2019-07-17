import React, { Component } from "react";
const cc = require("cryptocompare");

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.saveSettings(),
      setPage: this.setPage,
      confirmFavs: this.confirmFavs
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  saveSettings = () => {
    let cryptoData = JSON.parse(localStorage.getItem("cryptoLook"));
    if (!cryptoData) {
      return { page: "setting", firstVisit: true };
    }

    return {};
  };

  confirmFavs = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard"
    });
    localStorage.setItem(
      "cryptoLook",
      JSON.stringify({
        test: "hello"
      })
    );
  };

  setPage = page => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
