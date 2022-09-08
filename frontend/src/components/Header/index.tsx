import logo from '../../assets/img/login.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Sitio" />
                <h1>Sítio</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.google.com.br"> @Sítio - soluções em Sistemas e Softwares </a>
                </p>
            </div>
        </header>
    )

}

export default Header;