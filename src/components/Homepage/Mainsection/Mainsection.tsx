import CurvedStarIcon from "@/assets/icons/CurvedStarIcon";
import classes from "./Mainsection.module.scss";
import NumberSection from "./NumberSection/NumberSection";
import MouseIcon from "../../../assets/icons/MouseIcon";

const Mainsection = () => {
  return (
    <>
      <div className={classes["gradient-container"]}></div>
      <div className={classes["main-section-container"]}>
        <div className={classes["trusted-platform-tag"]}>
          <CurvedStarIcon /> Trusted Platform
        </div>
        <p className={classes["mainsection-header"]}>
          Revoluionize Your Transactions
          <br />
          With Secure Blockchain Solutions
        </p>

        <p className={classes["mainsection-desc"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae
          dolores beatae non ipsa saepe nobis. Quasi voluptate doloribus
          deserunt! Lorem ipsum ipisicing elit. Quas ab cumque aspernatur?
        </p>

        {/* <GetStartedBtn /> */}

        <NumberSection />

        <div className={classes["scroll-down-container"]}>
          <MouseIcon />
          <p className={classes["scroll-text"]}>Scroll Down</p>
        </div>

        <div className={classes["rocket-container-1"]}>
          <div className={classes["line-1"]}></div>
          <div className={classes["dot-1"]}></div>
        </div>

        <div className={classes["rocket-container-2"]}>
          <div className={classes["line-1"]}></div>
          <div className={classes["dot-1"]}></div>
        </div>

        <div className={classes["rocket-container-3"]}>
          <div className={classes["line-1"]}></div>
          <div className={classes["dot-1"]}></div>
        </div>
      </div>

      <div className={classes["dots-block-container"]}>
        {Array(20)
          .fill(0)
          .map((el, index) => (
            <div key={index} className={classes["dot"]}></div>
          ))}
      </div>
    </>
  );
};

export default Mainsection;
