import { useState } from "react";

export default function BarCart({ updateCartItems }) {
  const [barCartInput, setbarCartInput] = useState("");

  const addToCart = (e) => {
    setbarCartInput(e.target.value);
  };

  const onAddClick = () => {
    updateCartItems(barCartInput);
    setbarCartInput("");
  };

  return (
    <div>
      <input
        placeholder="Add to your bar cart!"
        value={barCartInput}
        onChange={addToCart}
      />
      <button onClick={onAddClick}>Add</button>
    </div>
  );
}
