import React from 'react';
import Card from '../UI/Card';
import styles from "./PlayerEnter.module.css";
import GameTitle from '../common/GameTitle';
import Button from '../UI/Button';
import Bubble from '../UI/Bubble';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

const PlayerEnter = () => {

  const navigate = useNavigate();
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    navigate("/Player/SelectTeam");
  };
  
  return (
    <div>
      <GameTitle />
      <Bubble>
        <div className={styles.Title}> Enter Your Game Code! </div>
	  	  <div className={styles.Code}> Code:</div>
        <form onSubmit={onSubmitHandler}>
	  	    <input className={styles.EnterCode} type="text" placeholder="Type Here"></input>
          
          <Button className={`${styles.Join}`}>Join</Button>
        </form>
      </Bubble>
    </div>
  );
};

export default PlayerEnter;