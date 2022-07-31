import React from "react";

export default function CartItem({ item, cartItems, setCartItems }) {
  const onDelete = () => {
    const filteredCart = cartItems.filter(
      (currentItem) => currentItem !== item
    );
    setCartItems(filteredCart);
  };

  return (
    <li>
      <input value={item} />
      <button on onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}
