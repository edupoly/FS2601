import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function StudentForm() {
  var sForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().min(4, "thaggede le"),
      lastname: Yup.string().max(6, "please keep it short by 6"),
      age: Yup.number().test(
        "checkMinority",
        "You are too Young",
        function (a) {
          if (this.parent.gender === "male" && a > 21) {
            return true;
          }
          if (this.parent.gender === "female" && a > 18) {
            return true;
          }
        },
      ),
    }),
    onSubmit: (x) => {
      console.log(x);
    },
  });
  return (
    <div className="border border-2 border-info p-2 m-2">
      <h1>StudentForm</h1>
      <p>{JSON.stringify(sForm.errors)}</p>
      <form onSubmit={sForm.handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={sForm.handleChange}
          onBlur={sForm.handleBlur}
        />
        <br />
        {sForm.errors && sForm.touched.firstname && (
          <div>{sForm.errors?.firstname}</div>
        )}
        <input
          type="text"
          name="lastname"
          onChange={sForm.handleChange}
          onBlur={sForm.handleBlur}
        />
        <br />
        {sForm.errors && sForm.touched.lastname && (
          <div>{sForm.errors?.lastname}</div>
        )}
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={sForm.handleChange}
          onBlur={sForm.handleBlur}
        />
        :Male
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={sForm.handleChange}
          onBlur={sForm.handleBlur}
        />
        :Female
        <br />
        <input type="text" name="age" onChange={sForm.handleChange} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
