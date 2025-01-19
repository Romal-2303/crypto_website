import ExchangeSection from "./ExchangeSection/ExchangeSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import classes from "./Homepage.module.scss";
import Mainsection from "./Mainsection/Mainsection";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <Mainsection />
      <FeatureSection />
      <ExchangeSection />
    </div>
  );
};

export default Homepage;
