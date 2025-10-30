import { useEffect } from 'react';
import { Canvas } from './canvases/Canvas';
import './App.css';

function App() {
  // Request fullscreen on mount
  useEffect(() => {
    const requestFullscreen = async () => {
      try {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          await elem.requestFullscreen();
        }
      } catch (err) {
        console.log('Fullscreen request failed:', err);
      }
    };

    // Try to enter fullscreen on first user interaction
    const enterFullscreen = () => {
      requestFullscreen();
      document.removeEventListener('touchstart', enterFullscreen);
      document.removeEventListener('click', enterFullscreen);
    };

    document.addEventListener('touchstart', enterFullscreen);
    document.addEventListener('click', enterFullscreen);

    return () => {
      document.removeEventListener('touchstart', enterFullscreen);
      document.removeEventListener('click', enterFullscreen);
    };
  }, []);

  return <Canvas />;
}

export default App;
