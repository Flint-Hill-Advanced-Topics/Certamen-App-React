import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import styles from "./ModeratorHome.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import MBubble from '../UI/MBubble';
import Space from '../UI/Space';
import Button from "../UI/Button";
import BackArrow from '../UI/BackArrow';
import { useNavigate } from 'react-router-dom';

const ModeratorHome = () => {
  const [code, setCode] = useState("loading...");
  
    const navigate = useNavigate();
    const onClickEnd = () => {
        navigate("/end");
    };
    
  return (
    <>
      <BackArrow className={styles.Arrow}> </BackArrow>
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

        <Button className={styles.RefreshButton}> 
 <img src="../src/assets/refresh.png"></img></Button>

          
        <Button className={styles.e} onClick={onClickEnd}>
          <a className={styles.end}>End</a>
        </Button>
        
      </Bubble>
      
      
      
      <div className={styles.Tag}> Moderator</div>
    </>
  );
};

export default ModeratorHome;