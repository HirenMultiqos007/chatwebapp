import React, { useContext, useEffect } from 'react'
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';
import { useState } from 'react';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)

  const [chats, setChats] = useState([])
  useEffect(()=> {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
       
        dispatch({type:"CHANGE_USER",payload:Object.entries(doc.data())?.sort((a,b)=>b[1].date-a [1].date)?.[0]?.[1]?.userInfo})
    });
    return () => {
      unsub()
    }
    }
    currentUser.uid && getChats()
  },[currentUser.uid])

  const handleSelect = (data) => {
    dispatch({type:"CHANGE_USER",payload:data})
  }

  console.log(chats,"chats")
  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date-a [1].date).map(chat=> (
          <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1]?.userInfo)}>
            <img src={chat[1]?.userInfo?.photoURL} alt="" />
            <div className="userChatInfo">
                <span>{chat[1]?.userInfo?.displayName}</span>
                <p> {chat[1]?.lastmessage?.text} </p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Chats