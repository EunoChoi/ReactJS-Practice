import '../css/Header.css';

function Header() {
    return (
        <div className="header">
            <div>MovieNet</div>
            <div className="headerTitle">
                <span>Home</span>
                <span>Drama</span>
                <span>Comedy</span>
                <span>Animation</span>
            </div>
            <div>
                <span className='profilImg'>🦊</span>
                <span>Euno</span>
            </div>
        </div>
    );
}

export default Header;