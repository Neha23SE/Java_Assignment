
import React, { useState } from 'react'

const Example1 = () => {
 // let email = "neha", password = "neha"
const[email, setEmail] = useState()
const[password, setPassword] = useState()
const handelMySubmit = (e) => {
  e.preventDefault()
  console.log("email>>>>>.", email)
  console.log("password>>", password)
}
  return (
    <>
      <form>
        <div className="mb-3">
          <label  className="form-label">Email address</label>
          <input type="text" className="form-control"  
          aria-describedby="emailHelp" value={email} 
          onChange={(e) => {
            console.log("change email call")
            setEmail(e.target.value)
           
          }} />
          <div id = "emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label  className="form-label">Password</label>
          <input type="text" className="form-control" value={password} 
          onChange = {(e) => {
            console.log("change password call")
            setPassword(e.target.value)
           
          }} /> 
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handelMySubmit}>Submit</button>
      </form>

      <table>
        <tbody>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Paaword:</td>
            <td>{password}</td>
          </tr>
        </tbody>    
      </table>
    </>
  )
}

export default Example1

