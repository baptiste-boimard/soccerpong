//Components
import Header from "../Header"
import Menu from "../Menu";
import Body from "../Body"


//Style
import '../../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Body />
      <p className="copyright">Punky@2022</p>
      <p className="instruction">Le Joueur 1 utilise Z et D pour monter et descendre, le Joueur 2 utilise HAUT et BAS </p>
    </div>
  );
}

export default App;
