import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"


const HeaderWrapper = styled.div`
  background-color: none;
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => (
  /*<header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >*/
  <HeaderWrapper>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#b17acc`,
            textDecoration: `none`,
            fontFamily: `Georgia`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
