import Controller from "./Controller/Controller";
import classes from "./ExchangeSection.module.scss";

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
        <div className={classes["right-section"]}></div>
      </div>
    </div>
  );
};

export default ExchangeSection;
