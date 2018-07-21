import { css } from 'styled-components'

import mediaQuery from '../../utils/mediaQuery'

const ImageRow = css`
  imagerow {
    ${mediaQuery.minTablet} {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 1rem;
      grid-auto-columns: 1fr;
      width: 100%;
      p {
        margin: 0;
      }
      img {
        width: 100%;
        object-fit: cover;
        overflow: hidden;
      }
    }
  }
`

export default ImageRow