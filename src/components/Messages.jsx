import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { collection, query, where, onSnapshot, orderBy, limit, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import Display from './Display';



function Messages() {
    const [messages, setMessages]= useState([]);

    useEffect(()=>{


        const q = query(collection(db, "messages"), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data() , id : doc.id});
            });
            messages.splice(0,messages.length-3)
            setMessages(messages)

  
       });

       return ()=> unsubscribe();
    },[])

 



  return (
    <div>
        {messages && messages.map((messages)=>(
            
            <Display key={messages.id} messages={messages}  />
        ))}
    </div>
  )
}

export default Messages