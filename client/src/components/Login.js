import React from 'react';
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <a href="/api/auth/google">
        <button variant="raised">Login</button>
      </a>
      <a href="/api/auth/logout">
        <button variant="raised">Logout</button>
      </a>
    </>
  );
}

export default Login;
