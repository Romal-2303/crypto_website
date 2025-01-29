import React, { useState } from "react";
import styles from "./Accordian.module.scss";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  // Allow null in the state type
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to first item open

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={item.id} className={styles["accordion-item"]}>
          <div
            className={styles["accordion-header"]}
            onClick={() => toggleAccordion(index)}
          >
            <span className={styles.title}>{item.title}</span>
            <span
              className={`${styles.icon} ${
                activeIndex === index ? styles.open : ""
              }`}
            >
              ▼
            </span>
          </div>
          <div
            className={`${styles["accordion-content"]} ${
              activeIndex === index ? styles.open : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
