import React, { useState } from 'react'
import Child from './Child'

const App = () => {
  const [firstname,setFirstName]=useState("")
  const [lastname,setLastName]=useState()
  const [email,setEmail]=useState("")
  const [openChild,setOpenChild]=useState(false)
const updateData=(data)=>{
  setFirstName(data.firstName)
  setLastName(data.lastName)
  setEmail(data.email)
}
  return (
    <div>
      <h3>Name:</h3>{firstname}
      <h3>Age:</h3><span>{lastname}</span>
      <h3>Email:</h3><span>{email}</span> <br />
      <button onClick={()=>setOpenChild(true)}>Update</button>
      {openChild &&  <Child onData={(data)=>updateData(data)} setOpenChild={setOpenChild}/>}
        </div>
  )
}

export default App





