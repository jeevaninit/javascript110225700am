import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StatesAndProps from './StatesAndProps.jsx'
import StateValues from './Props/StateValues.jsx'
import ConditionCheck01 from './ConditionalStatements/ConditionCheck01.jsx'
import ConditionCheck02 from './ConditionalStatements/ConditionCheck02.jsx'
import Menunav from './router/menunav.jsx'
import { BrowserRouter } from 'react-router-dom'
import Container from './router/Container.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.jsx'
import PrintStoreValue from './Redux/PrintStoreValue.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PrintStoreValue />
    {/* <App /> */}
 {/*  <StatesAndProps />   */} 
    {/* <StateValues /> */}
    {/* <ConditionCheck01 /> */}
    {/* <ConditionCheck02 /> */}
    
    <Menunav />
    <Container />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
