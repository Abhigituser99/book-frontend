import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductFilter.module.scss";
import { FILTER_BY_BRAND, FILTER_BY_CATEGORY,FILTER_BY_PRICE, selectFilteredProducts } from "../../../redux/slice/filterSlice";
import {selectMaxPrice, selectMinPrice, selectProducts} from '../../../redux/slice/productSlice'
import { useEffect, useState } from "react";




const ProductFilter = () => {
  const[category,setCategory]=useState("All")
  const[brand,setBrand]=useState("All")
  const[price,setPrice]=useState(3000)
  const products=useSelector(selectProducts)
  const minPrice=useSelector(selectMinPrice)
  const maxPrice=useSelector(selectMaxPrice)
  const dispatch=useDispatch()
  const allCategories=["All",
    ... new Set(products.map((product)=>
      product.category
    ))

  ]
  const allBrands=["All",
    ... new Set(products.map((product)=>
      product.brand
    ))

  ]
  
  useEffect(()=>{
dispatch(FILTER_BY_BRAND({products,brand}))

  },[dispatch,products,brand])
  useEffect(()=>{
    dispatch(FILTER_BY_PRICE({products,price}))
    
      },[dispatch,products,price])
  const filterProducts=(cat)=>{
    setCategory(cat)
    dispatch(FILTER_BY_CATEGORY({products,category:cat}))

  }
  const clearFilter=()=>{
    setCategory("All")
    setBrand("All")
    setPrice(maxPrice)


  }
  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        {allCategories.map((cat,index)=>{
        return(
          <button key={index} type="button"
           className={`${category}`===cat?`${styles.active}`:null}
           onClick={()=>filterProducts(cat)}
           >&#8250;{cat}</button>
        )

        })}
        
      </div>
      <h4>Brand</h4>
      <div className={styles.brand}>
        <select value={brand} onChange={(e)=>setBrand(e.currentTarget.value)}>
          {allBrands.map((brand,index)=>{
            return((
<option key={index} value={brand}>{brand}</option>
            ))
          })}
          
        </select>
        <h4>Price</h4>
        <p>{`${price}`}</p>
        <div className={styles.price}>
          <input type="range" value={price} min={minPrice} max={maxPrice} onChange={
            (e)=>setPrice(e.currentTarget.value)
          } />
        </div>
        <br />
        <button className="--btn --btn-danger" onClick={clearFilter}>Clear Filter</button>
      </div>
    </div>
  );
};
export default ProductFilter;