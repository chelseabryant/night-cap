import React, { useState } from "react";
import { authenticate, createAccount } from "../utils/authenticate";

export default function Login({ setIsAuthenticated, isAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreating, setIsCreating] = useState(true);

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    // preventDefault prevents form from refreshing the page when it submits
    e.preventDefault();
    if (isCreating) {
      createAccount(email, password);
      setIsAuthenticated(true);
    } else {
      const authenticated = authenticate(email, password);
      if (authenticated) {
        setIsAuthenticated(true);
      }
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <p>You have successfully signed in!</p>
      ) : (
        <form onSubmit={onSubmit}>
          <h2>{isCreating ? "Create Account" : "Sign In"}</h2>
          <input
            placeholder="Enter Email"
            value={email}
            onChange={emailInput}
          />
          <input
            placeholder="Enter Password"
            value={password}
            onChange={passwordInput}
          />
          <button type="submit">
            {isCreating ? "Create Account" : "Sign In"}
          </button>
          <button type="button" onClick={() => setIsCreating(!isCreating)}>
            {isCreating
              ? "Already have an account?"
              : "Need to create an account?"}
          </button>
        </form>
      )}
    </>
  );
}
