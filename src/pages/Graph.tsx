import { useRef } from "react";
import * as Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

let data = [2, 7, 6, 8, 3, 2, 1];
const maxValue = Math.max(...data);
data = data.map((v) => {
  return maxValue - v;
});

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "area",
      data,
    },
  ],
  yAxis: {
    // reversed: true,
  },
};

export default function Graph() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...data}
    />
  );
}
