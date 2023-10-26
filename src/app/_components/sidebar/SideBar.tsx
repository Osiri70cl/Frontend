import React from "react";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.buttons}>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className={styles.copyright}>Copiryght, SportSee 2020</div>
      </div>
    </div>
  );
};

export default SideBar;
