import React from "react";
import styles from "./EndScreen.moudle.css";
import { Link } from "react-router-dom";
import GameTitle from "./common/GameTitle";

const EndScreen = () => {
    return (
      <div>
        <GameTitle />
        <div className={styles.ended}>
          <h1> The Game Has Ended </h1>
        </div>
        <Link to="/">
          <div className={styles.homeButton}>
            <a className={styles.homeB} href="home.html"> Home </a>
          </div>
        </Link>
        <div className={styles.goBack}>
          <h1> Tap to Go Back Home </h1>
        </div>
        <div className={styles.tag}> Moderator </div>
      </div>
    );
  };