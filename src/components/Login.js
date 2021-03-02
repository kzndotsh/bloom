import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  const error = "";
  //replace with error state

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <div data-testid="loginForm" className="login-form">
        {  //build your login form here 
        }
        </div>

        <p data-testid="errorMessage" className="error">{error}</p>
        
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.