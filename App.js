import logo from './logo.svg';
import './App.css';

import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name: </label>
      <input {...register("firstName", { required: true })} />
      {errors.lastName && <span>This field is required</span>}

      <label>Last Name: </label>
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <span>This field is required</span>}

      <label>Age: </label>
      <input type="number"
        {...register("age", {
          required: "required",
          min: {
            value: 18, message: "You must be 18 or older"
          }
        })}
      />
      {errors.age && <span>{errors.age?.message}</span>}

      <label>Email Address: </label>
      <input
        type="email"
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          }
        })}
      />
      {errors.email && <span>{errors.email?.message}</span>}

      <label>Phone Number: </label>
      <input type="tel"
        {...register("phone", {
          required: "required",
          pattern: {
            value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
            message: "Entered value does not match telephone format"
          }
        })}
      />
      {errors.phone && <span>{errors.email?.phone}</span>}

      <input type="submit" />
    </form>
  );
}

export default App;
