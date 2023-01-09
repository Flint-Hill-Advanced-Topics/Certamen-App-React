import React  from "react";
import styles from "./BackArrow.module.css";

const BackArrow = (props: any) => {
  return (
    <button>
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

export default BackArrow;