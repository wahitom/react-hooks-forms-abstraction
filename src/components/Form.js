import React, { useState } from "react";

function Form() {
  //add state to your form
  //add items in state as object so we can add several at onde and use them later
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  //functon for targeting the input value through onChange
  function handleChange(event) {
    const name = event.target.name; //this is each name ie first and last
    let value = event.target.value; // whatever our input is

    // adding a checkbox with the cheked propert
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    //setter function for the data
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //submit function
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
