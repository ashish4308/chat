import React from 'react'
import { auth } from '../firebase'
import Messages from './Messages'
import Sendmess from './Sendmess'


function Chat() {
  
  return (
    <div>
      
      
      <div><button onClick={()=>{auth.signOut()}}>Signout</button></div>

      
        
        <Messages />
        <Sendmess />

  
      
    </div>

  )
}

export default Chat