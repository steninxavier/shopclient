import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../Data";
import { Product } from "./Product";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  const[products,setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts]= useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res =  await publicRequest.get(cat ? `/products?category=${cat}` :"/api/products" );
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getProducts()
  },[cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (

<Container>
      {cat
        ? filteredProducts.map((pro) => <Product productItem={pro} key={pro.id} />)
        : products
            .slice(0, 8)
            .map((pro) => <Product productItem={pro} key={pro.id} />)}
    </Container>

  );
};

export default Products