import React, { useContext } from "react";
import ImagesContext from "../context/images";

function Header() {

    const { favorites } = useContext(ImagesContext);

  return (
    <header className="flex justify-between p-4 bg-gray-200 items-center">
      <h1 className="font-bold text-2xl">Image Search & Gallery</h1>
      <span>Favorites: {favorites.length}</span>
    </header>
  );
}

export default Header;
