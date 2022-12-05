import logo from "../../assets/images/soccerpong.png"

function Header() {
    return(
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <h1>Un jeux de foot moderne</h1>
            <p>Choissisez votre mode ou redémarrez le</p>
        </header>
    );
}

export default Header;