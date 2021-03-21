import React from "react"

const DarkModeSwitch = () => {
    const toggle = () => document.body.classList.toggle("dark-mode")

    return (
        <button className="dark-mode-button" onClick={toggle}>
            Dark Mode
        </button>
    )
}

export default DarkModeSwitch
