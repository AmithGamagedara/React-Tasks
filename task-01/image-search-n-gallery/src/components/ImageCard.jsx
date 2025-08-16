import React, { useContext } from "react";
import ImagesContext from "../context/images";
import { GoHeart, GoHeartFill } from "react-icons/go";

function ImageCard({ image }) {

  const { favorites, addFavorite, removeFavorite } = useContext(ImagesContext);

  const isFavorite = favorites.some((fav) => fav.id === image.id);

  return (
    <div className="relative">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="mb-4 w-full rounded-lg shadow"
      />
      <button onClick={() => isFavorite ? removeFavorite(image.id) : addFavorite(image)} className={`absolute bottom-4 right-4 text-shadow-lg text-3xl ${isFavorite ? "text-red-500" : "text-white"}`}>
        {isFavorite? <GoHeartFill /> : <GoHeart />}
      </button>
    </div>
  );
}

export default ImageCard;
