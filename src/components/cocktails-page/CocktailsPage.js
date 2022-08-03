import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getCocktailsByName } from "../../ajax/getCocktailByName";
import { getCocktailsByIngredient } from "../../ajax/getCocktailsByIngredient";
import { cocktailCategories } from "../../data/data";
import CocktailInfo from "./CocktailInfo";

export default function CocktailsPage() {
  const [cocktails, setCocktails] = useState([]);
  const routeParams = useParams();
  const [queryParams] = useSearchParams();

  const fetchCocktailByName = async (name) => {
    const data = await getCocktailsByName(name);
    return data;
  };

  const fetchCocktails = async () => {
    if (queryParams.get("name") === "true") {
      const data = await getCocktailsByName(routeParams.category);
      setCocktails(data.drinks);
      console.log(data);
    } else {
      /* Searches the API for a cocktail with a specific ingredient.
      Need to use the cocktail names this provides to get more data about each cocktail. */

      /* 1. The variable "data" created(below), invokes getCocktailsByIngredients with an argument of the string at the end of the URL.
       2. Await pauses the rest of the code from running until getCocktailsByIngredients has returned a propmise.
       3. Await will open up the promise and hand the value(which is an obect) to the data variable.
       4. New variable "fullData" created, runs .map() on the previous variable "data" which holds a value of an object,
          using .drinks to isolate the key inside said object. The drinks key holds an array as it's value. We use .map()
          to map through each item in that array.
       5. Inside the function .map(), "drink" is a parameter with the value of a single item in the array.
       6. Using the arrow funtion to run the callback function fetchCocktailByName holding the isolated cocktail name as an argument.
       7. fetchCocktailByName(^above) passes the argument to the parameter "name".
       8. The variable "data" created, invokes getCocktailByName with the value of "name"(which is a string aka the cocktail name)
          as an argument.
       9. Await pauses the rest of the code from running until getCocktailsByName has returned a propmise.
       10. Await will open up the promise and hand the value to the data variable (the value is an object).
       11. fetchCocktailByName will return the value of "data" (spitting out the value and returning it to where the function was called on)
       12. Replacing(below) the fetchCocktailByName(), which will then hand that value to .map() to hold until .map() had finished running
          through the array.
       13. When .map() had gone through the whole array and holds every object that it was passed in an array, it will pass that value(the array)
          to "fullData", updating the value of fullData to be an array of objects. */
      const data = await getCocktailsByIngredient(routeParams.category);
      // console.log('data: ', data)
      const fullData = await Promise.all(
        data.drinks.map(async (drink) => {
          const fetchResponse = await fetchCocktailByName(drink.strDrink);
          return fetchResponse.drinks[0];
        })
      );
      // fullData = [{..}. {..}, {..}]
      // {..} = {drinks: [{this is a cocktail object}]}

      // cocktails needs to be in this shape [{cocktail object}]
      setCocktails(fullData);
    }
  };
  console.log("COCkltAIL", cocktails);

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
          <li key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <div>
        {cocktails.map((cocktail) => (
          <CocktailInfo key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
}
