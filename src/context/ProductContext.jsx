import { createContext, useState } from "react";



// step1: create a context
export const ProductContext = createContext ();
// sep2: create a provider for ProductContext: it will provide the product state
export const ProductsProvider = ({children}) => {
   
  //fetching list of products from localstorage, if there is no  product fetch empty array
  const productList = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    
  const [products, setProducts] = useState(productList);

    return(
        <ProductContext.Provider value={{ products, setProducts }} >
        
        {children }

         </ProductContext.Provider>
       
    )
}


export const ThemeContext = createContext("light"); 


