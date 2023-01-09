import React, { useState, useEffect } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = (props: any) => {
  const [collapsed, setCollapsed] = useState(true);

  const onClickHandler = (event: any) => {
    setCollapsed((prevState: any) => !prevState);
  };
  
  return (
    <div className={props.className}>
      <div className={`${props.titleStyle}`} onClick={onClickHandler}>
        {props.title}
      </div>
      <div 
        className={`${props.itemStyle} ${styles.dropdown} ${collapsed && styles.collapsed}`} 
      >
        {props.children}
      </div>
    </div>
  );
};

export default Dropdown;