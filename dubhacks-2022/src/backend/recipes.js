"use strict";

(function() {

  let coupons = [
    {
        "name_product" : "Breyer's Ice Cream",
        "name_compoany " : "Breyer",
        "type" : "ice cream",
        "store_name" : "QFC",
        "expiry_date" : "25th October 2022",
        "vegetarian" : "yes",
        "meat_type" : "",
        "gluten" : "yes",
        "location" : "98195"
    },
    {
        "name_product" : "Breyer's Ice Cream",
        "name_compoany " : "Breyer",
        "type" : "butter",
        "store_name" : "QFC",
        "expiry_date" : "25th October 2022",
        "vegetarian" : "no",
        "meat_type" : "chicken",
        "gluten" : "yes",
        "location" : "98195"

    }
    ];

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
        .then(getCoupons)
        .catch(handleError);
    }
  }

  function getRecipeData(recipe) {
    let ingredients = [];
    for (let i = 0; i < recipe.length; i++) {
      let steps = recipe[i].steps;
      ingredients = [];
      for (let j = 0; j < steps.length; j++) {
        for (let k = 0; k < steps[j].ingredients.length; k++) {
          let item = steps[j].ingredients[k].name;
          if (!ingredients.includes(item)) {
            ingredients.push(item);
          }
        }
      }
    }
    console.log(ingredients);
    return ingredients;
  }

  function getCoupons(ingredient_list){
    let coupon = processCouponData(coupons, ingredient_list);
    console.log(coupon);
;
  }

  function processCouponData(coupons, ing){
    let arrayCoupon = [];
    for (let i = 0; i < coupons.length; i ++){
      if (ing.includes(coupons[i]["type"])){
        arrayCoupon.push(coupons[i]);
      }
    }
    return arrayCoupon;
  }

})();