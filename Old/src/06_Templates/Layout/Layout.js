/*
 * Main Layout Template Component
 *
 */

import React from "react"
import DarkMode from "../../09_Utilities/DarkMode"
import Footer from "../../05_Organisms/Footer/Footer"

const Layout = ({ children }) => (
    <>
        <DarkMode />
        <div className="layout">
            <main className="layout__main">{children}</main>
        </div>
        <Footer />
    </>
)

export default Layout
