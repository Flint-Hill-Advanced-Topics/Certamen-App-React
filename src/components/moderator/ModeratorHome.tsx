import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from "./ModeratorHome.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Space from '../UI/Space';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const ModeratorHome = () => {
  const [code, setCode] = useState("loading...");
  
  return (
    <div>
      <GameTitle />
      <Bubble>
        <h2 className={`${styles.Code}`}>Code</h2>
        <Space> 
          <h3 className={`${styles.GCode}`} id="GCode">{code}</h3>
        </Space>
        <h2 className={`${styles.People}`}> People: </h2>
        <div className={`${styles.Number}`} id="Number"></div>
        <Link to="/Moderator/ManageTeam">
          <button className={`${styles.StartButton}`}>Start</button>
        </Link>
      </Bubble>
      <div className={`${styles.tag}`}> Moderator</div>
      
      <Outlet />
    </div>
  );
};

export default ModeratorHome;