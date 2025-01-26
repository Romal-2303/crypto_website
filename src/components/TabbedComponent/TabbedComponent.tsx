import { useEffect, useState } from "react";
import classes from "./TabbedComponent.module.scss";

interface TabbedComponentProps {
  tabArr: string[];
  defaultActiveTab?: number;
}

const TabbedComponent = ({
  tabArr,
  defaultActiveTab = 0,
}: TabbedComponentProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTab);

  useEffect(() => {
    setActiveTabIndex(defaultActiveTab);
  }, [defaultActiveTab]);

  const tabClickHandler = (receivedIndex: number) => () => {
    setActiveTabIndex(receivedIndex);
  };

  return (
    <div className={classes["tabbed-component-container"]}>
      {tabArr.map((tab, index) => (
        <div
          key={index}
          style={
            index === 0
              ? { borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }
              : index === tabArr.length - 1
              ? {
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                }
              : {}
          }
          className={
            index === activeTabIndex
              ? `${classes["tab-container"]} ${classes["active-tab-container"]}`
              : classes["tab-container"]
          }
          onClick={tabClickHandler(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabbedComponent;
