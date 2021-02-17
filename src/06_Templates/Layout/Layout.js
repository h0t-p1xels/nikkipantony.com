/*
 * Main Layout Template Component
 *
 */

import React from "react"
import Footer from "../../05_Organisms/Footer/Footer"

const Layout = ({ children }) => (
    <>
        <div className="">
            {/* <div className="light-mode"> */}
            {/* <div className="dark-mode"> */}
            <div className="layout">
                <main className="layout__main">{children}</main>
            </div>
            <Footer />
        </div>
    </>
)

export default Layout
