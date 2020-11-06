import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 1.0875rem 3.45rem;
`

const Footer = styled.footer`
  text-align: center;
  height: 2rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size: 12px;
`

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation siteTitle={data.site.siteMetadata.title} />
            <Wrapper>{children}</Wrapper>
            <Footer>
              LSVAGA ® (DONT USE MY SHIT NIGGA) {new Date().getFullYear()}
            </Footer>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
