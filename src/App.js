import logo from './logo.svg';
import './App.css';
import backVid from "./background-vid.mp4";


const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const yourDay = new Date().getDay();

function App() {
  return (
    <div className="App">
      <header class="viewport-header"> 
      <h1>Hello!</h1>
        <p>How is <b>YOUR</b> {weekday[yourDay]}?</p>
        <img src={logo} className="App-logo" alt="logo" />
        <video autoPlay loop muted>         
          <source src={backVid} type="video/mp4" />
        </video>
      </header>
    </div>
  );
}

export default App;
