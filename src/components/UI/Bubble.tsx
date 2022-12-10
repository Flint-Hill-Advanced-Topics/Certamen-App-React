import React from "react";
import styles from "./Bubble.module.css";

const Bubble = (props: any) => {
  return (
    <div className={`${styles.Bubble} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Bubble;