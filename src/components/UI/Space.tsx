import React from "react";
import styles from "./Space.module.css";

const Space = (props: any) => {
  return (
    <div className={`${styles.Space}`}>
      {props.children}
    </div>
  );
}

export default Space;