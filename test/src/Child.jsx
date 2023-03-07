import React, { useState } from 'react';


function Child({onData,setOpenChild}) {
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
const handleSubmit=(e)=>{
    e.preventDefault()
onData(formData)
setOpenChild(false)
}
  return (
    <form style={{display:"flex",flexDirection:"column",width:"300px"}}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
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
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
<button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Child

















