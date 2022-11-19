import React from 'react'
import { useState } from 'react'
import {addDoc , collection , serverTimestamp }from 'firebase/firestore'
import { db ,auth } from '../firebase';

function Sendmess() {
    const [input , setInput]= useState('');
    
    const send= async(e)=>{
        e.preventDefault()
        if(input==""){
            return;
        }
        const {uid , displayName, photoURL} = auth.currentUser
        await addDoc(collection(db , 'messages'),{
            text: input,
            name:displayName,
            uid,
            timestamp: serverTimestamp(),
            image: photoURL

        }).then(
            setInput('')
        )

        
    }


  return (
    <form onSubmit={send}>
        <input type="text" value= {input} onChange={(e)=>{setInput(e.target.value)}}/>

    </form>
  )
}

export default Sendmess