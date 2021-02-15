import React, { useState } from "react"

const DarkModeSwitch = () => {
    const [isDark, setIsDark] = useState(false)
    const toggle = () => setIsDark(!isDark)

    let DarkMode = isDark ? true : false

    if (DarkMode === true) {
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.remove("dark-mode")
    }

    return (
        <form>
            <input
                type="checkbox"
                id="dark-mode"
                name="dark-mode"
                onChange={toggle}
            />
            <label htmlFor="dark-mode">Dark Mode</label>
        </form>
    )
}

export default DarkModeSwitch
