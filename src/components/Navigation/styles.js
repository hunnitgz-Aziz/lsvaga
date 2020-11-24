import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1001;

  &.bg-white {
    background: #e0e0e0;
  }

  &.bg-none {
    background: transparent;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 1200px;
`

export const Menu = styled.ul`
  list-style-type: none;
  padding-left: 0;

  @media (max-width: ${breakpoints.ipad}px) {
    display: none;
  }
`

export const MenuItem = styled.li`
  display: inline-block;

  a {
    font-size: 16px;
    text-transform: uppercase;
    color: #990000;
    margin-right: 1rem;
  }
`

export const MenuBlock = styled.div(
  {
    width: '33.3333%',
  },
  props => ({ textAlign: props.textAlign })
)

export const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 0.5rem;

  &.white {
    color: #fff;
  }

  &.black {
    color: #222;
  }

  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  &.white {
    color: #fff;
  }

  &.black {
    color: #222;
  }

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
`

export const MenuIcon = styled.div`
  color: #990000;
  cursor: pointer;

  &.white {
    color: #fff;
  }

  &.black {
    color: #222;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

export const Logo = styled.img`
  max-width: 100px;

  &.white {
    filter: invert(1);
  }

  &.black {
    filter: invert(0);
  }

  @media (max-width: ${breakpoints.s}px) {
    max-width: 70px;
  }
`

export const Sidebar = styled.div`
  background: #424242;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  width: 50%;
  z-index: 1001;

  .sidemenu-link {
    display: inline-block;
  }

  ul {
    display: block;

    li {
      display: block;
      margin-bottom: 2rem;

      a {
        color: #fff;
        display: block;
      }
    }
  }
  ${({ open }) =>
    open &&
    `
    transform: translateX(0);
  `}
`

export const CloseButton = styled.div`
  cursor: pointer;
`
