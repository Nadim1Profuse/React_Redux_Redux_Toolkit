import React, { useEffect } from "react"
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {selectedProducts,removeSelectedProduct} from "../redux/actions/productActions"
import Axios from "axios"


const ProductDetail=()=>{

    const {productId}=useParams()
    const dispatch=useDispatch();
    const product=useSelector((state)=>state.selectedProducts)
    console.log("selected products from ProductDetail Component")
    console.log(product)
    const {title,image,price,description,category}=product

    const fetchProductDetails=async()=>{
    const response=await Axios.get(`https://fakestoreapi.com/products/${productId}`)
                   .catch(err=>{
                   console.log("Err",err)
                   });
    // console.log(response.data);
    dispatch(selectedProducts(response.data))
    }  
    
    useEffect(()=>{
        if(productId && productId !==""){
            fetchProductDetails();
        }
        
        return ()=>{
            dispatch(removeSelectedProduct());
        };


    },[productId])
   
    return(
        <div style={{marginTop:"3rem"}} className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div style={{marginTop:"2rem"}}>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
}
export default ProductDetail;