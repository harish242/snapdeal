import React, { useState, useEffect, createContext, useContext } from 'react';

const Context = createContext();

function Home({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalSelected, setTotalSelected] = useState(0);

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  const getCartFromLocalStorage = () => {
    const storedData = localStorage.getItem('cart');
    return storedData ? JSON.parse(storedData) : [];
  };

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

  useEffect(() => {
    const storedCart = getCartFromLocalStorage();
    setSelectedProducts(storedCart);
  }, []);

  useEffect(() => {
    const value = selectedProducts.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
    setTotalSelected(value);
  }, [selectedProducts]);

  useEffect(() => {
    saveCartToLocalStorage(selectedProducts);
  }, [selectedProducts]);

  return (
    <Context.Provider
      value={{
        selectedProducts,
        totalSelected,
        onSelect,
        onSelectRemove,
        HandleDelete,
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
