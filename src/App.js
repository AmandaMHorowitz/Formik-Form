import React from "react";
import {useFormik} from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
	  firstname: "",
	  lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>First Name:</div>
        <input
          id="fNameField"
          type="text"
          name="firstname"
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
		<div>Last Name:</div>
        <input
          id="lNameField"
          type="text"
          name="lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
		<div>Email:</div>
        <input
          id="emailField"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password:</div>
        <input
          id="pswField"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
