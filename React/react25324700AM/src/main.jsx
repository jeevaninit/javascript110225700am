import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StatesAndProps from './StatesAndProps.jsx'
import StateValues from './Props/StateValues.jsx'
import ConditionCheck01 from './ConditionalStatements/ConditionCheck01.jsx'
import ConditionCheck02 from './ConditionalStatements/ConditionCheck02.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
 {/*  <StatesAndProps />   */} 
    {/* <StateValues /> */}
    {/* <ConditionCheck01 /> */}
    <ConditionCheck02 />
  </StrictMode>,
)
