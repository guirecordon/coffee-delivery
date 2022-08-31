import { Intro } from './components/intro'
import { List } from './components/list'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <List />
    </HomeContainer>
  )
}
