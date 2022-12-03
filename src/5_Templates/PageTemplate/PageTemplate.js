/*
 * Main Layout Template Component
 *
 */

import React from "react"
// import DarkMode from "../../09_Utilities/DarkMode"
import Footer from "../../4_Organisms/Footer/Footer"

const Layout = ({ children }) => (
  <>
    {/* <DarkMode /> */}
    <div className="page-template">
      <main className="page-template__main">{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
