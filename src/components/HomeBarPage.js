import { Link } from "react-router-dom";
import { cocktailCategories } from "../Data";
import { useState } from "react";
export default function HomeBarPage() {
  const [barCartItem, setbarCartItem] = useState("");
  const [createCocktail, setCreateCocktail] = useState("");

  const addToCart = (e) => {
    setbarCartItem(e.target.value);
  };

  const addIngredient = (e) => {
    setCreateCocktail(e.target.value);
  };
  console.log(createCocktail);
  return (
    <div>
      <div>Home Bar Page</div>

      <ul>
        {cocktailCategories.map((item) => (
          <li>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <input
          placeholder="Add to your bar cart!"
          value={barCartItem}
          onChange={addToCart}
        ></input>
        <button>Add</button>
      </div>
      <div>
        <input
          placeholder="Add ingredient"
          value={createCocktail}
          onChange={addIngredient}
        ></input>
      </div>
    </div>
  );
}
