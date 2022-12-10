import React from "react";
import styles from "./Button.module.css";

const Button = (props: any) => {
  return (
    <button className={`${props.className} ${styles.button}`} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;