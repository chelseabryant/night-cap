import { Link } from "react-router-dom";
import { cocktailCategories } from "../Data";
import { useState } from 'react'
export default function HomePage() {
    const [searchBar, setsearchBar] = useState('')

    const updateInput = (e) => {
       setsearchBar(e.target.value)
       
    }
    console.log(searchBar)
  return (
    <div>
      <h1>Home Page</h1>
      <input placeholder="Search for a cocktail" value={searchBar} onChange={updateInput}></input>
      <button>Search</button>
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
