import React from "react";
import HighChartsConfig from "./HighChartsConfig";
import { Tile } from "../Shared/Tile";
import ReactHighCharts from "react-highcharts";
import { AppContext } from "../../AppProvider";
import HighChartsTheme from "./HighChartsTheme";
ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHighCharts config={HighChartsConfig(historical)} />
          ) : (
            <div>Loading data</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
