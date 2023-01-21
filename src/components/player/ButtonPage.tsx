import React, { useMemo, useState } from "react"
import GameTitle from "../common/GameTitle"
import Button from "../UI/Button";
import styles from "./ButtonPage.module.css";
import db from "../Config.js";
import BackArrow from '../UI/BackArrow';
import {useNavigate} from "react-router-dom";

const ButtonPage = (props: any) => {

  const [lockout, setLockout] = useState(false);
  
  const onClickHandler = () => {
    if(!lockout){
      let audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
      audio.play();
      setLockout(true);
    }
  };

  return (
    <>
      <BackArrow className={styles.Arrow}> </BackArrow>
      <GameTitle />
        <Button className={styles.button} type="button" onClick={onClickHandler}>
      </Button>

      
    </>
    
  );
};

export default ButtonPage;