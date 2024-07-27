import React, { useState, useEffect, useRef } from 'react';
import BreedSelector from './components/BreedSelector';
import ImageGallery from './components/ImageGallery';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'; 

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);
  const audioRef = useRef(new Audio('/StockTune-Sunrise Serenade In Paris_1722043199.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.loop = true; // Set the audio to loop
  }, []);

  const handlePlayPauseAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error('Error playing audio:', error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <Header />
      <button className='music' onClick={handlePlayPauseAudio}>
        {isPlaying ? 'Pause Background Music' : 'Play Background Music'}
      </button>
      <BreedSelector
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        numImages={numImages}
        setNumImages={setNumImages}
        setImages={setImages}
      />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default App;

