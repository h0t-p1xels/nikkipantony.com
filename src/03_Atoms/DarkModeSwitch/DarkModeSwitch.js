import React, { useState } from "react"

const DarkModeSwitch = () => {
    const userPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches

    const init = userPrefersDark ? true : false

    let [isDark, setIsDark] = useState(userPrefersDark)
    const toggle = () => setIsDark(!isDark)

    let DarkMode = isDark ? true : false

    if (DarkMode === true) {
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.remove("dark-mode")
    }

    return (
        <div>
            <form className="dark-mode-switch">
                <input
                    type="checkbox"
                    id="dark-mode"
                    name="dark-mode"
                    onChange={toggle}
                    className="dark-mode-switch__input"
                    tabIndex="0"
                    defaultChecked={init}
                />

                <div className="dark-mode-switch__toggle"></div>

                <label htmlFor="dark-mode" className="dark-mode-switch__label">
                    <span className="sr-only">Switch dark mode on and off</span>
                </label>
            </form>
        </div>
    )
}

export default DarkModeSwitch
