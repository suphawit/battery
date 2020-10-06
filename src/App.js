import React, { useState } from 'react';
import './App.scss';

function App() {
  const [battery, setBattery] = useState(60)
  const [batteryConsumption, setBatteryConsumption] = useState(20000)
  const [lifeCycle, setLifeCycle] = useState(100)
  return (
    <div className="App">
      <h1>Battery</h1>
      <div className="content">
          <div className="battery">
            <div className="pole"></div>
            <div className="pole"></div>
            <div className="meter" style={{ 
              backgroundImage: `linear-gradient(
                gray,
                gray ${100-battery}%,
                purple ${100-battery}%,
                purple`
              }}
            ></div>
          </div>
          <div className="info">
            <h2>Litium Battery</h2>
            <p><span>{battery}</span> %</p>
            <h4>Battery Remaining</h4>
            <p><span>{batteryConsumption}</span> kwh</p>
            <p><span><span>1</span> days</span> <span><span>4</span> hrs</span> <span><span>39</span> min</span></p>
            <div className="highLow">
              <div className="high">
                <h4>Highest</h4>
                <p><span>22245</span> kwh</p>
              </div>
              <div className="low">
                <h4>Lowest</h4>
                <p><span>1200</span> kwh</p>
              </div>
            </div>
            <div className="lifeCycle">
              <h4>Life Cycle</h4>
              <p><span>{lifeCycle}</span>/50000</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
