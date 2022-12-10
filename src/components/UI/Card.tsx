import React from "react";
import styles from "./Card.module.css";

const Card = (props: any) => {
  const classes = "card " + props.className;
  return (
    <div className={`${classes} ${styles.card}`} >
      {props.children}
    </div>
  );
}

export default Card;