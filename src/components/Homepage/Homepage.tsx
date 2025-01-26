import ExchangeSection from "./ExchangeSection/ExchangeSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import Mainsection from "./Mainsection/Mainsection";
import PriceSection from "./PriceSection/PriceSection";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <Mainsection />
      <FeatureSection />
      <ExchangeSection />
      <PriceSection />
    </div>
  );
};

export default Homepage;
