import { Link } from "react-router-dom";
import { cocktailCategories } from "../../Data";
import { useState } from 'react'
import { getCocktailsByName } from "../../ajax/getCocktailByName";
import './HomePage.css'
export default function HomePage() {
    const [searchBar, setsearchBar] = useState('')


    const fetchCocktails = async () => {
      const data = await getCocktailsByName(searchBar)
      console.log(data)
    }


    const updateInput = (e) => {
       setsearchBar(e.target.value)
       
    }
  return (
    <div>
      <h1>Home Page</h1>
      <input placeholder="Search for a cocktail" value={searchBar} onChange={updateInput}></input>
      <button onClick={fetchCocktails}>Search</button>
      <ul>
        {cocktailCategories.map((item) => (
          <li>
            <img src={item.photo} className='cocktail-image' />
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
