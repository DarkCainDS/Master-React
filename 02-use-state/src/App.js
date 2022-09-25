import logo from './logo.svg';
import './App.css';
import { FirstState } from './components/FirstState';
import { Ejercicio1} from './components/Ejercicio1';

function App() {

  const fecha = new Date();
  const actualYear= fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>El estado en React -Hook useState</h1>

        <FirstState />
       
        <div>
           <hr/>
          <Ejercicio1 year={actualYear} />
        </div>
        
      </header>
    </div>
  );
}

export default App;
