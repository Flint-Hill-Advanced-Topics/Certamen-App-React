import React from "react";
import styles from "./ManageTeam.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Space from '../UI/Space';
import BackArrow from '../UI/BackArrow';
import { Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom';
import Button from '../UI/Button';
import PlayerList from "./SubComponent/PlayerList";

const ManageTeam = (props: any) => {
  
    const navigate = useNavigate();
    const onClickHandler = () => {
      navigate("/Moderator/Home");
    }
    
    
  return (
    <>
      <BackArrow className={styles.Arrow}> </BackArrow>
      <GameTitle />
      <Bubble className={styles.bubble}>
        <PlayerList />
        <Button className={styles.button} onClick={onClickHandler}>
          <a className={styles.next}>Next</a>
        </Button>
        
          
      <div className={styles.tag}>Moderator</div>
    
    </Bubble>
    
  </>
  );
};

export default ManageTeam;