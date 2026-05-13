import React from "react";
import { useGetAllProductsQuery } from "../../services/productApi";
import { Link } from "react-router-dom";

function Products() {
  var { isLoading, data } = useGetAllProductsQuery();
  return (
    <div>
      <i>
        {isLoading && (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </i>
      <ul className="d-flex flex-wrap gap-3 list-unstyled justify-content-center">
        {!isLoading &&
          data?.products?.map((product) => {
            return (
              <Link to={`/productDetails/${product.id}`}>
                <li className="d-flex flex-column align-items-center border border-1">
                  <b>{product.title}</b>
                  <img src={product.thumbnail} alt="" />
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default Products;
