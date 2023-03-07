// import React, { useState } from 'react'
import React, { useState } from 'react';

function Mul() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
    return {  ...prevState,
      [name]: value, }
    });
  };
const handleSubmit=()=>{
    console.log(formData);
}
  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label> <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
<button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Mul















