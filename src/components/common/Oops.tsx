import React from "react";
import GameTitle from "./GameTitle";
import { Link } from "react-router-dom";
import styles from "./Oops.module.css";
import Bubble from "../UI/Bubble";

const Oops = () => {
    return (
      <Bubble>
        <GameTitle />
        
          <h2 className="Oops"> Oops!</h2>
          <p>The code you entered doesn't seem to exist.</p>
          <Link to="/Player/Enter">
            <a className="TryAgain">Try Again</a>
          </Link>
          
          <div className="divider" />
          <Link to="Home">
              <a className="Home"> Home</a>
          </Link>
      
      </Bubble>
  );
};

export default Oops; 
