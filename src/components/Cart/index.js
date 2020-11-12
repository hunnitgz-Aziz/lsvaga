import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import styled from '@emotion/styled'

const CheckoutButton = styled.button`
  background: transparent;
  border: 1px solid #333;
  border-radius: 48px;
  text-align: center;
  color: #333;
  text-decoration: none;
  padding: 1rem 2rem;

  &:hover {
    background: #333;
    color: #e0e0e0;
  }
`

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <div>
      {lineItems}
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <br />
      <div style={{ background: '#777', height: '1px', width: '100%' }}></div>
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <br />
      <div style={{ background: '#777', height: '1px', width: '100%' }}></div>
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <br />
      <CheckoutButton
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check out
      </CheckoutButton>
    </div>
  )
}

export default Cart
