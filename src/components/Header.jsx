import { React, useContext } from 'react'
import '../css/Header.css'
import { Context } from '../Context';

function Header() {
  const { handleDarkmode, darkMode } = useContext(Context);

  return (
    <header className={darkMode ? 'App darkMode' : 'App'} >
      <span id='header'>Where in the world?</span>
      <button className={darkMode ? 'darkBtn' : 'Btn'} onClick={handleDarkmode}>Dark Mode</button>
    </header>
  )
}

export default Header