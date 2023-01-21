import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import styles from "./PlayerEnter.module.css";
import GameTitle from '../common/GameTitle';
import Button from '../UI/Button'
import Bubble from '../UI/Bubble';
import BackArrow from '../UI/BackArrow';
import { useNavigate } from 'react-router-dom';


const PlayerEnter = () => {

  const navigate = useNavigate();

  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if(isVerified === true) {
      navigate("/Player/SelectTeam");
    }
  }, [isVerified]);
  
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    navigate("/Player/SelectTeam");
    /*
    if(someLogic) setIsVerified(true);
    else setIsVerified(false);
    */
  };
  
  return (
    <>
      <BackArrow className={styles.Arrow}> </BackArrow>
      <GameTitle />
      <Bubble>
        <div className={styles.Title}> Enter Your Game Code! </div>
	  	  <div className={styles.Code}> Code:</div>
        <form onSubmit={onSubmitHandler}>
	  	    <input className={styles.EnterCode} type="text" placeholder="Type Here"></input>

            <Button type="submit" className={styles.Join}>
            Join
            </Button>
          
        </form>
      </Bubble>
    </>
  );
};

export default PlayerEnter;