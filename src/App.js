import React, { useState } from 'react';
import './App.css';

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
