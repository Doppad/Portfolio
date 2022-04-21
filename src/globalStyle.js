
import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle `

//Here you can create global style for this whole app

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body{
    margin: 0;
    padding: 0;
    oveflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
}

`

export default GlobalStyle;