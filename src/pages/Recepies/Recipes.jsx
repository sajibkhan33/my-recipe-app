import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/recipesSlice";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);
  const recipeSelector = useSelector((state) => state.recipes.items);
  console.log(recipeSelector);
  return (
    <div>
      <div className="px-6 py-10 bg-gray-50 min-h-screen">
        {/* <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h1> */}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipeSelector?.length > 0 ? (
            recipeSelector.map((item, index) => (
              <Recipe key={index} item={item} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Loading recipes...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
