import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductDetailsByIdQuery } from "../../services/productApi";

function ProductDetails() {
  var { id } = useParams();
  var { isLoading, data } = useGetProductDetailsByIdQuery(id);
  console.log(id);
  return (
    <div>
      <h1>ProductDetails</h1>
      {isLoading && <b>Loading...</b>}
      {!isLoading && (
        <div>
          <img src={data.thumbnail} alt="" />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
