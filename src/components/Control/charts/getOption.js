const getOption = {
  title: {
    text: "任務完成數(by Day)"
  },
  tooltip: {
    trigger: "axis"
  },
  // legend: {
  //   data: ["邮件营销", "联盟广告", "视频广告"]
  // },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "任務數",
      type: "bar",
      stack: "總量",
      areaStyle: { normal: {} },
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};

export default getOption;
