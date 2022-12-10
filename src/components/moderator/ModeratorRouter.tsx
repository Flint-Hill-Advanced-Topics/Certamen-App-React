import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ModeratorEnter from "./ModeratorEnter";
import ModeratorHome from "./ModeratorHome";
import ManageTeam from "./ManageTeam";

const ModeratorRouter = (props: any) => {
  return (
    <Routes>
      <Route path="Enter" element={<ModeratorEnter />} />
      <Route path="ManageTeam" element={<ManageTeam />} />
      <Route path="Home" element={<ModeratorHome />} />
    </Routes>
  );
};

export default ModeratorRouter;