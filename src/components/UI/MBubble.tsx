import React from "react";
import styles from "./MBubble.module.css";

const MBubble = (props: any) => {
  return (
    <div className={`${styles.MBubble} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default MBubble;