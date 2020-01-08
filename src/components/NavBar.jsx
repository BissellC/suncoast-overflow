import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          <img src="./favicon.ico" />
          <p className="title">Suncoast Overflow</p>
        </div>
        <Link to="/ask">
          <button className="ask-button">Ask a question</button>
        </Link>
      </nav>
    </>
  )
}

export default NavBar
