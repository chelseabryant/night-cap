import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Modal from "./Modal";

export default function Header() {
    const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <Link to="/">Night Cap</Link>
      <Link to="/home-bar">My Home Bar</Link>
      <button onClick={() => setIsOpened(true)}>Sign In</button>
      <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <Login />
      </Modal>
    </div>
  );
}
