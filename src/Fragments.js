import React from 'react'

const  Fragments = ()=> {
  return (
    <div>
      <ul>
        <List></List>
      </ul>
    </div>
  )
}
  const List = ()=>{
    return (
    <>
    <li>Name</li>
    <li>Age</li>
    <li>Email</li>
    </>
    )
  }

export default Fragments