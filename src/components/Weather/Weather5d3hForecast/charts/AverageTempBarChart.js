import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const AverageTempBarChart = (props) => {
  const chartRef = useRef(null);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  const tooltipPrefixes = [
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:56 UTC",
    "22/01/2022 20:30:57 UTC",
    "22/01/2022 20:30:58 UTC",
    "22/01/2022 20:30:59 UTC",
    "22/01/2022 20:30:00 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:55 UTC",
    "22/01/2022 20:30:30 UTC",
  ];

  const addCustomLabel = (context) => {
    console.log(context);
    const dayAndHour = tooltipPrefixes[context.dataIndex]
    let label = context.dataset.label || '';

    if (label) {
      label = label.split(/\s+/)[0] + ': ' + dayAndHour + ' - ' + context.parsed.y + '°C';
    }
    // if (context.parsed.y !== null) {
    //     label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
    // }
    return label;
}

  //TODO figure our how to display the labels in the tooltip instead of the x axis https://www.chartjs.org/docs/3.5.0/configuration/tooltip.html
  const options = {
    // elements:{
    //   bar:{
    //     // borderRadius: 10,
    //     // borderWidth: 2,
    //     // backgroundColor:'#fffa65'
    //   }
    // },
    plugins: {
      tooltip: {
        callbacks: {
          label: addCustomLabel
        },
      },
    },
    layout: {
      padding: 25,
    },
    responsive: true,
    label: {
      display: false,
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };


  const data = [
    30, 22, 20, 25, 27, 31, 33, 24, 19, 23, 30, 22, 20, 25, 27, 31, 33, 24, 19,
    23, 30, 22, 20, 25, 27, 31, 33, 24, 19, 23, 30, 22, 20, 25, 27, 31, 33, 24,
    19, 23,
  ];

  return (
    <div>
      <Bar
        ref={chartRef}
        options={options}
        type="bar"
        data={{
          labels: data.map(() => ""),
          // labels: data,
          datasets: [
            {
              label: "Temperature °C",
              data: data,
              borderColor: '#fffa65',
              backgroundColor: 'rgba(255, 250, 101, 0.5)',
              borderWidth: 2,
              borderRadius: Number.MAX_VALUE,
              borderSkipped: false,
            },
          ],
        }}
      />
    </div>
  );
};

export default AverageTempBarChart;
