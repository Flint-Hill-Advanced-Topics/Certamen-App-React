import React, { useState, useEffect, useRef } from 'react';
import Card from '../UI/Card';
import styles from "./SelectTeam.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Button from '../UI/Button';
import BackArrow from '../UI/BackArrow';
import { useNavigate } from 'react-router-dom';


const SelectTeam = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  
  const [selected, setSelected] = useState(null);

  const nameEnterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
    
  const onSubmitHandler = () => {
    if(name !== "" && selected !== null)
      navigate("/Player/Play");
  }

  const teamSelectHandler = (event: any) => {
    event.preventDefault();
    setSelected(event.target.id);
  }
  
  return (
      <>
        <BackArrow className={styles.Arrow}> </BackArrow>
        <GameTitle />
        <Bubble>
          <h2 className={styles.Name}> Name:</h2>
          <form>
	  	      <input className={styles.enterName} type="text" placeholder="Type Here" onBlur={nameEnterHandler} />
          </form>
          
          <h3 className={styles.Text}> Choose A Team:</h3>
          <div className={styles.Teams}>
            <div className={styles.row1}>
              <a id="A" className={`${styles.A} ${selected==='A' && styles.aactive}`} onClick={teamSelectHandler}>A</a> 
              <a id="B" className={`${styles.B} ${selected==='B' && styles.bactive}`} onClick={teamSelectHandler}>B</a>
            </div>
            <div className={styles.row2}>
              <a id="C" className={`${styles.C} ${selected==='C' && styles.cactive}`} onClick={teamSelectHandler}>C</a>
              <a id="D" className={`${styles.D} ${selected==='D' && styles.dactive}`} onClick={teamSelectHandler}>D</a>
            </div>
          </div>

          
          <Button onClick={onSubmitHandler}> Next </Button>
        </Bubble>
      </>
    );

};

export default SelectTeam;