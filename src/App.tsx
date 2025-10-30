import { useMemo } from 'react';
import { Canvas } from './canvases/Canvas';
import './App.css';

function App() {
  const opacity = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const opacityParam = params.get('opacity');
    if (opacityParam) {
      const parsed = parseFloat(opacityParam);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) {
        return parsed;
      }
    }
    return undefined;
  }, []);

  return (
    <div className="app" style={{ opacity }}>
      <Canvas />
    </div>
  );
}

export default App;
