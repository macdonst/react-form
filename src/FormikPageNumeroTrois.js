import React from "react";
import { Formik, Form } from 'formik';

function FormikPageNumeroTrois() {
  return (<Formik
    initialValues={{ firstName: '', lastName: '', email: '', age: '', phone: '' }}
    onSubmit={(values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form autocomplete="off">
      <label>First Name: </label>
        <input type="text" name="firstName" required />

        <label>Last Name: </label>
        <input type="text" name="lastName" required />

        <label>Age: </label>
        <input type="number" name="age" required min="18" />

        <label>Email Address: </label>
        <input type="email" name="email" required pattern="\S+@\S+\.\S+" />

        <label>Phone Number: </label>
        <input type="tel" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>);
}

export default FormikPageNumeroTrois;
