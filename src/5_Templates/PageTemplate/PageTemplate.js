/*
 * Page Template Component
 *
 */

import React from "react"
import DarkMode from "../../8_Utilities/DarkMode"
import Header from "../../4_Organisms/Header/Header"
import Footer from "../../4_Organisms/Footer/Footer"

const PageTemplate = ({ children }) => (
  <>
    <DarkMode />
    <div className="page-template">
      <Header />
      <main className="page-template__main">{children}</main>
      <Footer />
    </div>
  </>
)

export default PageTemplate
