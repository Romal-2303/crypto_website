"use client";

import React from "react";
import classes from "./FaqComponent.module.scss";
import Accordion from "./Accordian/Accordian";

const FaqComponent = () => {
  const accordionItems = [
    {
      id: 1,
      title: "What problem do you solve?",
      content:
        "Cryto is the best cryptocurrency trading platform, trade cryto simple, top crytocurrencies exchange platform and the best platform to buy cryptocurrencies.",
    },
    {
      id: 2,
      title: "Crypot-supported-cryptocurrencies",
      content:
        "Cryto is the best cryptocurrency trading platform, trade cryto simple, top crytocurrencies exchange platform and the best platform to buy cryptocurrencies.",
    },
    {
      id: 3,
      title: "What platforms do you support?",
      content:
        "Cryto is the best cryptocurrency trading platform, trade cryto simple, top crytocurrencies exchange platform and the best platform to buy cryptocurrencies.",
    },
    {
      id: 4,
      title: "About Cryptocurrency",
      content:
        "Cryto is the best cryptocurrency trading platform, trade cryto simple, top crytocurrencies exchange platform and the best platform to buy cryptocurrencies.",
    },
  ];
  return (
    <div className={classes["faq-container"]}>
      <div className={classes["left-container"]}>
        <p className={classes["heading"]}>Frequenty  </p>
        <p className={classes["heading"]} style={{ marginBottom: "2.4rem" }}>Asked <span style={{ color: "#15d46b" }} >Questions</span></p>
        <p className={classes["body"]}>We know you have some questions in mind , we've tried to </p>
        <p className={classes["body"]}>list the most important ones </p>

      </div>
      <div className={classes["right-container"]}>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default FaqComponent;
