import { Routes as AllRoutes, Route } from "react-router-dom";

import CocktailsPage from "./components/cocktails-page/CocktailsPage";
import HomeBarPage from "./components/home-bar-page/HomeBarPage";
import HomePage from "./components/homepage/HomePage";

export default function Routes () {
  return (
    <AllRoutes>
      <Route path="/cocktails/:category" element={<CocktailsPage />} />
      <Route path="/home-bar" element={<HomeBarPage />} />
      <Route path="/" element={<HomePage />} />
    </AllRoutes>
  );
};
