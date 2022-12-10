import React, { useContext, useMemo, useState } from "react";
import styles from "./ManageTeam.module.css";
import GameTitle from '../common/GameTitle';
import Bubble from '../UI/Bubble';
import Space from '../UI/Space';
import Dropdown from "../UI/Dropdown";
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Button from '../UI/Button';

const ManageTeam = (props: any) => {
  const playerList = [
    {
      team: "Team 1",
      players: ["Player 1", "Player 2", "Player 3", "Player 4"],
    },
    {
      team: "Team 2",
      players: ["Player 5", "Player 6", "Player 7", "Player 8"],
    },
  ];
  
  return (
    <div>
    <GameTitle />
    <Bubble>

      {
        playerList.map(
          (el: any) => (
            <Dropdown key={el.team} title={el.team}>
              {
                el.players.map(
                  (player: any) => (
                    <Dropdown key={player} title={player}>
                      Extra Dropdowns to select team
                    </Dropdown>
                  )
                )
              }
            </Dropdown>
          )
        )
      }
      
      <Link to="ModeratorMain">
        <Button>
          <a className="next">Next</a>
        </Button>
      </Link>

      <div className={styles.tag}>Moderator</div>
    
    </Bubble>
    </div>
  );
};

export default ManageTeam;