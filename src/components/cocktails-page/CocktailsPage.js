import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getCocktailsByName } from "../../ajax/getCocktailByName";
import { getCocktailsByIngredient } from "../../ajax/getCocktailsByIngredient";
import { cocktailCategories } from "../../data/data";
import CocktailInfo from "./CocktailInfo";


export default function CocktailsPage() {
  const [cocktails, setCocktails] = useState([]);
  const routeParams = useParams();
  const [queryParams] = useSearchParams()

  const fetchCocktailByName = async (name) => {
    const data = await getCocktailsByName(name)
    return data
  }


  const fetchCocktails = async () => {
    if (queryParams.get("name") === "true") {
      const data = await getCocktailsByName(routeParams.category);
      setCocktails(data.drinks);
      console.log(data)
    } else {
      /* Searches the API for a cocktail with a specific ingredient.
      Need to use the cocktail names this provides to get more data about each cocktail. */
      const data = await getCocktailsByIngredient(routeParams.category)
      console.log('data: ', data)
      const fullData = data.drinks.map(drink => fetchCocktailByName(drink.strDrink))

      setCocktails(data.drinks)
     
    }
  
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div>
      <h1>
        {routeParams.category[0].toUpperCase() + routeParams.category.slice(1)}
      </h1>

      <ul>
        {cocktailCategories.map((item) => (
          <li>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        {cocktails.map((cocktail) => (
          <CocktailInfo cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
}
