import React, { useContext, useState, useRef } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import { useOnClickOutside } from './hooks'

import StoreContext from '~/context/StoreContext'
import {
  CartCounter,
  Container,
  MenuLink,
  Wrapper,
  Logo,
  Menu,
  MenuItem,
  MenuBlock,
  MenuIcon,
  Sidebar,
  CloseButton,
} from './styles'
import SiteLogo from '../../images/site-logo.png'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <Wrapper>
      <Container>
        {/* <MenuBlock>
          <MenuIcon open={open} onClick={() => setOpen(true)}>
            &#9776;
          </MenuIcon>
          <Menu>
            <MenuItem>
              <MenuLink to="/sale">Sale</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/raps">Raps</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/library">Library</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/cinema">Cinema</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contact">Contact</MenuLink>
            </MenuItem>
          </Menu>
        </MenuBlock>*/}
        <MenuBlock textAlign="center" style={{ width: '100%' }}>
          <MenuLink to="/">
            <Logo src={SiteLogo} />
          </MenuLink>
        </MenuBlock>
        {/* <MenuBlock textAlign="right">
          <MenuLink to="/cart">
            {hasItems && <CartCounter>{quantity}</CartCounter>}
            🛍
          </MenuLink>
        </MenuBlock> */}
      </Container>
      <div ref={node}>
        <Sidebar open={open} setOpen={setOpen}>
          <CloseButton open={open} onClick={() => setOpen(false)}>
            &#10005;
          </CloseButton>
          <Menu>
            <MenuItem>
              <MenuLink to="/sale" open={open} onClick={() => setOpen(false)}>
                Sale
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/raps" open={open} onClick={() => setOpen(false)}>
                Raps
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                to="/library"
                open={open}
                onClick={() => setOpen(false)}
              >
                Library
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/cinema" open={open} onClick={() => setOpen(false)}>
                Cinema
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                to="/contact"
                open={open}
                onClick={() => setOpen(false)}
              >
                Contact
              </MenuLink>
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </Wrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
