import "./styles/index.scss";

const elvenShiedlRecipe = {
    letherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShiedlRecipe,
    lether: 1,
    refinedMoonstone: 4,
}

console.log(`elvenShiedlRecipe`, elvenShiedlRecipe)
console.log(`elvenGauntletsRecipe`, elvenGauntletsRecipe)