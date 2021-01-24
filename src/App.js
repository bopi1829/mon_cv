import './App.css';
import logo from './logo.svg';
import TitleCV from './components/Title/TitleCV'
import Formations from './components/Formations/Formations';
import Experiences from './components/Experiences/Experiences';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <TitleCV firstName="Pierrick" lastName="Boucharlat" />
        <Formations />
        <Experiences />
  
        <img src = {logo} className = "App-logo" alt = "logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className = "App-link"
          href = "https://reactjs.org"
          target = "_blank"
          rel = "noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
