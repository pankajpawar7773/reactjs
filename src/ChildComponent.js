import React from 'react'

function ChildComponent({handleInput}) {
  return (
    <>
    <h4>I am Child Component.</h4>
    <input type='text' onChange={(e)=>handleInput(e)} placeholder='type your name'/><br/><br/>
    </>
  )
}

export default ChildComponent