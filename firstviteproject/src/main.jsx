import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>creating new function in main jsx using it insted of importing from app.jsx</h1>
  )
}

const newelement = 'variable declearation'

/*
// this how the dom elements and prperties are passed in react bundler
const reactElement = React.createElement(
  'a',
  {href:'https:/w3school.com', target:'_blank'},
  'click to visit w3school.com',
  newelement
)
  */


/*
// way to retun in main jsx file without using App.jsx
const myelement = (
  <h1>
i am a react element
  </h1>
)
  */

createRoot(document.getElementById('root')).render(
 
// reactElement
/* <MyApp/>  */
// myelement
<App/>

)
