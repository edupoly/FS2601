import React, { useEffect, useState } from "react";

function Products() {
  var [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, []);
  return (
    <div className="border border-2 m-2 p-2 border-success">
      <h1>Products</h1>
      <ul>
        {products.map((prod) => {
          return <li>{prod.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
