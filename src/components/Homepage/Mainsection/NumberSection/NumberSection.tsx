import CounterAnimation from "@/components/CounterAnimation/CounterAnimation";
import classes from "./NumberSection.module.scss";

const NumberSection = () => {
  return (
    <div className={classes["number-section-container"]}>
      <div className={classes["user-container"]}>
        <p className={classes["number"]}>1M+</p>
        <p className={classes["desc"]}>Total user</p>
      </div>
      <div className={classes["coverage-container"]}>
        <p className={classes["number"]}>360M$</p>
        <p className={classes["desc"]}>Coverage</p>
      </div>
      <div className={classes["interest-container"]}>
        <p className={classes["number"]}>8.5%</p>
        <p className={classes["desc"]}>Interest</p>
      </div>
    </div>
  );
};

export default NumberSection;
