import React, { useState, useRef, useEffect } from 'react';
import logo from '../img/Logotype.svg';
import '../icons/style.css'

function Header({ handleChange }) {
  const [searchBar, setSearchBar] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchBar && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchBar]);

  // useEffect(() => {
  //   handleInputChange();
  // }, [inputValue]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 200 && currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsMenuVisible(false);
      } else if(currentScrollPos < prevScrollPos) {
        // Scrolling up
        setIsMenuVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

      window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleSearchBar = function () {
    setSearchBar(!searchBar);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

 const handleInputChange = (value) => {
    handleChange(value)
  };

  return (
    <>
      <div className='upperHeader mainPadding'>
        <h1 className='forSEO'>logotype</h1>
        <a href="#home"><img src={logo} alt="logotype" /></a>
        <div className='search-container'>
          {searchBar && (<input 
                            ref={inputRef} 
                            type="text" 
                            placeholder='Search...' 
                            onChange={(event) => handleInputChange(event.target.value)}
                          />)} 
          <span className="icon-search" onClick={(() => toggleSearchBar() )}></span>
          {/* {searchBar && <span className="icon-close"></span>} */}
        </div>
      </div>
      <div className={`stickyHeader mainPadding ${isMenuVisible ? '' : 'hidden'}`}>
        <ul className="menu">
          <li className='menu__item'>
            <a href="#demos">demos<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu__item'><a className='submenu__link' href="#">post header</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu__item'>
            <a href="#">post<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu__item'><a className='submenu__link' href="#">post header</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu__item'>
            <a href="#">features<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu__item'><a className='submenu__link' href="#">post header</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu__item'>
            <a href="#">categories<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu__item'><a className='submenu__link' href="#">post header</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu__item'>
            <a href="#">shop<span className='icon-arrow'></span></a>
            <ul className="submenu">
              <li className='submenu__item'><a className='submenu__link' href="#">post header</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">post layout</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">share buttons</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">gallery post</a><span className='icon-arrow'></span></li>
              <li className='submenu__item'><a className='submenu__link' href="#">video post</a><span className='icon-arrow'></span></li>
            </ul>
          </li>
          <li className='menu__item'>
            <a href="#">buy now</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header