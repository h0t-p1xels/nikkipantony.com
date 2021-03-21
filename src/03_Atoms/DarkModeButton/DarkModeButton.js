import React from "react"
import Icon from "../Icon/Icon"

const DarkModeSwitch = () => {
    const toggle = () => document.body.classList.toggle("dark-mode")

    return (
        <button className="dark-mode-button" onClick={toggle}>
            <Icon name="darkmode" /> Dark Mode
        </button>
    )
}

export default DarkModeSwitch
