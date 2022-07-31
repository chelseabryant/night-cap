import { useState } from "react";

export default function CocktailBuilder({ updateIngredients }) {
  const [ingredientInput, setIngredientInput] = useState("");

  const addIngredient = (e) => {
    setIngredientInput(e.target.value);
  };

  const onAddClick = () => {
    updateIngredients(ingredientInput);
    setIngredientInput("");
  };

  return (
    <div>
      <input
        placeholder="Add ingredient"
        value={ingredientInput}
        onChange={addIngredient}
      />
      <button onClick={onAddClick}>Add</button>
    </div>
  );
}
