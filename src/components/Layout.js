/** @jsx jsx */
import { jsx } from 'theme-ui'
// import React from 'react'
import { Link } from 'gatsby'

const bodyStyles = {
  mx: `2rem`,
  padding: `1rem`,
}

const headerStyles = {
  paddingLeft: `10px`,
}

const mainStyles = {
  maxWidth: `container`,
  padding: `1rem`,
  mx: `auto`,
  textAlign: `center`,
}

const footerStyles = {
  textAlign: `center`,
  background: `lightgrey`,
}

const Layout = ({ children }) => {
  return (
    <div sx={bodyStyles}>
      <header sx={headerStyles}>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </header>
      <main sx={mainStyles}>{children}</main>
      <footer sx={footerStyles}>
        <p>A Fun Footer!</p>
      </footer>
    </div>
  )
}

export default Layout
