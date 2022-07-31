import React from "react";

export default function Ingredient({ item, ingredients, setIngredients }) {
  const onDelete = () => {
    const filteredIngredients = ingredients.filter(
      (currentIngredient) => currentIngredient !== item
    );
    setIngredients(filteredIngredients);
  };

  return (
    <li>
      <span>{item}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
