import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import getOption from "./getOption";

const Charts = () => {
  echarts.registerTheme("my_theme", {
    color: "#fff"
  });
  return (
    <ReactEcharts
      option={getOption}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: "350px", width: "100%" }}
      theme="my_theme"
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
      // opts={}
    />
  );
};

export default Charts;
