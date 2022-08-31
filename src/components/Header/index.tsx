import { HeaderContainer, Location, LocationWrap, Pin } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useContext, FormEvent } from 'react'
import { CartItemsContext } from '../../contexts/CartItemsContext'

export function Header() {
  const { cartQuantity } = useContext(CartItemsContext)

  const navigate = useNavigate()

  function handleRouting() {
    if (cartQuantity > 0) {
      navigate('/checkout')
    } else {
      alert(
        'Carrinho está vazio. Escolha seus itens antes de proceder para o pagamento',
      )
    }
  }

  function handleReturnHome(event: FormEvent) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <HeaderContainer>
      <img src={logo} alt="" onClick={handleReturnHome} />
      <nav>
        <LocationWrap>
          <Pin>
            <MapPin size={22} weight="fill" />
          </Pin>
          <Location>Porto Alegre, RS</Location>
        </LocationWrap>

        <a>
          <ShoppingCart size={22} weight="fill" onClick={handleRouting} />
        </a>
        {cartQuantity > 0 && <span>{cartQuantity}</span>}
      </nav>
    </HeaderContainer>
  )
}
