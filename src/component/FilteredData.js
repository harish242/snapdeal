import React,{useEffect} from "react"
import { CartState } from "./Home"
const FilteredData=()=>{
    const{state,setFilterData,filterdata,value,awesome}=CartState()
   
return(
    <div className='grid-container'>
      {filterdata?.map((item,index)=>{
      return(
        <div className='grid-item grow' onClick={()=>awesome(item)} key={index}>
          <img src={item.images[0]} style={{height:'200px'}}></img>
          <h3>{item.title}</h3>
          <p>{`price:$${item.price}`}</p>
          {/* <p>{`rate:${item.rating.rate}`}</p> */}
         
        </div>
      )
      })}
    </div>
    
)

}
export default FilteredData;