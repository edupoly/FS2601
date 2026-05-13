import React from "react";
import { useGetAllProductsQuery } from "../../services/productApi";

function Products() {
  var {
    isLoading,
    data: { products },
  } = useGetAllProductsQuery();
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
          products?.map((product) => {
            return (
              <li className="d-flex flex-column align-items-center border border-1">
                <b>{product.title}</b>
                <img src={product.thumbnail} alt="" />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Products;
