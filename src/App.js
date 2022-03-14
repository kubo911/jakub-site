
import logo from './logo.svg';
import './App.css';
import backVid from "./background-vid.mp4";
import React, {useState} from "react";



const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const yourDay = new Date().getDay();

function App() {
/////////////////timeFunction
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  function getTime() {
    setTime(new Date().toLocaleTimeString());  }
  setInterval(getTime, 1000);
////////////////

  return (
    <div className="App">
      <body class="viewport-body"> 
        <p>How is <b>YOUR</b> {weekday[yourDay]}?</p>
        <p>What are you doing <b>RIGHT NOW</b>?</p>
        <p>{time}</p>

        <img src={logo} className="App-logo" alt="logo" />
        <video autoPlay loop muted>         
          <source src={backVid} type="video/mp4" />
        </video>
      </body>
    </div>
  );
}

export default App;
