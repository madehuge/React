import React from 'react'
import logo from '../logo.svg';
const Header = () => {
  return (
    <>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Here
        </a>  
      </header>
      </>
  )
}

export default Header;