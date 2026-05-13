import { useFormik } from "formik";
import React from "react";
import { useAddProductMutation } from "../../services/productApi";

function AddProductForm() {
  let [addProdFn] = useAddProductMutation();
  let newProductForm = useFormik({
    initialValues: {
      title: "",
      thumbnail: "",
      price: "",
    },
    onSubmit: (values) => {
      addProdFn(values).then((res) => {
        console.log(res);
      });
    },
  });
  return (
    <div>
      <h1>AddProductForm</h1>
      <form onSubmit={newProductForm.handleSubmit}>
        <input
          type="text"
          {...newProductForm.getFieldProps("title")}
          placeholder="Title"
        />
        <br />
        <input
          type="text"
          name="thumbnail"
          onChange={newProductForm.handleChange}
          onBlur={newProductForm.handleBlur}
          placeholder="thumbnail link"
        />
        <br />
        <input
          type="text"
          name="price"
          onChange={newProductForm.handleChange}
          onBlur={newProductForm.handleBlur}
          placeholder="price"
        />
        <br />
        <button>Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
