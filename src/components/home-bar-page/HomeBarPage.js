import { Link } from "react-router-dom";
import { cocktailCategories } from "../../Data";
import { useState } from "react";
import BarCart from "./BarCart";
import CocktailBuilder from "./CocktailBuilder";
import CartItem from "./CartItem";
import Ingredient from "./Ingredient";
export default function HomeBarPage() {
  const [cartItems, setCartItems] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const updateCartItems = (newItem) => {
    if (newItem && !cartItems.includes(newItem))
      setCartItems([...cartItems, newItem]);
  };

  const updateIngredients = (newIngredient) => {
    if (newIngredient && !ingredients.includes(newIngredient))
      setIngredients([...ingredients, newIngredient]);
  };

  console.log(ingredients);
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

      <BarCart updateCartItems={updateCartItems} />
      <ul>
        {cartItems.map((item) => (
          <CartItem
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </ul>
      <CocktailBuilder updateIngredients={updateIngredients} />
      {ingredients.map((item) => (
        <Ingredient
          item={item}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      ))}
    </div>
  );
}
