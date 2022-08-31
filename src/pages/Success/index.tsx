import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartItemsContext } from '../../contexts/CartItemsContext'
import {
  BulletWrap,
  DollarPinWrapper,
  FakeGradientBorder,
  MapPinWrapper,
  SuccessContainer,
  SuccessLeftSide,
  SuccessRightSide,
  SummaryPurchase,
  TimerPinWrapper,
  WrapOfAllBullets,
} from './styles'

export function Success() {
  const { deliveryInfo } = useContext(CartItemsContext)

  return (
    <SuccessContainer>
      <SuccessLeftSide>
        <h2>Uhu! Pedido Confirmado</h2>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>
        <SummaryPurchase>
          <FakeGradientBorder>
            <WrapOfAllBullets>
              <BulletWrap>
                <TimerPinWrapper>
                  <Timer size={16} color="#fff" weight="fill" />
                </TimerPinWrapper>
                <div>
                  <p>
                    Entrega em{' '}
                    <strong>
                      {deliveryInfo?.street}, {deliveryInfo?.number}
                    </strong>
                  </p>
                  <p>
                    {deliveryInfo?.district} - {deliveryInfo?.city},{' '}
                    {deliveryInfo?.state}
                  </p>
                </div>
              </BulletWrap>
              <BulletWrap>
                <MapPinWrapper>
                  <MapPin size={16} color="#fff" weight="fill" />
                </MapPinWrapper>
                <div>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </div>
              </BulletWrap>

              <BulletWrap>
                <DollarPinWrapper>
                  <CurrencyDollar size={16} color="#fff" weight="fill" />
                </DollarPinWrapper>
                <div>
                  <p>Pagamento na entrega</p>
                  <p>
                    {deliveryInfo?.paymentMethod === 'credit' && (
                      <strong>Cartão de Crédito</strong>
                    )}
                    {deliveryInfo?.paymentMethod === 'debit' && (
                      <strong>Cartão de Débito</strong>
                    )}
                    {deliveryInfo?.paymentMethod === 'cash' && (
                      <strong>Dinheiro</strong>
                    )}
                  </p>
                </div>
              </BulletWrap>
            </WrapOfAllBullets>
          </FakeGradientBorder>
        </SummaryPurchase>
      </SuccessLeftSide>
      <SuccessRightSide>
        <img src="src/assets/Illustration.svg" alt="" />
      </SuccessRightSide>
    </SuccessContainer>
  )
}
