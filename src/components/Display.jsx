import React from 'react'

function Display({messages}) {
    const im= messages.image
    console.log(messages)
  return (
    <div>
        <img src={im}alt="" /> 
       
         <h1>{messages.name}</h1>
        <p>{messages.text}</p>
    </div>
  )
}

export default Display