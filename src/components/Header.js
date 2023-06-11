import React, { useState, useRef, useEffect } from 'react';
import logo from '../img/Logotype.svg';
import '../icons/style.css'

function Header({ handleSearchValue, handleMobileMenu, mobileMenu }) {
  const [searchBar, setSearchBar]         = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [mobileMenu, setMobileMenu]       = useState(false);
  const inputRef = useRef(null);

  //Set input bar focused when user click on search icon
  useEffect(() => {
    if (searchBar && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchBar]);

  //Horizontal menu animation
  useEffect(() => {
      const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;

          if (currentScrollPos > 200 && currentScrollPos > prevScrollPos) {
            setIsMenuVisible(false);
          } else if(currentScrollPos < prevScrollPos) {
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

  //Get input value and pass it to parent
  const handleInputChange = (event) => {
    const { value } = event.target;
    handleSearchValue(value);
  };

  return (
    <>
      <div className='upperHeader mainPadding'>
        <div className='mobileOnly burgerIconContainer'>
          <span className='icon-burger' onClick={() => handleMobileMenu(true)}></span>
        </div>
        <h1 className='forSEO'>logotype</h1>
        <a href="#home"><img src={logo} alt="logotype" /></a>
        <div className='search-container'>
          {searchBar && (<input 
                            ref={inputRef} 
                            type="text" 
                            placeholder='Search...' 
                            onChange={handleInputChange}
                          />)} 
          <span className="icon-search" onClick={(() => {
            toggleSearchBar();
            handleSearchValue("") })}></span>
        </div>
      </div>
      <div className={`stickyHeader mainPadding ${isMenuVisible ? '' : 'hidden'} ${mobileMenu ? '' : 'mobileStickyHeader'}`}>
        <a href="#home" className='mobileOnly mobileLogo'><img src={logo} alt="logotype" /><span className='icon-close' onClick={() => handleMobileMenu(false)}></span></a>
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