import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {auth} from '../firebase'
// import {useNavigate} from 'react-router-dom'
import { CartState } from './Home'

const Layout = ({children}) => {
  const{navigate}=CartState()
  // const navigate=useNavigate()
  useEffect(()=>{
    
    auth.onAuthStateChanged((user)=>{
      if(!user){
        navigate('/')
      }
      // console.log(user)
    })
  },[])
 
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Layout