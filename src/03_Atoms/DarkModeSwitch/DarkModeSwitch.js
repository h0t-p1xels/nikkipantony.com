import React from "react"

const DarkModeSwitch = () => {
    const toggle = () => document.body.classList.toggle("dark-mode")

    return (
        <form className="dark-mode-switch">
            <label htmlFor="dark-mode" className="dark-mode-switch__label">
                Dark Mode
            </label>

            <input
                type="checkbox"
                id="dark-mode"
                name="dark-mode"
                tabIndex="0"
                className="dark-mode-switch__input"
                onChange={toggle}
            />

            <div className="dark-mode-switch__toggle"></div>

            <div className="dark-mode-switch__toggle-line"></div>
        </form>
    )
}

export default DarkModeSwitch
