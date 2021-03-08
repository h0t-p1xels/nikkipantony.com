import React from "react"

const DarkModeSwitch = () => {
    const toggle = () => document.body.classList.toggle("dark-mode")

    // TODO: Update so it is Ally complient!
    return (
        <form className="dark-mode-switch">
            <input
                type="checkbox"
                id="dark-mode"
                name="dark-mode"
                tabIndex="0"
                className="dark-mode-switch__input"
                onChange={toggle}
            />

            <div className="dark-mode-switch__toggle"></div>

            <label htmlFor="dark-mode" className="dark-mode-switch__label">
                <span className="sr-only">
                    Switch between light and dark mode
                </span>
            </label>
        </form>
    )
}

export default DarkModeSwitch
