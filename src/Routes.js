import { Routes as AllRoutes, Route } from "react-router-dom";

import CocktailsPage from "./components/CocktailsPage";
import HomeBarPage from "./components/HomeBarPage";
import HomePage from "./components/HomePage";

export default function Routes () {
  return (
    <AllRoutes>
      <Route path="/cocktails/:category" element={<CocktailsPage />} />
      <Route path="/home-bar" element={<HomeBarPage />} />
      <Route path="/" element={<HomePage />} />
    </AllRoutes>
  );
};
