"use client";

import Home from "@/assets/icons/Home";
import classes from "./NavPanel.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

let navLinkArr = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Technology", icon: Home, path: "/" },
  { title: "Features", icon: Home, path: "/" },
  { title: "Pricing", icon: Home, path: "/" },
  { title: "Careers", icon: Home, path: "/" },
];

const NavPanel = () => {
  const [selectedNavLink, setSelectedNavLink] = useState<string>("");

  useEffect(() => {
    const findPath =
      navLinkArr.find((el) => el.path === window.location.pathname) ??
      navLinkArr[0];

    setSelectedNavLink(findPath?.title);
  }, []);

  const linkClickHandler = (receivedValue: string) => () => {
    setSelectedNavLink(receivedValue);
  };

  const reviewClickHandler = () => {
    const section = document.getElementById("testimony");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
    }
  };

  return (
    <div className={classes["navigation-panel"]}>
      {navLinkArr.map((el, index) => (
        <Link
          key={index}
          href={el.path}
          className={
            selectedNavLink === el.title
              ? `${classes["link-container"]} ${classes["link-container-active"]}`
              : classes["link-container"]
          }
          onClick={linkClickHandler(el.title)}
        >
          {el.title}
        </Link>
      ))}
    </div>
  );
};

export default NavPanel;
