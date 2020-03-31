import React from "react";
import ReactEcharts from "echarts-for-react";

const Charts = () => {
  return (
    <ReactEcharts
      option={this.getOption()}
      notMerge={true}
      lazyUpdate={true}
      // theme={"theme_name"}
      onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
      // opts={}
    />
  );
};

export default Charts;
