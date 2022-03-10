import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css'
function Navbar() {
    return (
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/aricardoq/">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/aricardoq</p>
                    </div>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;