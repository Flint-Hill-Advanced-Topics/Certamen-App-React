import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ModeratorEnter from "./ModeratorEnter";
import ModeratorHome from "./ModeratorHome";
import ManageTeam from "./ManageTeam";
import { GameProvider } from "../store/GameProvider";

const ModeratorRouter = (props: any) => {
  return (
    <GameProvider>
      <Routes>
        <Route path="Enter" element={<ModeratorEnter />} />
        <Route path="ManageTeam" element={<ManageTeam />} />
        <Route path="Home" element={<ModeratorHome />} />
      </Routes>
    </GameProvider>
    
  );
};

export default ModeratorRouter;