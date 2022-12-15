import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ButtonPage from "./ButtonPage";

import PlayerEnter from "./PlayerEnter";
import SelectTeam from "./SelectTeam";

const PlayerRouter = () => {
  return (
    <Routes>
      <Route path={"Play"} element={<ButtonPage />} />
      <Route path={"Enter"} element={<PlayerEnter />} />
      <Route path={"SelectTeam"} element={<SelectTeam />} />
    </Routes>
  );
};

export default PlayerRouter;