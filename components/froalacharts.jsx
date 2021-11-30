export default function NextFC({ dataSource }) {
  const chartConfigs = {
    type: "doughnut",
    width: 600,
    height: 400,
    dataFormat: "json",
    dataSource: dataSource,
  };
  const FroalaCharts = require("froalacharts");
  const FroalaTheme = require("froalacharts/themes/froalacharts.theme.froala.js");
  const { default: ReactFC } = require("react-froalacharts");

  ReactFC.fcRoot(FroalaCharts, FroalaTheme);

  return <ReactFC {...chartConfigs} />;
}
