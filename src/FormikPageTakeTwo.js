import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormikPage() {
  return (<Formik
    initialValues={{ firstName: '', lastName: '', email: '', age: '', phone: '' }}
    validate={values => {
      const errors = {};
      if (values?.age < 18) {
        errors.age = "Must be 18 years or older"
      }
      if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (values.phone && !/[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(values.phone)) {
        errors.phone = 'Invalid phone number';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form autocomplete="off">
      <label>First Name: </label>
        <Field type="text" name="firstName" required />
        <ErrorMessage name="firstName" component="div" />

        <label>Last Name: </label>
        <Field type="text" name="lastName" required />
        <Field type="text" name="lastName" required />
        <ErrorMessage name="lastName" component="div" />

        <label>Age: </label>
        <Field type="number" name="age" required />
        <ErrorMessage name="age" component="div" />

        <label>Email Address: </label>
        <Field type="email" name="email" required />
        <ErrorMessage name="email" component="div" />

        <label>Phone Number: </label>
        <Field type="tel" name="phone" required />
        <ErrorMessage name="phone" component="div" />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>);
}

export default FormikPage;
