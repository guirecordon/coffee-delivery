import styled from 'styled-components'

export const PriceCheckoutSectionContainer = styled.div`
  padding: 1rem 0;
`

const BasePriceItems = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.3;
  margin-top: 0.75rem;
`

export const PriceItems = styled(BasePriceItems)`
  p {
    font-size: 0.875rem;
  }
`

export const PriceItemsTotal = styled(BasePriceItems)`
  font-weight: bold;
  font-size: 1.25rem;
`
