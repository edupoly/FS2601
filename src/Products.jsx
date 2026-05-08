import React, { use, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
function Products() {
  var [products, setProducts] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts([...data.products]);
      })
      .catch(() => {});
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      navigate("productDetails/1");
    }
  }, [products]);
  return (
    <div className="border border-2 border-primary m-2 p-2">
      <h1>Products</h1>
      <div className="d-flex flex-wrap">
        <ul className="w-50">
          {products?.map((product) => {
            return (
              <li>
                <Link to={`productDetails/${product.id}`}>{product.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="w-50">
          <Outlet></Outlet>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
