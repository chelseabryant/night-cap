import React from "react";
import { Link, useParams } from "react-router-dom";
import { Data } from "../Data";


export default function CocktailsPage() {
  let routeParams = useParams();

 

  

  return (
    <div>
      <h1>{routeParams.category}</h1>

      <ul>
        <li>
          <Link to={`/cocktails/classic-cocktails`}>Classic Cocktails</Link>
        </li>
        {/* <li>
          <Link to={`/cocktails/props-v-state`}>Props v. State</Link>
        </li> */}
      </ul>
    </div>
  );
}
