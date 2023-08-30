import React, { useState, useEffect, createContext, useContext,useRef,useMemo } from 'react';
import {useNavigate,useLocation} from 'react-router-dom'

const Context = createContext();

const getCartFromLocalStorage = () => {
  const storedData = localStorage.getItem('cart');
// console.log("this isgetting",storedData)
  return storedData ? JSON.parse(storedData) : [];
};


function Home({ children }) {
  const userName=useLocation()
  console.log("home/15",userName)
  const usera=useMemo(()=>{ return userName?.state?.username},[])
  const [selectedProducts, setSelectedProducts] = useState(()=>(getCartFromLocalStorage()));
  const [totalSelected, setTotalSelected] = useState(0);
  const [user,setUser]=useState(usera)
  const [filterdata,setFilterData]=useState([])
  const [state,setState]=useState([]);
const [value,setInput]=useState('')
const navigate=useNavigate()
const awesome=(item)=>{
  navigate('/itemdetails',{state:{item}})
}
console.log('line23 home',state)

  
 

  const onSelect = (item) => {
    const updatedProducts = [...selectedProducts];
    const foundIndex = updatedProducts.findIndex((a) => a.id === item.id);

    if (foundIndex !== -1) {
      updatedProducts[foundIndex].count += 1;
    } else {
      updatedProducts.push({ ...item, count: 1 }); 
    }

    setSelectedProducts(updatedProducts);
  };
  console.log("Home/44",state)

  const onSelectRemove = (item) => {
    const updatedProducts = [...selectedProducts];
    const foundIndex = updatedProducts.findIndex((a) => a.id === item.id);

    if (foundIndex !== -1 && updatedProducts[foundIndex].count > 0) {
      updatedProducts[foundIndex].count -= 1;
      setSelectedProducts(updatedProducts);
    }
  };

  const HandleDelete = (item) => {
    const updatedProducts = selectedProducts.filter((a) => a.id !== item.id);
    setSelectedProducts(updatedProducts);
  };
  const functions=(str)=>{
    if(str){
      const fildata=state.filter(item=>item.title.toLowerCase().includes(str.toLowerCase()))
      console.log(fildata)
      // console.log(state)
      setFilterData(fildata)
    }
    else{
      setFilterData([])
    }
    
  }
  // console.log(filterdata)
  useEffect(() => {
      functions(value);
    }, [value]);

  // useEffect(() => {
  //   const storedCart = getCartFromLocalStorage();
  //   setSelectedProducts(storedCart);
  // }, []);
  useEffect(()=>{
    (async ()=>{
      try{
        const response=await fetch('https://dummyjson.com/products?limit=100')
        if(!response.ok){
          throw new Error("Api is failed")
        }
        const data=await response.json()
        setState(data.products)
      }catch(error){
        console.log(error.message)
      }
    })()
  },[])

  useEffect(() => {
    const value = selectedProducts.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
    setTotalSelected(value);
  }, [selectedProducts]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  return (
    <Context.Provider
      value={{
        selectedProducts,
        totalSelected,
        onSelect,
        onSelectRemove,
        HandleDelete,
        user,
        setUser,
        state,
        setState,
        value,
        setInput,
        setFilterData,
        filterdata,
        awesome,
        navigate
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Home;

export const CartState = () => {
  return useContext(Context);
};