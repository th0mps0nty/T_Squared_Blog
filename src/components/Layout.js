/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
// import React from 'react'
import { Link } from 'gatsby'

const bodyStyles = {
  px: 3, // padding-left & padding-right
  // paddingX: 3 will also work
  py: 4, // padding-top & padding-bottom
  mb: 3, // margin-bottom
}

const headerStyles = {
  textAlign: `left`,
  background: `bluegrey`,
}

const mainStyles = {
  alignItems: `center`,
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
          <Box p={4} bg='highlight'>
            <Link to='/'>Home</Link>
          </Box>
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
