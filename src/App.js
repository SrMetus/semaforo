import React, { useState } from 'react';
import './App.css';

/*function App() {
  const [redLight, setLightRed] = useState(false);
  const [yellowLight, setLightYellow] = useState(false);
  const [greenLight, setLightGreen] = useState(false);

  const red = () => {
    setLightRed(!redLight);
    setLightYellow(false);
    setLightGreen(false);
  };

  const yellow = () => {
    setLightYellow(!yellowLight);
    setLightRed(false);
    setLightGreen(false);
  };

  const green = () => {
    setLightGreen(!greenLight);
    setLightRed(false);
    setLightYellow(false);
  };

  return (
    <div className="container">
      <div className="pole"></div>
      <div className="shape">
        <div onClick={red} className={`light red ${redLight ? 'on' : ''}`}></div>
        <div onClick={yellow} className={`light yellow ${yellowLight ? 'on' : ''}`}></div>
        <div onClick={green} className={`light green ${greenLight ? 'on' : ''}`}></div>
      </div>
    </div>
  );
};

export default App;*/

const  App = () => {
  const [light, setLight] = useState(false);

  return (
    <div className="container">
      <div className="pole"></div>
      <div className="shape">
        <div onClick={() => setLight("red")} 
          className={light === "red" ? "light red on" : "light red"}>
        </div>
        <div onClick={() => setLight("yellow")}
          className={light === "yellow" ? "light yellow on" : "light yellow"}> 
        </div>
        <div onClick={() => setLight("green")}
          className={light === "green" ? "light green on" : "light green"}>
        </div>
      </div>
    </div>
  );
};

export default App;
