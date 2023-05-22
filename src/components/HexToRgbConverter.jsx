import { useState } from "react";

export default function HexToRgbConverter() {
    const [hexColor, setHexColor] = useState('');
    const [rgbColor, setRgbColor] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const convertHexToRgb = (e) => {
      const hex = e.target.value;
      const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  
      if (hex.length === 7) {
        if (regex.test(hex)) {
          const result = regex.exec(hex);
          const red = parseInt(result[1], 16);
          const green = parseInt(result[2], 16);
          const blue = parseInt(result[3], 16);
  
          setErrorMessage('');
          setRgbColor(`rgb(${red}, ${green}, ${blue})`);
          document.body.style.backgroundColor = hex;
        } else {
          setErrorMessage('Ошибка: неверный формат HEX');
          setRgbColor('');
        }
      } else {
        setErrorMessage('');
        setRgbColor('');
      }
      setHexColor(hex);
    };
  
    return (
      <div>
        <form>
          <input
            type="text"
            id="hex"
            name="hex"
            placeholder="Введите HEX код цвета"
            value={hexColor}
            onChange={convertHexToRgb}
          />
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {rgbColor && <div className="rgb-color">{rgbColor}</div>}
      </div>
    );
  }