"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
const Provider = ({children}:any) => {

    useEffect(()=>{
        CreateNewUser()
    },[])
    const CreateNewUser = async()=>{
        const result = await axios.post('/api/user',{})
        console.log(result.data)
    }
  return (
    <div>{children}</div>
  )
}

export default Provider 