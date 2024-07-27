import React, { useState, useEffect, useRef } from 'react';

const BreedSelector = ({ selectedBreed, setSelectedBreed, numImages, setNumImages, setImages }) => {
  const [breeds, setBreeds] = useState([]);
  const audioRef = useRef(new Audio('/fetch.mp3'));

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };
    fetchBreeds();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedBreed && numImages > 0 && numImages <= 100) {
      try {
        console.log(`Fetching ${numImages} images of breed: ${selectedBreed}`);
        const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${numImages}`);
        const data = await response.json();
        console.log('API Response:', data);
        setImages(data.message);

        audioRef.current.play().then(() => {
          console.log('Audio playing');
        }).catch(error => {
          console.error('Error playing audio:', error);
        });
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    } else {
      console.error('Invalid breed or number of images');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Select Breed:
        <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          <option value="">Select a breed / Sélectionner une race </option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </label>
      <label>
        Number of Images:
        <input
          type="number"
          value={numImages}
          min="1"
          max="100"
          onChange={(e) => setNumImages(Number(e.target.value))}
        />
      </label>
      <button type="submit">GO FETCH</button>
    </form>
  );
};

export default BreedSelector;
