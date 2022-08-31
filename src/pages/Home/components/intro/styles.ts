import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2.5rem;
  padding-top: 3.875rem;
  height: calc(100vh - 106px);

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 1fr 1fr;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const LeftSidePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const BaseIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.background};
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
`
export const ShoppingCartIcon = styled(BaseIconContainer)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const TimerIcon = styled(BaseIconContainer)`
  background: ${(props) => props.theme.yellow};
`

export const PackageIcon = styled(BaseIconContainer)`
  background: ${(props) => props.theme['base-text']};
`

export const CoffeeIcon = styled(BaseIconContainer)`
  background: ${(props) => props.theme.purple};
`
