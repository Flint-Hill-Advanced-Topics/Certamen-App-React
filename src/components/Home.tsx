import React from "react";
import styles from "./Home.module.css";
import GameTitle from "./common/GameTitle";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <GameTitle />
      <Link to="/Player/Enter">
        <div className={`${styles.Player}`}>
           <p>Player</p>
        </div>
      </Link>
      <div className={styles.logo}>
        <img src="../src/assets/SPQR5.png" />
      </div>
      <Link to="/Moderator/Enter">
        <div className={`${styles.Moderator}`}>
          <p>Moderator</p>
        </div>
      </Link>
    </>
  );
};

export default Home;