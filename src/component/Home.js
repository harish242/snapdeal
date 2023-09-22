import React, { useState, useEffect, createContext, useContext,useRef,useMemo } from 'react';
import {useNavigate,useLocation} from 'react-router-dom'

const Context = createContext();

const getCartFromLocalStorage = () => {
  const storedData = localStorage.getItem('cart');
console.log("this isgetting",storedData)
  return storedData ? JSON.parse(storedData) : [];

};
const getUserName=()=>{
  const userData = localStorage.getItem('user1');
  if (userData) {
    try {
      const parsedData = JSON.parse(userData);
      return parsedData;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
    }
  }
  return null;
}


function Home({ children }) {
  const userName=useLocation()
const navigate=useNavigate()

  console.log("home/15",userName)
  const usera=useMemo(()=>{ return userName?.state?.username},[])
  const [selectedProducts, setSelectedProducts] = useState(getCartFromLocalStorage()||{});
  const [totalSelected, setTotalSelected] = useState(0);
  const [user,setUser]=useState(getUserName()||'')
  const [filterdata,setFilterData]=useState([])
  const [state,setState]=useState([]);
  const [selectProducts,setSelectProducts]=useState('')
  const [page,setPage]=useState(1)

const [value,setInput]=useState('')
const awesome=(item)=>{
  navigate('/itemdetails',{state:{item}})
}
console.log('line30 home',selectProducts)

  
 

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
  const handleSelectProducts=(it)=>{
    //  console.log('pL/46',it)
     const filterSideBarItems=state.filter(item=>item.category===it.category)
  // console.log('pL/48','hi')
    
     setSelectProducts(filterSideBarItems)
  }
  const stateRed=state.reduce((acc,curr)=>{
    const found=acc.find(item=>item.category===curr.category)
    if(!found){
      acc.push(curr)
    }
    return acc
},[])
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
  },[selectProducts])

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
        
        selectProducts,
        stateRed,
        handleSelectProducts,
        setSelectProducts,
        setPage,
        page,
        navigate,
        setTotalSelected,setSelectedProducts
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