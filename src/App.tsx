import { useState } from 'react';
import { Canvas } from './canvases/Canvas';
import './App.css';

function App() {
  const params = new URLSearchParams(window.location.search);
  const opacity = params.get('opacity') || undefined;
  const [showStartMessage, setShowStartMessage] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    if (showStartMessage) {
      setFadeOut(true);
      setTimeout(() => setShowStartMessage(false), 300);
    }
  };

  return (
    <div className="app" style={{ opacity }} onClick={handleClick} onTouchStart={handleClick}>
      <Canvas />
      {showStartMessage && (
        <div className={`start-message ${fadeOut ? 'fade-out' : 'blink'}`}>
          Click to Start
        </div>
      )}
    </div>
  );
}

export default App;
