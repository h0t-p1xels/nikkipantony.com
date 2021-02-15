/*
 * Main Layout Template Component
 *
 */

import React from "react"
import Footer from "../../05_Organisms/Footer/Footer"

const Layout = ({ children }) => (
    <>
        {/* <div className="layout"> */}
        {/* <div className="layout light-mode"> */}
        <div className="layout dark-mode">
            <main className="layout__main">{children}</main>
        </div>
        <Footer />
    </>
)

export default Layout
