import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem;
  border-radius: 2% 15% / 2% 15%;
  margin-bottom: 2.5rem;

  img {
    width: 120px;
    margin-top: -1.25rem;
  }
`

export const Labels = styled.p`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  line-height: 1.3;
  font-weight: bold;
  border-radius: 100px;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  margin-top: 0.75rem;
`

export const LabelContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Title = styled.strong`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.25rem;
  margin-top: 1rem;
`

export const Description = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 1.3;
  margin-top: 0.5rem;
  text-align: center;
`

export const Price = styled.div`
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['base-text']};
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 800;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const Counter = styled.div`
  background: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.25rem;

  padding: 0 0.5rem;

  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  span {
    color: ${(props) => props.theme['base-title']};
    padding: 0.25rem;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
`
export const BottomShopping = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const IconContainer = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
