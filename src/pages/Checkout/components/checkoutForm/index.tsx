import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  FormInput,
  LineOneInput,
  LineTwoInput,
  OptionalTag,
  StreetInput,
  FormSection,
  FormHeader,
  ZipInput,
  FormContainer,
  PaymentSelectionHolder,
  PaymentButton,
  SubmitButton,
  CheckoutBox,
  RadioInput,
  AddBorderComponent,
  ErrorMessage,
  EmptyCartMessage,
} from './styles'
import { useContext, useEffect } from 'react'
import { CartItemsContext } from '../../../../contexts/CartItemsContext'
import { CartItemCart } from './components/CartItemCart'
import { PriceCheckoutSection } from './components/PriceCheckoutSection'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NavLink, useNavigate } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  zipcode: zod
    .string()
    .min(8, 'Informe um CEP válido')
    .max(8, 'Informe um CEP válido'),
  street: zod.string(),
  number: zod.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: 'Campo numérico obrigatório',
  }),
  complement: zod.string(),
  district: zod.string().min(2, 'Informe o bairro'),
  city: zod.string().min(2, 'Informe a cidade'),
  state: zod
    .string()
    .min(2, 'Prencha com um UF válido')
    .max(2, 'Prencha com um UF válido'),
  paymentMethod: zod.string(),
})

type FormData = zod.infer<typeof checkoutFormValidationSchema>

export function CheckoutForm() {
  const {
    cartItems,
    getDeliveryInfo,
    resetCartItems,
    zeroCartQuantity,
    updateCartQuantity,
  } = useContext(CartItemsContext)
  const { register, handleSubmit, watch, formState, reset } = useForm<FormData>(
    {
      resolver: zodResolver(checkoutFormValidationSchema),
    },
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    updateCartQuantity()
  }, [cartItems])

  const navigate = useNavigate()

  function handlePostNewOrder(data: FormData) {
    if (cartItems.length > 0) {
      getDeliveryInfo(data)
      reset()
      zeroCartQuantity()

      navigate('/success')
      resetCartItems()
    }
  }

  const radioInput = watch('paymentMethod')

  return (
    <FormContainer onSubmit={handleSubmit(handlePostNewOrder)}>
      <div>
        <h3>Complete seu pedido</h3>
        <FormSection>
          <FormHeader>
            <MapPinLine size={22} weight="regular" color="#C47F17" />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormHeader>
          <ZipInput
            type="string"
            placeholder="CEP"
            {...register('zipcode', {
              pattern: /[0-9]{8}/,
            })}
          />

          <StreetInput type="text" placeholder="Rua" {...register('street')} />
          <LineOneInput>
            <FormInput
              type="number"
              min="0"
              placeholder="Número"
              {...register('number')}
            />
            <FormInput
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            <OptionalTag>Opcional</OptionalTag>
          </LineOneInput>
          <LineTwoInput>
            <FormInput
              type="text"
              placeholder="Bairro"
              {...register('district')}
            />

            <FormInput type="text" placeholder="Cidade" {...register('city')} />

            <FormInput type="text" placeholder="UF" {...register('state')} />
          </LineTwoInput>

          {formState.errors.zipcode && (
            <ErrorMessage>{formState.errors.zipcode.message}</ErrorMessage>
          )}
          {formState.errors.district && (
            <ErrorMessage>{formState.errors.district.message}</ErrorMessage>
          )}
          {formState.errors.city && (
            <ErrorMessage>{formState.errors.city.message}</ErrorMessage>
          )}
          {formState.errors.state && (
            <ErrorMessage>{formState.errors.state.message}</ErrorMessage>
          )}
        </FormSection>
        <FormSection>
          <FormHeader>
            <CurrencyDollar size={22} weight="regular" color="#8047F8" />

            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                utilizar
              </p>
            </div>
          </FormHeader>
          <PaymentSelectionHolder>
            <PaymentButton>
              {radioInput === 'credit' && <AddBorderComponent />}
              <RadioInput
                type="radio"
                value="credit"
                {...register('paymentMethod')}
              />
              <CreditCard size={16} color="#8047F8" />
              Cartão de Crédito
            </PaymentButton>
            <PaymentButton>
              {radioInput === 'debit' && <AddBorderComponent />}
              <RadioInput
                type="radio"
                value="debit"
                {...register('paymentMethod')}
              />
              <Bank size={16} color="#8047F8" />
              Cartão de Débito
            </PaymentButton>{' '}
            <PaymentButton>
              {radioInput === 'cash' && <AddBorderComponent />}
              <RadioInput
                type="radio"
                value="cash"
                {...register('paymentMethod')}
              />
              <Money size={16} color="#8047F8" />
              Dinheiro
              <label htmlFor="cash"></label>
            </PaymentButton>
          </PaymentSelectionHolder>
          {formState.errors.paymentMethod && (
            <ErrorMessage>Selecione uma forma de pagamento</ErrorMessage>
          )}
        </FormSection>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <CheckoutBox>
          <div>
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => {
                return <CartItemCart key={item.id} {...item} />
              })
            ) : (
              <EmptyCartMessage>
                Seu carrinho está vazio. <br />
                Clique <NavLink to="/">aqui</NavLink> para retornar à lista de
                produtos
              </EmptyCartMessage>
            )}
            <PriceCheckoutSection />
          </div>
          <SubmitButton>Confirmar pedido</SubmitButton>
        </CheckoutBox>
      </div>
    </FormContainer>
  )
}
