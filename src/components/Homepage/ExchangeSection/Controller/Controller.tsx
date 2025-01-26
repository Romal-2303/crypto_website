"use client";

import Dropdown from "@/components/Dropdown/Dropdown";
import classes from "./Controller.module.scss";
import { useState } from "react";
import Wallet from "@/assets/icons/Wallet";
import { motion } from "framer-motion";

const Controller = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const btnClickHandler = () => {
    setDropdownVisibility(true);
  };

  return (
    <>
      <div className={classes["controller-container"]}>
        <div className={classes["coin-row-container"]}>
          <div className={classes["coin-row"]}>
            <p className={classes["title"]}>Sell</p>
            <div className={classes["value-dropdown-container"]}>
              <p>0.0081</p>

              <div onClick={btnClickHandler}>BTC</div>

              {dropdownVisibility && (
                <Dropdown
                  optionArr={["BTC", "SOL"]}
                  dropdownClickHandler={() => {
                    setDropdownVisibility(false);
                  }}
                />
              )}
            </div>
          </div>
          <div className={classes["horizontal-separator"]}></div>
          <div className={classes["coin-row"]}>
            <p className={classes["title"]}>Buy</p>
            <div className={classes["value-dropdown-container"]}>
              <p>0.0081</p>

              <div onClick={btnClickHandler}>SOL</div>
            </div>
          </div>
        </div>
        <div className={classes["card-container"]}>
          <div className={classes["card-morphism"]}></div>
          <div className={classes["card-morphism"]}></div>
          <div className={classes["vertical-white-strip"]}></div>
          <Wallet color="white" />
          <p className={classes["card-title"]}>Balance</p>
          <p className={classes["card-balance"]}>$14,53,800.92</p>
          <p className={classes["card-date"]}>12/25</p>
        </div>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={classes["exchange-button"]}
      >
        Exchange
      </motion.button>
    </>
  );
};

export default Controller;
