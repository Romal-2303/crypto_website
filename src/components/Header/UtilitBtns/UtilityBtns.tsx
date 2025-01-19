"use client";

import classes from "./UtilityBtns.module.scss";
import { motion } from "framer-motion";

const UtilityBtns = () => {
  return (
    <div className={classes["signin-sigup-btn-container"]}>
      <button className={classes["sign-in-btn"]}>Sign In</button>
      <motion.button
        whileTap={{ scale: 0.9, rotate: 1 }}
        className={classes["sign-up-btn"]}
      >
        Create Account
      </motion.button>
    </div>
  );
};

export default UtilityBtns;
