import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./routes/routes";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesPage />
    </BrowserRouter>
  );
}

export default App;
