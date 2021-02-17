import React, { useState } from "react"

const DarkModeSwitch = () => {
    // Identify if visitor has their prefered color scheme set to dark mode
    const prefersDark =
        typeof window !== `undefined`
            ? window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            : null

    // Use useState to toggle between light and dark mode set to start at user preference
    const [isDark, setIsDark] = useState(prefersDark)
    const toggle = () => setIsDark(!isDark)

    // If mode is dark mode add `dark-mode` class to body tag
    // Else remove `dark-mode` class if it already exists
    if (typeof document !== `undefined`) {
        if (isDark === true) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }

        if (
            isDark === !true ||
            isDark === false ||
            isDark === null ||
            isDark === `undefined`
        ) {
            document.body.classList.remove("dark-mode")
        }
    }

    console.log(`isDark = ${isDark}`)

    return (
        <div>
            <form className="dark-mode-switch">
                <input
                    type="checkbox"
                    id="dark-mode"
                    name="dark-mode"
                    tabIndex="0"
                    className="dark-mode-switch__input"
                    // Switch on at page load if visitor has their prefered color scheme set to dark mode
                    defaultChecked={prefersDark}
                    // On switch toggle between light and dark mode
                    onChange={toggle}
                />

                <div className="dark-mode-switch__toggle"></div>

                <label htmlFor="dark-mode" className="dark-mode-switch__label">
                    <span className="sr-only">
                        Switch between light and dark mode
                    </span>
                </label>
            </form>
        </div>
    )
}

export default DarkModeSwitch
