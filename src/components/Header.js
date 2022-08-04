import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../utils/authenticate";
import Login from "./Login";
import Modal from "./Modal";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("current_user"))
/* isAuthenticated will return a boolean. the useState ^ argment is seeing if there is
    a key item called user_name in the local storage, then evaluates to true or false.
    The console.log on line 19 will log is true or false.*/


const logOut = () => {
    localStorage.removeItem('current_user')
    setIsAuthenticated(false)
}
console.log("header: ", isAuthenticated);

/* When wanting to do an 'if' statement in the jsx return, need to make it
    a ternary operator. example below*/
  return (
    <div>
      <Link to="/">Night Cap</Link>
      <Link to="/home-bar">My Home Bar</Link>
      {isAuthenticated ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={() => setIsOpened(true)}>
          "Sign in/Sign up"
        </button>
      )}
      <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
      </Modal>
    </div>
  );
}
