import React, { useState } from "react";
import "./BarCart.css";

export default function CartItem({ item, cartItems, setCartItems }) {
  const [editing, setEditing] = useState(false);
  const [editedInput, setEditedInput] = useState(item);

  const onDelete = () => {
    const filteredCart = cartItems.filter(
      (currentItem) => currentItem !== item
    );
    setCartItems(filteredCart);
  };

  const onEditClick = () => {
    setEditing(!editing);

    const updateCartItems = cartItems.map((currentItem) => {
      if (currentItem === item) {
        return editedInput;
      } else {
        return currentItem;
      }
    });
    setCartItems(updateCartItems);
  };

  const editItem = (e) => {
    setEditedInput(e.target.value);
  };

  return (
    <li>
      <input
        value={editedInput}
        className={editing ? "" : "unstyled-input"}
        disabled={!editing}
        onChange={editItem}
      />
      <button onClick={onDelete}>
        Delete
      </button>
      <button onClick={onEditClick}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
