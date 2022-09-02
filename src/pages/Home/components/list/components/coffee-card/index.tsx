import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartItemsContext } from '../../../../../../contexts/CartItemsContext'
import {
  CardContainer,
  Labels,
  Title,
  Description,
  Price,
  Counter,
  BottomContainer,
  IconContainer,
  BottomShopping,
  LabelContainer,
} from './styles'

interface CoffeeListProps {
  id: number
  title: string
  description: string
  price: string
  labels: string[]
  imgURL: string
}

export function CoffeeCard({
  id,
  title,
  description,
  price,
  labels,
  imgURL,
}: CoffeeListProps) {
  const {
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity,
    updateCartQuantity,
  } = useContext(CartItemsContext)
  const quantity = getItemQuantity(id)

  return (
    <CardContainer>
      <img src={'../../../../../../assets/imgs/americano.svg'} alt="" />
      <LabelContainer>
        {labels.map((label) => (
          <Labels key={label}>{label}</Labels>
        ))}
      </LabelContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BottomContainer>
        <Price>
          <span>R$ </span>
          {price}
        </Price>
        <BottomShopping>
          <Counter>
            <Minus size={14} onClick={() => decreaseCartQuantity(id)} />{' '}
            <span>{quantity}</span>{' '}
            <Plus size={14} onClick={() => increaseCartQuantity(id)} />
          </Counter>
          <IconContainer onClick={() => updateCartQuantity()}>
            <ShoppingCart size={22} weight="fill" />
          </IconContainer>
        </BottomShopping>
      </BottomContainer>
    </CardContainer>
  )
}
