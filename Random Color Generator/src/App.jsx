import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [colorSystem, setcolorSystem] = useState('Hexagonal');

  function getRandomHexaColor() {
    let colorValue = '#';
    const hexDigits = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      colorValue += hexDigits[Math.floor(Math.random() * 16)];
    }
    setColor(colorValue);
  }

  function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="button-container">
        <button onClick={() => setcolorSystem('Hexagonal')}>Hexagonal</button>
        <button onClick={() => setcolorSystem('RGB')}>RGB</button>
        <button
          onClick={
            colorSystem === 'Hexagonal' ? getRandomHexaColor : getRandomRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="color-display">
        <h2>Color System : {colorSystem}</h2>
        <p className="color-value">{color}</p>
      </div>
    </div>
  );
}

export default App;
