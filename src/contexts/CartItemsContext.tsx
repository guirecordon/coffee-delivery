import { createContext, ReactNode, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface CartItem {
  id: number
  quantity: number
}

interface FormData {
  number?: string
  zipcode?: string
  street?: string
  complement?: string
  district?: string
  city?: string
  state?: string
  paymentMethod?: string
}

interface CartItemsContextProviderProps {
  children: ReactNode
}

type CartItemsContextType = {
  cartItems: CartItem[]
  getItemQuantity: (id: number) => number
  getDeliveryInfo: (data: FormData) => void
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  updateCartQuantity: () => void
  removeItem: (id: number) => void
  resetCartItems: () => void
  zeroCartQuantity: () => void
  cartQuantity: number
  deliveryInfo: FormData | null
}

export const CartItemsContext = createContext({} as CartItemsContextType)

export function CartItemsContextProvider({
  children,
}: CartItemsContextProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    '@coffee-delivery:cart-items-1.0.0',
    [],
  )
  const [deliveryInfo, setDeliveryInfo] = useLocalStorage<FormData>(
    '@coffee-delivery:delivery-info-1.0.0',
    {},
  )
  const [cartQuantity, setCartQuantity] = useState(0)

  function resetCartItems() {
    setCartItems([])
  }

  function zeroCartQuantity() {
    setCartQuantity(0)
  }

  function getDeliveryInfo(data: FormData) {
    setDeliveryInfo(data)
  }

  function updateCartQuantity() {
    setCartQuantity(() =>
      cartItems.reduce((total, currItem) => (total += currItem.quantity), 0),
    )
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {
    const matchFound = cartItems.find((item) => item.id === id)

    if (!matchFound) {
      setCartItems([...cartItems, { id, quantity: 1 }])
    } else {
      const updatedItemsArr = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      setCartItems(updatedItemsArr)
    }
  }

  function decreaseCartQuantity(id: number) {
    const matchFound = cartItems.find((item) => item.id === id)

    if (matchFound && matchFound.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      const updatedItemsArr = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })
      setCartItems(updatedItemsArr)
    }
  }

  function removeItem(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        cartQuantity,
        updateCartQuantity,
        removeItem,
        deliveryInfo,
        getDeliveryInfo,
        resetCartItems,
        zeroCartQuantity,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
