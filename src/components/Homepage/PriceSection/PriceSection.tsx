"use client";

import { useEffect, useRef, useState } from "react";
import classes from "./PriceSection.module.scss";
import { motion } from "framer-motion";
import ManWithCoins from "../../../assets/images/man_with_coins.png";
import CircleDiamond from "@/assets/icons/CheckMark";
import CheckMark from "@/assets/icons/CheckMark";
import TabbedComponent from "@/components/TabbedComponent/TabbedComponent";

let cardArr = [
  {
    title: "free",
    price: 0,
    desc: "Simple yet powerful",
    features: ["feature 1", "feature 2", "feature 3", "feature 4", "feature 5"],
    btnText: "Get started for free",
  },
  {
    title: "Startup",
    price: 120,
    desc: "Built for growing companies",
    features: ["feature 1", "feature 2", "feature 3", "feature 4", "feature 5"],
    btnText: "Try for free",
  },
  {
    title: "Growth",
    price: 400,
    desc: "Fully tailored for your business",
    features: ["feature 1", "feature 2", "feature 3", "feature 4", "feature 5"],
    btnText: "Contact Us",
  },
  {
    title: "Enterprise",
    price: 1000,
    desc: "Fully tailored for your business",
    features: ["feature 1", "feature 2", "feature 3", "feature 4", "feature 5"],
    btnText: "Contact Us",
  },
];

