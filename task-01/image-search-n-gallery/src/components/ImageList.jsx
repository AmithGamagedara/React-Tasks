import React from 'react'
import ImageCard from './ImageCard'

function ImageList( {images} ) {
    const renderedImages = images.map((image) => {
        return <ImageCard image={image}/>
    })
  return (
    <div>{renderedImages}</div>
  )
}

export default ImageList