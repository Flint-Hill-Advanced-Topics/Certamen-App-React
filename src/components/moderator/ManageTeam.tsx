import React, { createContext, useContext, useMemo, useState } from "react";
import styles from "./ManageTeam.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Space from '../UI/Space';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Button from '../UI/Button';
import PlayerList from "./SubComponent/PlayerList";

const ManageTeam = (props: any) => {

  return (
    <div>
      <GameTitle />
      <Bubble className={styles.bubble}>

    
        <PlayerList />
      
      
        <Link to="ModeratorMain">
          <Button className={styles.button}>
            <a className={styles.next}>Next</a>
          </Button>
      </Link>

      <div className={styles.tag}>Moderator</div>
    
    </Bubble>
  </div>
  );
};

export default ManageTeam;