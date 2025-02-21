import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Add your CSS here

const ImageSlider = ({ images, intervalTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to move to the previous slide
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Auto-slide using useEffect and setInterval
  useEffect(() => {
    const interval = setInterval(goToNext, intervalTime);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, intervalTime]); // dependency array includes currentIndex to update on every slide change

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slide-image" />
      </div>
      <div className="left-arrow" onClick={goToPrevious}>
        ❮
      </div>
      <div className="right-arrow" onClick={goToNext}>
        ❯
      </div>
    </div>
  );
};

export default ImageSlider;
