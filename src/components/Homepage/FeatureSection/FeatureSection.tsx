"use client";

import classes from "./FeatureSection.module.scss";
import styles from "../../../designSystem/_classes.module.scss";
import DollarIcon from "@/assets/icons/DollarIcon";
import LightningIcon from "@/assets/icons/LightningIcon";
import ShieldIcon from "@/assets/icons/ShieldIcon";
import ArrowWithTail from "@/assets/icons/ArrowWithTail";
import LineChart from "@/components/Charts/LineChart/LineChart";

let coinArr = [
  { coin: "Bitcoin", price: "$80,00,000.12" },
  { coin: "Ethereum", price: "$80,00,000.12" },
  { coin: "Ripple", price: "$80,00,000.12" },
  { coin: "Solana", price: "$80,00,000.12" },
];

let featuresArr = [
  {
    header: "Liquidity",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, distinctio.",
    icon: <DollarIcon color="rgba(21, 212, 107)" width="20" height="20" />,
  },
  {
    header: "Speed",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, distinctio.",
    icon: <LightningIcon color="rgba(21, 212, 107)" width="26" height="26" />,
  },
  {
    header: "Security",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, distinctio.",
    icon: <ShieldIcon color="rgba(21, 212, 107)" width="20" height="20" />,
  },
];

const data = {
  labels: [
    ...Array(10)
      .fill(0)
      .map((el, index) => 2015 + index),
  ],

  datasets: [
    {
      label: "Dataset 1",
      data: [1, 100, 20, 303, 22, 100, 200, 250, 280, 300],
      borderColor: "rgba(160, 160, 160)",
      pointRadius: 0,
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
        display: true,
        color: "rgb(80,80,80)",
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

const FeatureSection = () => {
  return (
    <div className={classes["feature-section-container"]}>
      <div className={classes["section-content"]}>
        <p className={classes["content-header"]}>
          <span>Predit</span> changes and <br /> signal to sell or buy.
        </p>
        <p className={classes["content-desc"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptas error magnam qui impedit dignissimos, officiis in a vitae
          rem! Sed laboriosam accusamus eaque at vero autem ducimus distinctio
          deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus totam vitae reprehenderit porro nemo ullam incidunt officia.
        </p>
      </div>
      <div
        className={`${classes["graphs-container"]} ${styles["hide-scrollbar"]}`}
      >
        {coinArr.map((coin, index) => (
          <div key={index} className={classes["card-container"]}>
            <div className={classes["coin-price-container"]}>
              <p className={classes["coin-name"]}>
                {coin.coin}{" "}
                <ArrowWithTail rotation={125} color="rgba(21, 212, 107)" />{" "}
              </p>
              <p className={classes["coin-price"]}>{coin.price}</p>
            </div>
            <div className={classes["chart-container"]}>
              <LineChart options={options} data={data} />
            </div>
          </div>
        ))}
      </div>
      <div className={classes["features-container"]}>
        {featuresArr.map((feature, index) => (
          <div key={index} className={classes["card-container"]}>
            <div className={classes["card-header"]}>
              <div className={classes["icon-container"]}>{feature.icon}</div>
              <p className={classes["heading"]}>{feature.header}</p>
            </div>
            <p className={classes["card-desc"]}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
