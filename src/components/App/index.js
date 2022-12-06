import { useState } from "react";
// import PropType from "prop-types";

//Components
import Header from "../Header"
import Menu from "../Menu";
import Body from "../Body";

//Style
import '../../App.css';

function App() {

  const [selectMode, setMode] = useState("bigMode");

  const changeMode = (mode) => {
    setMode(mode)
  }

  return (
    <div className="App">
      <Header />
      <Menu 
        changeMode={changeMode}
      />
      <Body 
        selectMode={selectMode}
        />
      <p className="copyright">Punky@2022</p>
      <p className="instruction">Le Joueur 1 utilise Z et D pour monter et descendre, le Joueur 2 utilise HAUT et BAS </p>
    </div>
  );
}

App.propTypes = {
  
}

export default App;
