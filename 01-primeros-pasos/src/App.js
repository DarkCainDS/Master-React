import logo from './logo.svg';
import './App.css';
import FirstComponente from './FirstComponent';
import  {SecondComponent}  from './SecondComponent';
import {ThirdComponent } from './ThirdComponent';
import { FourthComponent } from './FourthComponent';

function App() {

  const juegos = {
    nintendo:"Smash bros ultimate",
    playstation:"Final Fantasy",
    xbox:"Gears of Wars"
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Master en React
        </p>
        <div className='componentes'>

        
        <FirstComponente />
        <hr/>
        <SecondComponent />
        <hr/>
        <ThirdComponent 
        nombre="Diego" 
        apellido="Romero"
        juegosFav= {juegos}
        />
        <hr/>
        <FourthComponent />

        </div>

      </header>

    </div>
  );
}

export default App;
