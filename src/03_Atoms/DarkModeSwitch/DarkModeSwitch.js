import React from "react"

const DarkModeSwitch = () => {
    const prefersDark =
        typeof window !== `undefined`
            ? window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            : null

    if (typeof document !== `undefined`) {
        if (prefersDark) {
            document.body.classList.add("dark-mode")
        }
    }

    let toggle = () => document.body.classList.toggle("dark-mode")

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
