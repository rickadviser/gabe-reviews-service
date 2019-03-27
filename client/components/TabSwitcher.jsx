import React from "react";
import styles from "./css/tabSwitcher.css";

const TabSwitcher = ({ update }) => {
  return (
    <div className={styles.tabswitch__wrapper}>
      <div className={styles.tabswitch__tab} onClick={() => update("reviews")}>
        Reviews
      </div>
      <div className={styles.tabswitch__tab} onClick={() => update("photos")}>
        Photos
      </div>
      <div className={styles.tabswitch__tab} onClick={() => update("qa")}>
        Q {"&"} A
      </div>
      <div
        className={styles.tabswitch__tab}
        onClick={() => update("room_tips")}
      >
        Room Tips
      </div>
    </div>
  );
};

export default TabSwitcher;
