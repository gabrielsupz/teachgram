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
 --rotate-animation: rotate 2s infinite linear;
--friend-pages-color: #C4C4C4;

 font-family: 'Inter', sans-serif;

 @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
input{
  outline: none;
}




`
