import React, { useState, useEffect, useContext } from 'react';
import Card from '../UI/Card';
import styles from "./ModeratorEnter.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Button from '../UI/Button';
import BackArrow from '../UI/BackArrow';
import Space from '../UI/Space';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import GameManager from "../util/GameManager";
import GameContext from '../store/GameProvider';

const ModeratorEnter = () => {

  const game = useContext(GameContext);
  
  const [code, setCode] = useState(game.manager.getCode());
  
  return (
    <>
      <BackArrow className={styles.Arrow}> </BackArrow>
      <GameTitle />
      <Bubble>
        <h2 className={`${styles.Code}`}>Code</h2>
        <Space> 
          <h3 className={`${styles.GCode}`} id="GCode">{game.code}</h3>
        </Space>
        <Button className={styles.Regenerate} onClick={game.onRegenerateCode}>
          Regenerate
        </Button>
        <h2 className={`${styles.People}`}> People: </h2>
        <div className={`${styles.Number}`} id="Number"></div>
        <Link to="/Moderator/ManageTeam">
          <Button className={styles.Start}>
            Start
          </Button>
        </Link>
        
      </Bubble>
      <div className={`${styles.tag}`}> Moderator</div>
      
      <Outlet/>
    </>
  );
};

export default ModeratorEnter;