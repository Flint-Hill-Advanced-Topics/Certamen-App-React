import React, { useMemo } from "react"
import GameTitle from "../common/GameTitle"
import Button from "../UI/Button";
import styles from "./ButtonPage.module.css";
import db from "../Config.js";

const ButtonPage = (props: any) => {

  const onClickHandler = () => {
      let audio = new Audio(
'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
      audio.play();
  };

  return (
    <>
      <GameTitle />
        <Button className={styles.button} type="button" onClick={onClickHandler}>
      </Button>
        <Button className={styles.bbutton} onClick={onClickHandler}>
          <a className={styles.back}>Back</a>
        </Button>
    </>
  );
};

export default ButtonPage;