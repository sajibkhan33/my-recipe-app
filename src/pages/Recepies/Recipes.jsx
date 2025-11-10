import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/recipesSlice";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipeSelector = useSelector((state) => state.recipes.items);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <section className="bg-linear-to-b from-yellow-50 to-red-50 min-h-screen py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-linear-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent tracking-wide">
          Explore Our Recipes
        </h1>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {recipeSelector?.length > 0 ? (
            recipeSelector.map((item, index) => (
              <Recipe key={index} item={item} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full text-lg animate-pulse">
              🍳 Loading delicious recipes...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
