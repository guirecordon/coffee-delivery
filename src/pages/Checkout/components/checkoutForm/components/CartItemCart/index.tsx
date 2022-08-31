import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartItemsContext } from '../../../../../../contexts/CartItemsContext'
import coffeeList from '../../../../../../data/coffeeList.json'
import { Counter } from '../../../../../Home/components/list/components/coffee-card/styles'
import {
  CartItem,
  CartItemCartContainer,
  CheckoutButton,
  CheckoutCartItemLeft,
  CheckoutCartMid,
  ItemPrice,
} from './styles'

interface CartItemsProps {
  id: number
  quantity?: number
}

export function CartItemCart({ id, quantity }: CartItemsProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeItem } =
    useContext(CartItemsContext)

  const checkoutItem = coffeeList.find((item: any) => {
    return item.id === id
  })

  return (
    <CartItemCartContainer>
      <CheckoutCartItemLeft>
        <img src={checkoutItem?.imgURL} alt="" />
        <CheckoutCartMid>
          <h4>{checkoutItem?.title}</h4>
          <CartItem>
            <Counter>
              <Minus size={14} onClick={() => decreaseCartQuantity(id)} />{' '}
              <span>{quantity}</span>{' '}
              <Plus size={14} onClick={() => increaseCartQuantity(id)} />
            </Counter>
            <CheckoutButton onClick={() => removeItem(id)}>
              <Trash size={16} color="#8047F8" />
              remover
            </CheckoutButton>
          </CartItem>
        </CheckoutCartMid>
      </CheckoutCartItemLeft>
      <ItemPrice>R$ 9,90</ItemPrice>
    </CartItemCartContainer>
  )
}
