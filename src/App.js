import './App.css';
import TitleCV from './components/Title/TitleCV'
import Formations from './components/Formations/Formations';
import Experiences from './components/Experiences/Experiences';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <TitleCV firstName="Pierrick" lastName="Boucharlat"/>
        <Formations />
        <Experiences />        
      </header>
    </div>
  );
}

export default App;
