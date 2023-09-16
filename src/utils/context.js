import {createContext, useEffect, useState} from "react";
 export const Context = createContext();

 const AppContext = ({ children }) => {
   const [categories, setcategories] = useState();
   const [products, setProducts] = useState() ;
   const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);
   const [cartSubTotal, setCartSubTotal] = useState(0);
   

   useEffect(() => {
    
   }, [cartItems])

   const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if(index !== -1){
      items[index].attributes.quantity += quantity;

    }else{
      product.attributes.quantity = quantity;
      items = [...items,product];
      setCartItems(items)
    }
   };

   const handleRemoveFromCart  = (product) => {
    let items = [...cartItems];
    items = items.filter(p => p.id !== product.id)
    setCartItems(items)
   }
   const handleCartProductQuantity = (type, product ) => {
    
   }
    return(
   <Context.Provider
    value={{
      categories,
      setcategories,
      products,
      setProducts,
      cartItems,
      setCartItems,
      cartCount,
      setCartCount,
      cartSubTotal,
      setCartSubTotal,
      handleAddToCart,
      handleRemoveFromCart,
      handleCartProductQuantity
    }}
  
   >
      {children}
      </Context.Provider>
    )
 }
 export default AppContext;