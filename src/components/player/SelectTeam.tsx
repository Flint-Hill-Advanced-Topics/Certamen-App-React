import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from "./SelectTeam.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import { Routes, Route, Link, Outlet } from 'react-router-dom';


const SelectTeam = () => {

  const [selected, setSelected] = useState("");
  const onSubmitHandler = () => {
    
  }

  const onClickHandler = (event: any) => {
    event.preventDefault();
    setSelected(event.target.id);
  }
  
  return (
      <>
        <GameTitle />
        <Bubble>
          <h2 className={styles.Name}> Name:</h2>
          <form onSubmit={onSubmitHandler}>
	  	      <input className={styles.enterName} type="text" placeholder="Type Here"></input> 
          </form>
          
          <h3 className={styles.Text}> Choose A Team:</h3>
          <div className={styles.Teams}>
            <div className={styles.row1}>
              <a id="A" className={`${styles.A} ${selected==='A' && styles.aactive}`} onClick={onClickHandler}>A</a> 
              <a id="B" className={`${styles.B} ${selected==='B' && styles.bactive}`} onClick={onClickHandler}>B</a>
            </div>
            <div className={styles.row2}>
              <a id="C" className={`${styles.C} ${selected==='C' && styles.cactive}`} onClick={onClickHandler}>C</a>
              <a id="D" className={`${styles.D} ${selected==='D' && styles.dactive}`} onClick={onClickHandler}>D</a>
            </div>
          </div>

          
          <button type="button" className={styles.Next}> Next </button>
        </Bubble>
      </>
    );

};

export default SelectTeam;