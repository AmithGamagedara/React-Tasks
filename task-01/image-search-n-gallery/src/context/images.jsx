import { createContext, useState } from "react";

const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);



  const addFavorite = (image) => {
    if (!favorites.find((fav) => fav.id === image.id )) {
      setFavorites ([...favorites, image]);
    }

  }

  const removeFavorite = (id) => {
setFavorites(favorites.filter((fav) => fav.id !== id ));
  }

  return (
    <ImagesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesContext;
