import React, { useContext, useMemo, useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = (props: any) => {
  const [collapsed, setCollapsed] = useState("1");

  const onClickHandler = (event: any) => {
    setCollapsed((prevState: any) => {
      if(prevState === "1") return "0";
      else return "1";
    });
  };
  
  return (
    <div>
      <div onClick={onClickHandler}>{props.title}</div>
      <div 
        className={`${props.className} ${styles.dropdown} ${collapsed === "1" && styles.collapsed}`} 
      >
        {props.children}
      </div>
    </div>
  );
};

export default Dropdown;