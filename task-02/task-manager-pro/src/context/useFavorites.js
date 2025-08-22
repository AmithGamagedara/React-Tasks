import { useContext } from "react";
import FavoritesContext from "./FavoriteContext"

export function useFavorites() {
  return useContext(FavoritesContext);
}