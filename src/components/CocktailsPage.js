import React from "react";
import { Link, useParams } from "react-router-dom";
import { cocktailCategories } from "../Data";



export default function CocktailsPage() {
  let routeParams = useParams();

 

  

  return (
    <div>
      <h1>{routeParams.category[0].toUpperCase() +
       routeParams.category.slice(1)}</h1>

      <ul>
        {cocktailCategories.map((item) => (
          <li>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
