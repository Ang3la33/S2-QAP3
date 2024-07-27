import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt="dog" className="dog-image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
