import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImage from '../../../../assets/intro-image.svg'
import {
  CoffeeIcon,
  IntroContainer,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
  LeftSidePage,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <LeftSidePage>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h4>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h4>
        </div>
        <ul>
          <li>
            <ShoppingCartIcon>
              <ShoppingCart size={16} weight="fill" />
            </ShoppingCartIcon>{' '}
            Compra simples e segura
          </li>
          <li>
            {' '}
            <PackageIcon>
              <Package size={16} weight="fill" />
            </PackageIcon>{' '}
            Embalagem mantém o café intacto
          </li>
          <li>
            {' '}
            <TimerIcon>
              <Timer size={16} weight="fill" />
            </TimerIcon>{' '}
            Entrega rápida e rastreada
          </li>
          <li>
            {' '}
            <CoffeeIcon>
              <Coffee size={16} weight="fill" />
            </CoffeeIcon>{' '}
            O café chega fresquinho até você
          </li>
        </ul>
      </LeftSidePage>
      <div>
        <img src={introImage} alt="" />
      </div>
    </IntroContainer>
  )
}
