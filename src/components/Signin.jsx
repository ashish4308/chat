import React from 'react'
import { auth } from '../firebase'
import {GoogleAuthProvider , signInWithRedirect} from 'firebase/auth'

function Signin() {
    
    const done= async()=>{
        const p = new GoogleAuthProvider()
        await signInWithRedirect(auth,p)
    }
   

  return (
    <div>
        <button onClick={done}>Signin</button>
    </div>
  )
}

export default Signin