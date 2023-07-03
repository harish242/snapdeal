import React,{useContext} from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/ItemDetails.css'
import Button from '@mui/material/Button';
import { CartState } from './Home';

const ItemDetails = () => {
    const data=useLocation()
    const fin=data?.state.item

    const {onSelect,onSelectRemove,selectedProducts}=CartState()
    console.log(selectedProducts)

    const isDisabled=selectedProducts[0]?.count===0?true:false
  return (
    <div className='container'>

        <div className='details'>
        <img src={fin?.image} className='img' />
        <div style={{color:"#001C30",padding:'0px 20px',fontWeight:'bolder'}}>{`${fin.title.slice(0,36)}`}</div>
        <div style={{position:'relative',left:'400px',bottom:'30px',fontSize:'20px',color:'#FF8989'}}>{`Rating:${fin.rating.rate}`}</div>

        <div style={{color:'#001C30',padding:'0px 20px'}}>{`${fin.description.slice(0,100)}.`}</div>
        <div className='inside'>
        <div style={{fontSize:'20px',fontWeight:'bolder',marginTop:'5px',color:'#001C30'}}>{`Price:$${fin.price}`}</div>
        </div>
         
         <div className='btn'>
         <Button variant="outlined"  style={{margin:'20px',color:'#FF8989'}} onClick={()=>onSelect(fin)}>ADDTOCART</Button>
        <Button variant="outlined" style={{margin:'20px',color:'#FF8989'}} onClick={()=>onSelectRemove(fin)} disabled={isDisabled}>REMOVECART</Button>
            
            </div>      
        
        </div>
       
       
     </div>
  )
}

export default ItemDetails