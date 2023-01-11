import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import styles from "./ModeratorHome.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import MBubble from '../UI/MBubble';
import Space from '../UI/Space';
import Button from "../UI/Button";

const ModeratorHome = () => {
  const [code, setCode] = useState("loading...");
  
  return (
    <>
      <GameTitle />
      <Bubble className={styles.Bubble}>
          <div className={styles.First}> First </div>
          <MBubble></MBubble>
          <div className={styles.Second}> Second </div>
          <MBubble></MBubble>
          <div className={styles.Third}> Third </div>
          <MBubble></MBubble>
          <div className={styles.Fourth}> Fourth </div>
          <MBubble></MBubble>

        <Button className={styles.Button}> </Button>
          
          
      </Bubble>

      <div className={styles.Buttons}>
        
      </div>
      <div className={styles.tag}> Moderator</div>
    </>
  );
};

export default ModeratorHome;