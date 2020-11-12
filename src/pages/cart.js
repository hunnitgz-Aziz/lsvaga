import React from 'react'
import Helmet from 'react-helmet'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import '../styles/styles.css'

const CartPage = () => {
  return (
    <>
      <Helmet>
        <body className="cart-page" />
      </Helmet>
      <Container>
        <h1>Cart</h1>
        <Cart />
      </Container>
    </>
  )
}

export default CartPage
