import React from 'react'
import { auth } from '../firebase'

function Chat() {
  const x =()=>{

  }
  return (
    <div>
      
      Welocome to chat room
      <div><button onClick={()=>{auth.signOut()}}>Signout</button></div>

      
    </div>

  )
}

export default Chat