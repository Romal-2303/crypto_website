import XIcon from "@/assets/icons/XIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import classes from "./Footer.module.scss";
import Instagram from "@/assets/icons/Instagram";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import Logo from "@/assets/icons/Logo";
import SendIcon from "@/assets/icons/SendIcon";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["label-container"]}>
        <div className={classes["logo-container"]}>
          <Logo width="50px" height="50px" />{" "}
          <p className={classes["logo-text"]}>Cryptify.</p>
        </div>

        <div className={classes["address-container"]}>
          The City Tower Floor 26 letterkol Subdari Street 8 12345 ,
          Sewonderland , Indonasia
        </div>

        <div className={classes["icons-container"]}>
          <XIcon color="white" width="25" height="25" />
          <LinkedInIcon color="white" width="25" height="25" />
          <Instagram color="white" width="28" height="28" />
          <YoutubeIcon color="white" width="28" height="28" />
        </div>
      </div>
      <div className={classes["product-container"]}>
        <p style={{ color: "white" }}>Product</p>
        <p>Blockchain</p>
        <p>API</p>
        <p>Security</p>
        <p>Interest</p>
      </div>
      <div className={classes["company-conatiner"]}>
        <p style={{ color: "white" }}>Company</p>
        <p>About Us</p>
        <p>Contact</p>
        <p>Blog</p>
        <p>Carrer</p>
      </div>
      <div className={classes["support-conatiner"]}>
        <p style={{ color: "white" }}>Support</p>
        <p>Request Form</p>
        <p>FAQ</p>
        <p>Support 24/7</p>
        <p>Glossary</p>
      </div>
      <div className={classes["email-conatiner"]}>
        <div className={classes["heading"]}>
          {" "}
          Be the first to know about Cryto news everyday!
        </div>
        <div className={classes["email-input"]}>
          <input type="text" placeholder="Your Email.." />
          <div className={classes['button']}>
            <SendIcon />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
