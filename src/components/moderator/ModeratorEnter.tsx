import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from "./ModeratorEnter.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Space from '../UI/Space';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import GameManager from "../util/GameManager";

const ModeratorEnter = () => {
  const [code, setCode] = useState("loading...");

  const [manager] = useState(new GameManager());

  const onLoadHandler = () => {
    setCode(manager.getCode());
  };
  
  return (
    <div>
      <GameTitle />
      <Bubble>
        <h2 className={`${styles.Code}`}>Code</h2>
        <Space> 
          <h3 className={`${styles.GCode}`} id="GCode" onLoad={onLoadHandler}>{code}</h3>
        </Space>
        <h2 className={`${styles.People}`}> People: </h2>
        <div className={`${styles.Number}`} id="Number"></div>
        <Link to="/Moderator/ManageTeam">
          <button className={`${styles.StartButton}`}>Start</button>
        </Link>
      </Bubble>
      <div className={`${styles.tag}`}> Moderator</div>
      
      <Outlet/>
    </div>
  );
};

export default ModeratorEnter;