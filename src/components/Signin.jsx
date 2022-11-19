import React from 'react'
import { auth } from '../firebase'
import {GoogleAuthProvider , signInWithRedirect} from 'firebase/auth'

function Signin() {
    
    const done= ()=>{
        const p = new GoogleAuthProvider()
        signInWithRedirect(auth,p)
    }
   

  return (
    <div>
        <button onClick={done}>Signin</button>
    </div>
  )
}

export default Signin