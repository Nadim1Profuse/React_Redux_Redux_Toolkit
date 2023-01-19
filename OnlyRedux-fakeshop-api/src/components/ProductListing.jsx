import React, { useEffect } from "react"
import Axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import setProducts from "../redux/actions/productActions"

const ProductListing=()=>{
    const allProduct=useSelector(state=>state);
    console.log(allProduct);
    const dispatch=useDispatch();
   


    const fetchProducts=async() =>{
        const response=await Axios.get('https://fakestoreapi.com/products')
        .catch(err=>{
            console.log("Err",err)
        })

       
        dispatch(setProducts(response.data))

    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return(
        <div style={{marginTop:"3rem"}} className="ui grid container">
        <ProductComponent/>
        </div>
    )
}
export default ProductListing;