const PriceSection = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(2);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [cardRef]);

  const cardClickHandler = (receivedIndex: number) => () => {
    console.log(receivedIndex);
    setActiveCardIndex(receivedIndex);
  };

  console.log(cardWidth);

  return (
    <div className={classes["price-section-container"]}>
      <p className={classes["section-heading"]}>
        <span>Pricing</span> on your terms
      </p>
      <p className={classes["section-desc"]}>
        Whichever plan you pick, it's free until you love our docs. <br />{" "}
        That's our promise
      </p>
      <div className={classes["tab-container-wrapper"]}>
        <TabbedComponent tabArr={["Annually", "Monthly"]} />
      </div>
      <div className={classes["cards-container-wrapper"]}>
        {/* <div className={classes["cards-container"]}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                ref={cardRef}
                className={
                  activeCardIndex === 0
                    ? `${classes["card-container"]} ${classes["card-1"]} ${classes["card-container-active"]}`
                    : `${classes["card-container"]} ${classes["card-1"]}`
                }
                onClick={cardClickHandler(0)}
              >
                <div className={classes["showcase-container"]}>
                  <p className={classes["free-text"]}>Free</p>
                  <p className={classes["price-text"]}>
                    <span>$0</span> /month
                  </p>
                  <p className={classes["showcase-desc"]}>
                    Simple and powerful
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={classes["gsf-btn"]}
                  >
                    Get started for free
                  </motion.button>
                </div>
                <div className={classes["horizontal-separator"]}></div>
                <div className={classes["feature-container"]}>
                  <p className={classes["feature-header"]}>
                    Get started today:
                  </p>
                  <ul className={classes["feature-list-container"]}>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Beautiful default styling
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Custom Domain
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      SEO-Optimization
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Auto-generated API docs
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Built-In component library
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      In-app search
                    </li>
                  </ul>
                </div>
              </div>
            ))}

          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                ref={cardRef}
                style={{ left: `calc(${cardWidth}px + 2rem + 3rem)` }}
                className={
                  activeCardIndex === 1
                    ? `${classes["card-container"]} ${classes["card-2"]} ${classes["card-container-active"]}`
                    : `${classes["card-container"]} ${classes["card-2"]}`
                }
                onClick={cardClickHandler(1)}
              >
                {" "}
                <div className={classes["showcase-container"]}>
                  <p className={classes["free-text"]}>Free</p>
                  <p className={classes["price-text"]}>
                    <span>$0</span> /month
                  </p>
                  <p className={classes["showcase-desc"]}>
                    Simple and powerful
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={classes["gsf-btn"]}
                  >
                    Get started for free
                  </motion.button>
                </div>
                <div className={classes["horizontal-separator"]}></div>
                <div className={classes["feature-container"]}>
                  <p className={classes["feature-header"]}>
                    Get started today:
                  </p>
                  <ul className={classes["feature-list-container"]}>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Beautiful default styling
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Custom Domain
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      SEO-Optimization
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Auto-generated API docs
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Built-In component library
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      In-app search
                    </li>
                  </ul>
                </div>
              </div>
            ))}

          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                ref={cardRef}
                className={
                  activeCardIndex === 2
                    ? `${classes["card-container"]} ${classes["card-3"]} ${classes["card-container-active"]}`
                    : `${classes["card-container"]} ${classes["card-3"]}`
                }
                onClick={cardClickHandler(2)}
              >
                {" "}
                <div className={classes["showcase-container"]}>
                  <p className={classes["free-text"]}>Free</p>
                  <p className={classes["price-text"]}>
                    <span>$0</span> /month
                  </p>
                  <p className={classes["showcase-desc"]}>
                    Simple and powerful
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={classes["gsf-btn"]}
                  >
                    Get started for free
                  </motion.button>
                </div>
                <div className={classes["horizontal-separator"]}></div>
                <div className={classes["feature-container"]}>
                  <p className={classes["feature-header"]}>
                    Get started today:
                  </p>
                  <ul className={classes["feature-list-container"]}>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Beautiful default styling
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Custom Domain
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      SEO-Optimization
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Auto-generated API docs
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      Built-In component library
                    </li>
                    <li>
                      <div className={classes["tick-mark"]}>
                        <CheckMark height="8" width="8" />
                      </div>
                      In-app search
                    </li>
                  </ul>
                </div>
              </div>
            ))}
        </div> */}

        {cardArr.map((cardEl, cardIndex) => (
          <div key={cardIndex} className={classes["card-container"]}>
            <div className={classes["card-morphism"]}></div>
            <div className={classes["card-morphism"]}></div>

            <div className={classes["showcase-container"]}>
              <p className={classes["free-text"]}>{cardEl.title}</p>
              <p className={classes["price-text"]}>
                <span>${cardEl.price}</span> /month
              </p>
              <p className={classes["showcase-desc"]}>{cardEl.desc}</p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={classes["gsf-btn"]}
                style={
                  cardIndex === 1
                    ? {
                        backgroundColor: "rgb(108, 255, 174)",
                        border: "none",
                        filter: "blur(0.1px)",
                        boxShadow: "0 0 15px rgba(108, 255, 174, 0.4)",
                        color: "black",
                        fontWeight: "600",
                      }
                    : {}
                }
              >
                {cardEl.btnText}
              </motion.button>
            </div>
            <div className={classes["horizontal-separator"]}></div>
            <div className={classes["feature-container"]}>
              <p className={classes["feature-header"]}>Get started today:</p>
              <ul className={classes["feature-list-container"]}>
                <li>
                  <div className={classes["tick-mark"]}>
                    <CheckMark height="8" width="8" />
                  </div>
                  Beautiful default styling
                </li>
                <li>
                  <div className={classes["tick-mark"]}>
                    <CheckMark height="8" width="8" />
                  </div>
                  Custom Domain
                </li>
                <li>
                  <div className={classes["tick-mark"]}>
                    <CheckMark height="8" width="8" />
                  </div>
                  SEO-Optimization
                </li>
                <li>
                  <div className={classes["tick-mark"]}>
                    <CheckMark height="8" width="8" />
                  </div>
                  Auto-generated API docs
                </li>
                <li>
                  <div className={classes["tick-mark"]}>
                    <CheckMark height="8" width="8" />
                  </div>
                  Built-In component library
                </li>
                <li>
                  <div className={classes["tick-mark"]}>
                    <CheckMark height="8" width="8" />
                  </div>
                  In-app search
                </li>
              </ul>
            </div>
          </div>
        ))}

        <div className={classes["circle-1"]}></div>
        <div className={classes["circle-2"]}></div>
      </div>
    </div>
  );
};

export default PriceSection;
