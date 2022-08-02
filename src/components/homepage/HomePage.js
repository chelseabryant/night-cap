import { Link } from "react-router-dom";
import { cocktailCategories } from "../../data/data";
import { useState } from "react";

import "./HomePage.css";
export default function HomePage() {
  const [searchBar, setsearchBar] = useState("");

  const updateInput = (e) => {
    setsearchBar(e.target.value);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input
        placeholder="Search for a cocktail"
        value={searchBar}
        onChange={updateInput}
      ></input>
      <Link to={`/cocktails/${searchBar}?name=true`}>
        <button>Search</button>
      </Link>
      <ul>
        {cocktailCategories.map((item) => (
          <li>
            <img src={item.photo} className="cocktail-image" />
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
