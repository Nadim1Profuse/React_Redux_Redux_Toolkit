import React from "react"
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const ProductComponent=()=>{
    const products =useSelector((state)=>state.allProducts.product)
    console.log(products)
    const renderList= products.map(product=>{
      const {id,title,price,category,image}=product;
      
      return(
        
        <div  className="four wide column" key={id}>
          <Link to={`/product/${id}`} >
           <div className="ui link cards">
              <div className="card">
                <div>
                <img src={image} alt={title} width="250" height="350" />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">${price}</div>
                  <div className="meta ">{category}</div>
                </div>
              </div>
           </div>
          </Link> 
            
        </div>
        

      )
    })
    return(
        // <div style={{marginTop:"3rem"}} className="ui grid">
        <>
        {renderList } 

        </>  
         
        // </div>
    )
}
export default ProductComponent;