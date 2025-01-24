"use client";

import Controller from "./Controller/Controller";
import classes from "./ExchangeSection.module.scss";
import LineChart from "@/components/Charts/LineChart/LineChart";

const data = {
  labels: [
    ...Array(34)
      .fill(0)
      .map((el, index) => 2015 + index),
  ],

  datasets: [
    {
      label: "Dataset 1",
      data: [
        65, 100, 88, 223, 212, 140, 200, 150, 180, 200, 232, 299, 48, 98, 90,
        45, 155, 155, 145, 190, 198, 148, 199, 322, 400, 180, 179, 100, 288,
        223, 212, 240, 550, 530,
      ],
      borderColor: "rgba(21, 212, 107)",
      pointRadius: 0,
      fill: true,
      backgroundColor: (context: any) => {
        const { chart } = context;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top
        );
        gradient.addColorStop(1, "rgba(21, 212, 107, 0.5)"); // Lighter green
        gradient.addColorStop(0, "rgba(21, 212, 107, 0)"); // Transparent green

        return gradient;
      },
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    datalabels: { display: false },

    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
        width: 1,
      },

      ticks: {
        display: false,
      },
      title: { display: false },
    },
    y: {
      display: false,
      grid: {
        display: false,
        color: "white",
      },
    },
  },
};

const arbitaryLine = {
  id: "arbitaryLine",
  beforeDatasetsDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
      scales: { x, y },
      data,
    } = chart;

    ctx.save();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(21, 212, 107)";

    // Set the line dash pattern (array: [dashLength, gapLength])
    ctx.setLineDash([5, 5]); // 5px dash, 5px gap

    // Calculate the middle value for the x-axis
    const middleIndex = Math.floor(data.labels.length / 2); // Get the middle index

    ctx.moveTo(x.getPixelForValue(middleIndex), top);
    ctx.lineTo(x.getPixelForValue(middleIndex), bottom);
    ctx.stroke();
  },
};

const ExchangeSection = () => {
  return (
    <div className={classes["exchange-section-wrapper"]}>
      <div className={classes["exchange-section-container"]}>
        <div className={classes["left-section"]}>
          <div className={classes["section-content"]}>
            <p className={classes["header"]}>
              <span>Generate</span> income in the long run
            </p>
            <p className={classes["desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus eius nemo voluptatibus ad! Nesciunt, voluptas!
            </p>
          </div>
          <div className={classes["section-contoller"]}>
            <Controller />
          </div>
        </div>
        <div className={classes["right-section"]}>
          <div className={classes["right-graph-container"]}>
            <LineChart options={options} data={data} plugins={[arbitaryLine]} />
          </div>
          <div className={classes["right-content-container"]}>
            <p className={classes["title"]}>
              Sell with <span>maximum</span> benefit
            </p>
            <p className={classes["desc"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nam omnis error esse magni deleniti!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeSection;
