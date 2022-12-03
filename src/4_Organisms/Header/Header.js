/*
 * Header Organism Component
 *
 */

import React from "react"
import DarkModeButton from "../../3_Molecules/DarkModeButton/DarkModeButton"

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__content">
          <DarkModeButton />
        </div>
      </div>
    </header>
  )
}

export default Header
