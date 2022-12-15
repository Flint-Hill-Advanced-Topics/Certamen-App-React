import React from "react"
import GameTitle from "../common/GameTitle"
import Button from "../UI/Button";

const ButtonPage = (props: any) => {

  return (
    <div>
      <GameTitle />
      <Button type="button">
        <img src="https://www.pngarts.com/files/3/Button-Transparent-Background-PNG.png" alt="buttonpng" />
      </Button>
    </div>
  );
};

export default ButtonPage;