import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BoardPage from "./pages/BoardPage/BoardPage";
import BoardList from "./components/BoardList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/boards" replace />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boards/:id" element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
