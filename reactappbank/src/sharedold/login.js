import React, { useState } from 'react';
import {authslogin} from '../../service/authentication';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
const [username, setUsername]= useState()
const [password, setPassword]= useState()
const navigate = new useNavigate();

const UserLogin = async()=>{
    let response = await authslogin(username, password)
    console.log(response)


if(response.data){
    if(response.data.roles[1].rolename=='ROLE_ADMIN'){
        locatStorage.setItem('authentication',)
        navigate ('/adminDashboard', response.headers['bearer-token'])  //(key,value)
    }
    //console.log(role)
}
console.log(response)
setUsername('');
setPassword('');
}
return(

    <div className="login-container-background">
    <div className="login-container"> {/* Add a class for styling */}
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={(e) => setUsername} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword} />
      </label>
      <br />
      <button type="submit" onClick={UserLogin}>Login</button>
    </form>
  </div>
  </div>
);
};
export default Login;