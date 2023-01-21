import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import PlayerRouter from "./components/player/PlayerRouter";
import ModeratorRouter from "./components/moderator/ModeratorRouter";
import EndScreen from "./components/EndScreen";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Player/*" element={<PlayerRouter />} />
          <Route path="/Moderator/*" element={<ModeratorRouter />} />
          <Route path="/end" element={<EndScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
