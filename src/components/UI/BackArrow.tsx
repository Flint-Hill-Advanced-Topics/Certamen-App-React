import React  from "react";
import styles from "./BackArrow.module.css";
import {useNavigate} from "react-router-dom";
import Button from "../UI/Button";

const BackArrow = (props: any) => {
    const navigate = useNavigate();
    return (
    <button 
      className={`${props.className} ${styles.button}`} 
      type={props.type}
      form={props.form}
      onClick={() => navigate(-1)}
    >
      <img src="../src/assets/arrow2.png"></img>
    </button>
  );
};

export default BackArrow; 