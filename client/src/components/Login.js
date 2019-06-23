import React from 'react';
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <a href="/auth/google">
        <button variant="raised">Login</button>
      </a>
      <a href="/auth/logout">
        <button variant="raised">Logout</button>
      </a>
    </>
  );
}

export default Login;
