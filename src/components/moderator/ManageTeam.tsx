import React from "react";
import styles from "./ManageTeam.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Space from '../UI/Space';
import { Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom';
import Button from '../UI/Button';
import PlayerList from "./SubComponent/PlayerList";

const ManageTeam = (props: any) => {
  
    const navigate = useNavigate();
    const onClickHandler = () => {
      navigate("/Moderator/ModeratorHome");
    }
  return (
    <>
      <GameTitle />
      <Bubble className={styles.bubble}>
        <PlayerList />
        <Link to="/Moderator/ModeratorHome">
          <Button className={styles.button} onClick={onClickHandler}>
            <a className={styles.next}>Next</a>
          </Button>
        </Link>

      <div className={styles.tag}>Moderator</div>
    
    </Bubble>
  </>
  );
};

export default ManageTeam;