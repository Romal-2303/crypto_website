"use client";

import { useEffect, useState } from "react";
import classes from "./PageProgress.module.scss";

const PageProgress = () => {
  const [pageHeight, setPageHeight] = useState(10);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    setPageHeight(document.body.scrollHeight);

    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; // Current scroll position
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // Total scrollable area

      const percentage = (scrollTop / scrollHeight) * 100;

      if (percentage === 100) {
        setScrollPercentage(99);
      } else {
        setScrollPercentage(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  console.log(scrollPercentage);

  return (
    <div className={classes["progress-bar"]} style={{ height: pageHeight }}>
      <div
        className={classes["filled-bar"]}
        style={{ height: `${scrollPercentage}%` }}
      >
        <div className={classes["end-block"]}></div>
      </div>
    </div>
  );
};

export default PageProgress;
