/*
 * Main Layout Template Component
 *
 */

import React from "react"
import Footer from "../../05_Organisms/Footer/Footer"

const Layout = ({ children }) => (
    <>
        <main className="layout">{children}</main>
        <Footer />
    </>
)

export default Layout
