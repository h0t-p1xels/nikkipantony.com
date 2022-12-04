import React from "react"
import Icon from "../../2_Atoms/Icon/Icon"

const DarkModeButton = () => {
  const toggle = () => document.body.classList.toggle("--dark")

  return (
    <button className="dark-mode-button" onClick={toggle}>
      <Icon name="dark-mode" title="Dark Mode" />
      <span className="sr-only">Dark Mode Toggle</span>
    </button>
  )
}

export default DarkModeButton
