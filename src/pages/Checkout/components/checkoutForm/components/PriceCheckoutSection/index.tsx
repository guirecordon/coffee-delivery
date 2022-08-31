import { useContext } from 'react'
import { CartItemsContext } from '../../../../../../contexts/CartItemsContext'
import {
  PriceCheckoutSectionContainer,
  PriceItems,
  PriceItemsTotal,
} from './styles'

export function PriceCheckoutSection() {
  const { cartQuantity } = useContext(CartItemsContext)

  return (
    <PriceCheckoutSectionContainer>
      <PriceItems>
        <p>Total de itens</p>
        <span>R$ {(cartQuantity * 9.9).toFixed(2)}</span>
      </PriceItems>
      <PriceItems>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </PriceItems>
      <PriceItemsTotal>
        <p>Total</p>
        <span>R$ {(cartQuantity * 9.9 + 3.5).toFixed(2)}</span>
      </PriceItemsTotal>
    </PriceCheckoutSectionContainer>
  )
}
