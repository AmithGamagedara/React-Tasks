import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./routes/routes";
import Header from "./components/Header/Header";
import { FavoritesProvider } from "./context/FavoriteContext";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Header />
        <RoutesPage />
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
