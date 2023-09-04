import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {auth} from '../firebase'
// import {useNavigate} from 'react-router-dom'
import { CartState } from './Home'
import {FooterLinks} from './FooterLinks'
import Footer from './Footer'
import NavBarUp from './upperNav'


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
    <NavBarUp/>
    <Navbar/>
    {children}
    <FooterLinks/>
    <Footer/>
    </>
  )
}

export default Layout