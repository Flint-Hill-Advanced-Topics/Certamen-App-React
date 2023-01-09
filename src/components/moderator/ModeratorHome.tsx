import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import styles from "./ModeratorHome.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Space from '../UI/Space';

const ModeratorHome = () => {
  const [code, setCode] = useState("loading...");
  
  return (
    <>
      <GameTitle />
      <Bubble>
        
        
      </Bubble>
      <div className={`${styles.tag}`}> Moderator</div>
    </>
  );
};

export default ModeratorHome;