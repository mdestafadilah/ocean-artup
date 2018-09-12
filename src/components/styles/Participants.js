import styled from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const Participants = styled.section`
  padding: 5vh 5vw;
  display: grid;
  grid-gap: 2em;
  justify-content: center;
  align-items: center;
  h2 {
    background: ${props => props.theme.lightGreen};
    border-radius: ${props => props.theme.mediumBorderRadius};
  }
  p:first-child {
    grid-column: 1/-1;
    img {
      max-width: 15em;
    }
  }
  img {
    width: 100%;
    max-height: 10em;
  }
  ${mediaQuery.tablet} {
    h2 {
      grid-column: 1/-1;
    }
  }
  ${mediaQuery.minPhablet} {
    grid-template-columns: auto auto;
  }
  ${mediaQuery.minTablet} {
    grid-template-columns: repeat(3, minmax(10em, 15em));
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
    h2 {
      grid-row: 2;
    }
  }
`

export default Participants
