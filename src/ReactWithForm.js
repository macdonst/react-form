import React from "react";

function ReactWithForm() {
  return <form autocomplete="off" onSubmit={(event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formProps = Object.fromEntries(formData);
      alert(JSON.stringify(formProps, null, 2));
    }}>
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

      <input type="submit" />
    </form>;
}

export default ReactWithForm;
