import React from "react";
import Product from "./product"
import PRODUCTS from "../../data/products";




const Shop=()=>{

 return(
    <React.Fragment>
    <h1 className="m-4 fw-bolder fs-3 text-muted bg-body-secondary p-1 border "> Shop </h1>
     <div className="row m-2">

      {PRODUCTS.map((productData)=>{
     
       return <Product key={productData.id} data={productData}/>

      })}

     </div>
    </React.Fragment>
    )
    
    }
    export default Shop;