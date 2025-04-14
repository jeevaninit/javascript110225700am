import React from 'react'
import { connect } from 'react-redux'
import {DecrementAction, IncrementAction } from './action'

const PrintStoreValue = ({count,course,institute,city,IncrementAction,DecrementAction}) => {
  return (
    <div>
      <h3>{count}</h3>

      <button onClick={IncrementAction}>Increment</button>
      <button onClick={DecrementAction}>Derement</button>

      <h3>{course}</h3>
      <p>{institute}</p>
      <p>{city}</p>
      PrintStoreValue
      </div>
  )
}


const mapStatetoProps=state=>({
count:state.count,
course:state.course,
institute:state.details.institute,
city:state.details.city
})

export default connect(mapStatetoProps,{IncrementAction,DecrementAction})(PrintStoreValue);