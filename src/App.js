import logo from './logo.svg';
import './App.css';


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const yourDay = new Date().getDay();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello everyone!</h1>
        <p>How is your {weekday[yourDay]} going?</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
