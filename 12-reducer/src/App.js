import logo from './logo.svg';
import './App.css';
import { Juegos } from './components/Juegos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Juegos />
      </header>
    </div>
  );
}

export default App;
