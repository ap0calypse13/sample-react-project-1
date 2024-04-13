import React, { useContext } from "react";

import { ShopContext } from "../../context/shopContext";
import {PRODUCTS} from "../../data/products";
import Product from "../shop/product";



const Cart=()=>{
const {cartItems , resetCart} = useContext(ShopContext)
return(
  <React.Fragment >
    <h1 className="m-5 fw-bolder fs-3 text-muted bg-body-secondary p-1 border" >Cart</h1>
    <div className="row">
        {PRODUCTS.map((p)=>{
          if(cartItems?.some((i)=> i.id===p.id && i.count >0))
          return <Product key={p.id} data={p} ></Product>
        })}
    </div>
   
  </React.Fragment>  
)
}

export default Cart;