import React from "react";
import ImageCard from "./ImageCard";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {renderedImages}
    </div>
  );
}

export default ImageList;
