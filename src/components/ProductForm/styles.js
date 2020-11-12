import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const CartButton = styled.button`
  background: transparent;
  border: 1px solid #333;
  border-radius: 48px;
  text-align: center;
  color: #333;
  text-decoration: none;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  width: 100%;

  &:hover {
    background: #333;
    color: #e0e0e0;
  }
`

export const SelectMenu = styled.select`
  width: 100%;
  height: 48px;
`

export const QuantityBlock = styled.div``

export const OptionsBlock = styled.div``

export const ControlSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

export const QuantityInput = styled.input`
  width: 100%;
  height: 42px;
`
