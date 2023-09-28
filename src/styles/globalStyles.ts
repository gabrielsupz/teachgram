import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyleAndReset = createGlobalStyle`

${reset}

:root{
  --text-color: #303030;
  --light-grey-color:  #666666;
  --red-color:  #F37671;
  --red-color-hover:  #f55e58;
  --grey-color:  #A09F9F;
 --navigate-text-color: #8E8E8E;

 font-family: 'Inter', sans-serif;
}





`
