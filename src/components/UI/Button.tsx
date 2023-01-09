import React from "react";
import styles from "./Button.module.css";

const Button = (props: any) => {
  return (
    <button 
      className={`${props.className} ${styles.button}`} 
      type={props.type}
      form={props.form}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </button>
  );
}

export default Button;