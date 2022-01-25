import { useEffect, useState } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';


function Header() {


    const [scrollPosition, setScrollPosition] = useState(0);
  
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false);
    
    function handleScroll() {
      if (ScrollY > 40) {
        setScrollY(window.pageYOffset);
        setScrollActive(true);
      } else {
        setScrollY(window.pageYOffset);
        setScrollActive(false);
      }
    }
    useEffect(() => {
      function scrollListener() {
        window.addEventListener("scroll", handleScroll);
      } //  window 에서 스크롤을 감시 시작
      scrollListener(); // window 에서 스크롤을 감시
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }; //  window 에서 스크롤을 감시를 종료
    });
  

    return (
        <div className={!ScrollActive ? "header" : "header moving"}>
            <div className='header__title'>
                <Link to={`/`}>MovieNet</Link>
            </div>
            <div className="header__menu">
                <div>All</div>
                <div>Drama</div>
                <div>Comedy</div>
                <div>Horror</div>
            </div>
            <div className="header__profil">
                <span className='profilImg'>🦊</span>
                <span>Euno</span>
            </div>
        </div>
    );
}

export default Header;