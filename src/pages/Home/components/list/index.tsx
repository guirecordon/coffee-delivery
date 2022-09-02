import { CoffeeCard } from './components/coffee-card'
import { ListContainer, ListTitle } from './styles'
import coffeeList from '../../../../data/coffeeList.json'

export function List() {
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
