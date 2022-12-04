import React from "react"
import { Link } from "gatsby"

export default function Error() {
  return (
    <div className="container">
      <h1>Error 404, Page not found.</h1>
      <Link to="/">back to home page</Link>
    </div>
  )
}
