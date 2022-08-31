import styled from 'styled-components'

export const CartItemCartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: solid 1px ${(props) => props.theme['base-button']};
`

export const CheckoutCartItemLeft = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
  }
`

export const CheckoutCartMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CartItem = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CheckoutButton = styled.div`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const ItemPrice = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  line-height: 1.3;
`
