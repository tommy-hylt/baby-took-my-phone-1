import { Canvas } from './canvases/Canvas';
import './App.css';

function App() {
  const params = new URLSearchParams(window.location.search);
  const opacity = params.get('opacity') || undefined;

  return (
    <div className="app" style={{ opacity }}>
      <Canvas />
    </div>
  );
}

export default App;
