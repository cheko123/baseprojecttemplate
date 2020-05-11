import React from "react";
import auth from "./auth";

export const LandingPage = props => {
  return (
    <div>
      <h1>Login Page</h1>
      <input type="email" />
      <input type="password" />
      <button
        onClick={() => {
          auth.login("sergio", "123");
          if (auth.isAuthenticated) {
            props.history.push("/home");
          } else {
            alert("Error");
          }
        }}
      >
        Login
      </button>
    </div>
  );
};
