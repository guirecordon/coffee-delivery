// import { useContext } from 'react'
// import { CartItemsContext } from '../../../../contexts/CartItemsContext'
import { CoffeeCard } from './components/coffee-card'
import { ListContainer, ListTitle } from './styles'
import coffeeList from '../../../../data/coffeeList.json'

export function List() {
  // const { cartItems, setCartItems } = useContext(CartItemsContext)

  // function handleAddOrder(
  //   id: number,
  //   quantity: number,
  //   title: string,
  //   imgURL: string,
  //   price: string,
  // ) {
  //   const storedItems = localStorage.getItem(
  //     '@coffee-delivery:cart-items-1.0.0',
  //   )

  //   if (storedItems) {
  //     const parsedItems = JSON.parse(storedItems)
  //     const cleanArr = parsedItems.filter((el: any) => {
  //       return el.product !== title
  //     })
  //     setCartItems([
  //       ...cleanArr,
  //       { id, product: title, quantity, img: imgURL, price },
  //     ])
  //   } else {
  //     setCartItems([
  //       ...cartItems,
  //       { id, product: title, quantity, img: imgURL, price },
  //     ])
  //   }
  // }

  return (
    <>
      <ListTitle>Nossos Cafés</ListTitle>
      <ListContainer>
        {coffeeList.map((coffee) => {
          return <CoffeeCard key={coffee.id} {...coffee} />
        })}
      </ListContainer>
    </>
  )
}
