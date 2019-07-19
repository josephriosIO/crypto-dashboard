import React, { Component } from "react";
import _ from "lodash";
import moment from "moment";
const cc = require("cryptocompare");
cc.setApiKey(
  "31dc85e63c45fa987be19cd71e860b22d0e98be59c15328e8e7c478296cfa392"
);

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: ["BTC", "ETH", "XRP", "LINK"],
      ...this.saveSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFavorite: this.setCurrentFavorite,
      confirmFavs: this.confirmFavs
    };
  }

  componentDidMount() {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  fetchHistorical = async () => {
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment()
            .subtract({ months: TIME_UNITS - index })
            .valueOf(),
          ticker.USD
        ])
      }
    ];
    this.setState({ historical });
  };

  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ["USD"],
          moment()
            .subtract({ months: units })
            .toDate()
        )
      );
    }

    return Promise.all(promises);
  };

  addCoin = key => {
    let favorites = [...this.state.favorites];

    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({ favorites: _.pull(favorites, key) });
  };

  isInFavorites = key => _.includes(this.state.favorites, key);

  setFilteredCoins = filteredCoins => this.setState({ filteredCoins });

  fetchPrices = async () => {
    let prices = await this.prices();
    // We must filter the empty price objects (not in the lecture)
    prices = prices.filter(price => Object.keys(price).length);
    this.setState({ prices });
  };

  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], "USD");
        returnData.push(priceData);
      } catch (err) {
        console.warn("fetch price error", err);
      }
    }

    return returnData;
  };

  confirmFavs = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState(
      {
        firstVisit: false,
        page: "dashboard",
        currentFavorite,
        price: null,
        historical: null
      },
      () => {
        this.fetchPrices();
        this.fetchHistorical();
      }
    );
    localStorage.setItem(
      "cryptoLook",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite
      })
    );
  };

  setCurrentFavorite = sym => {
    this.setState(
      {
        currentFavorite: sym,
        historical: null
      },
      this.fetchHistorical
    );

    localStorage.setItem(
      "cryptoLook",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoLook")),
        currentFavorite: sym
      })
    );
  };

  saveSettings = () => {
    let cryptoData = JSON.parse(localStorage.getItem("cryptoLook"));
    if (!cryptoData) {
      return { page: "setting", firstVisit: true };
    }
    let { favorites, currentFavorite } = cryptoData;
    return { favorites, currentFavorite };
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
