import { createContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (taskId) => {
    if (!favorites.includes(taskId)) setFavorites([...favorites, taskId]);
  };

  const removeFavorite = (taskId) => {
    setFavorites(favorites.filter((id) => id !== taskId));
  };

  const toggleFavorite = (taskId) => {
    if (favorites.includes(taskId)) removeFavorite(taskId);
    else addFavorite(taskId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;