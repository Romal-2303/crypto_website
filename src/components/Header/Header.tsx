import classes from "./Header.module.scss";
import Logo from "@/assets/icons/Logo";
import NavPanel from "./NavPanel/NavPanel";
import UtilityBtns from "./UtilitBtns/UtilityBtns";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["logo-container"]}>
        <Logo />
        <p className={classes["logo-text"]}>Cryptify.</p>
      </div>
      <NavPanel />
      <UtilityBtns />
    </div>
  );
};

export default Header;
