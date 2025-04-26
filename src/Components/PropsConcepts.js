import React from 'react'

const PropsConcepts = (props) => {
  return (
   <>
   <h1>Hello {props.name} You age is {props.age}</h1>
   <p>{props.children}</p>
   </>
  )
}


export default PropsConcepts