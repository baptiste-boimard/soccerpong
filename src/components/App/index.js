import { useState } from "react";
// import PropType from "prop-types";

//Components
import Header from "../Header"
import Menu from "../Menu";
import Body from "../Body";

//Style
import '../../App.css';

function App() {

  //Selection du mode de jeu
  const [selectMode, setMode] = useState("bigMode");

  const changeMode = (mode) => {
    setMode(mode)
  }

  //Reset du canvas
  const [reset, setReset] = useState(false);

  const resetMode = (isReset) => {
    setReset(isReset)
  }

  return (
    <div className="App">
      <Header />
      <Menu 
        changeMode={changeMode}
        resetMode={resetMode}
        
      />
      <Body 
        selectMode={selectMode}
        reset={reset}
        />
      <p className="copyright">Punky@2022</p>
      <p className="instruction">Le Joueur 1 utilise Z et D pour monter et descendre, le Joueur 2 utilise HAUT et BAS </p>
    </div>
  );
}

App.propTypes = {
  
}

export default App;
