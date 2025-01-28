import ExchangeSection from "./ExchangeSection/ExchangeSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import Mainsection from "./Mainsection/Mainsection";
import PriceSection from "./PriceSection/PriceSection";
import classes from "./Homepage.module.scss";
import OpenAccount from "./OpenAccount/OpenAccount";
import FaqComponent from "./FaqComponent/FaqComponent";

const Homepage = () => {
  return (
    <div className={classes["homepage-container"]}>
      <Mainsection />
      <FeatureSection />
      <ExchangeSection />
      <PriceSection />
      <OpenAccount />
      <FaqComponent />
    </div>
  );
};

export default Homepage;
