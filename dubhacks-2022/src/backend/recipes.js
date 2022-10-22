"use strict";

(function() {

  window.addEventListener("load", init);
  const URL = "https://api.spoonacular.com/recipes/findByIngredients";
  const API_KEY = "?apiKey=329c92017f254cae8e17b4e9d04cb88e";
  const RECIPES = "https://api.spoonacular.com/recipes/";

  function init() {
    let ingredients = "apples, flour, sugar"
    getApiData(ingredients);
  }

  function getApiData(ingredients) {
    fetch(URL + API_KEY + "&ingredients=" + ingredients)
      .then(res => res.json())
      .then(processData)
      .catch(handleError);
  }

  function processData(res) {
    for (let i = 0; i < res.length; i++) {
      console.log(i);
      fetch(RECIPES + res[i].id + "/analyzedInstructions" + API_KEY)
        .then(res => res.json())
        .then(getRecipeData)
        .catch(handleError);
    }
  }

  function getRecipeData(recipe) {
    console.log(recipe);
    for (let i = 0; i < recipe.length; i++) {
      let steps = recipe[i].steps;
      let ingredients = [];
      for (let j = 0; j < steps.length; j++) {
        for (let k = 0; k < steps[j].ingredients.length; k++) {
          let item = steps[j].ingredients[k].name;
          if (!ingredients.includes(item)) {
            ingredients.push(item);
          }
        }
      }
      console.log(ingredients);
    }
  }

})();