import { useState } from "react";

const elvenShieldRecipe = {
  letherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  lether: 1,
  refinedMoonstone: 4,
};

console.log(`elvenShieldRecipe`, elvenShieldRecipe);
console.log(`elvenGauntletsRecipe`, elvenGauntletsRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlets Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => {
          return (
            <li key={material}>
              {material}: {recipe[material]}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return <div></div>;
};

export default Recipes;
