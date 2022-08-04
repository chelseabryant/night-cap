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
        // todo: does this mean if authenticated has value = true? or if email/pw is correct
      const authenticated = authenticate(email, password);
      if (authenticated) {
        setIsAuthenticated(true);
      }
    }
  };
/* Line 57: onClick is changing isCreating to the opposite value. Not to false
    or it will not change back to true. Use bang(!) operator to onClick change
    the value to the opposite of what it is currently. */

    /* Line 57: button type='button', needed for this button because it is inside
        the form and form will make any button a type='submit' as a default*/
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
