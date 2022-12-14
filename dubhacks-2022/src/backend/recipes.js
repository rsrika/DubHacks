"use strict";



  // let coupons = [
  //   {
  //       "name_product" : "Breyer's Ice Cream",
  //       "name_company" : "Breyer",
  //       "type" : "ice cream",
  //       "store_name" : "QFC",
  //       "expiry_date" : "25th October 2022",
  //       "vegetarian" : "yes",
  //       "meat_type" : "",
  //       "gluten" : "yes",
  //       "location" : "98195",
  //       "savings" : "1",
  //       "final_price" : ""
  //   },
  //   {
  //       "name_product" : "Ben and Jerry's Ice Cream",
  //       "name_company" : "Ben and Jerry's",
  //       "type" : "ice cream",
  //       "store_name" : "QFC",
  //       "expiry_date" : "25th October 2022",
  //       "vegetarian" : "yes",
  //       "meat_type" : "",
  //       "gluten_free" : "no",
  //       "location" : "98195",
  //       "savings" : "3.2",
  //       "final_price" : "3.79"

  //   },

  //   {
  //       "name_product" : "Qfc Milk",
  //       "name_company" : "Kroger",
  //       "type" : "milk",
  //       "store_name" : "QFC",
  //       "expiry_date" : "25th October 2022",
  //       "vegetarian" : "yes",
  //       "meat_type" : "",
  //       "gluten_free" : "yes",
  //       "location" : "98195",
  //       "savings" : ".6",
  //       "final_price" : "1.29"

  //   },
  //   {
  //       "name_product" : "Kroger Ground Coffee",
  //       "name_company" : "Kroger",
  //       "type" : "coffee",
  //       "store_name" : "QFC",
  //       "expiry_date" : "25th October 2022",
  //       "vegetarian" : "yes",
  //       "meat_type" : "",
  //       "gluten_free" : "yes",
  //       "location" : "98195",
  //       "savings" : "2.5",
  //       "final_price" : ""

  //   },
  //   {
  //       "name_product" : "Kroger Supreme Blend Medium Roast Ground Coffee",
  //       "name_company" : "Kroger",
  //       "type" : "coffee",
  //       "store_name" : "QFC",
  //       "expiry_date" : "25th October 2022",
  //       "vegetarian" : "yes",
  //       "meat_type" : "",
  //       "gluten_free" : "yes",
  //       "location" : "98195",
  //       "savings" : "2.5",
  //       "final_price" : ""

  //   },
  //   {
  //       "name_product" : "Fettuccine Pasta",
  //       "name_company" : "American Beauty",
  //       "type" : "long pasta",
  //       "store_name" : "QFC",
  //       "expiry_date" : "14 November 2022",
  //       "vegetarian" : "yes",
  //       "meat_type" : "",
  //       "gluten_free" : "no",
  //       "location" : "98195",
  //       "savings" : ".4",
  //       "final_price" : "3.19"
  //   },
  //   {
  //       "name_product" : "Long Spaghetti Pasta",
  //       "name_company" : "American Beauty",
  //       "type" : "long pasta",
  //       "store_name" : "QFC",
  //       "expiry_date" : "14 November 2022",
  //       "vegetarian" : "yes",
  //       "meat_type" : "",
  //       "gluten_free" : "no",
  //       "location" : "98195",
  //       "savings" : ".4",
  //       "final_price" : "3.19"
  //   },
  //   {
  //       "name_product" : "Elbow Macaroni Pasta",
  //       "name_company" : "American Beauty",
  //       "type" : "short pasta",
  //       "store_name" : "QFC",
  //       "expiry_date" : "14 November 2022",
  //       "vegetarian" : "yes",
  //       "meat_type" : "",
  //       "gluten_free" : "no",
  //       "location" : "98195",
  //       "savings" : ".4",
  //       "final_price" : "3.19"

  //   }
  //   ];
  import coupon_data from "./coupon.json";
  let coupons = coupon_data;

  // //window.addEventListener("load", init);
  const URL = "https://api.spoonacular.com/recipes/findByIngredients";
  const API_KEY = "?apiKey=22e0579217f64e189d881c329014c373";
  const RECIPES = "https://api.spoonacular.com/recipes/";

  // // function init() {
  // //   let ingredients = "apples, flour, sugar"
  // //   getApiData(ingredients);
  // // }

  let title_array = [];
  let steps_array = [];


  //takes in coupon "type" and returns all recipes
  export function getRecipes(ingredient){
     fetch(URL + API_KEY + "&ingredients=" + ingredient)
     .then(res => res.json())
     .then(iterateRecipeList);
   }

  // iterates through recipe list, gives only title, image, id
   export function iterateRecipeList(res){
    title_array = [];
    for (let i = 0; i < res.length; i++){
     title_array[i] = {
       "title" : res[i].title,
       "image" : res[i].image,
       "id" : res[i].id
     };
    }
    console.log(title_array);
  }

  // given recipe id, get recipe info
  export function getRecipeInfo(id) {
    fetch(RECIPES + id + "/analyzedInstructions" + API_KEY)
      .then(res => res.json())
      .then(getRecipeIngredients);
  }

  // get steps
  export function getRecipeSteps(recipe) {
    steps_array = [];
    for (let i = 0; i < recipe.length; i++) {
      let steps = recipe[i].steps;
      for (let j = 0; j < steps.length; j++) {
        steps_array.push(steps[j].step);
      }
    }
    return steps_array;
  }

  export function getRecipeIngredients(recipe) {
    let ingredients_array = [];
    for (let i = 0; i < recipe.length; i++) {
      let steps = recipe[i].steps;
      for (let j = 0; j < steps.length; j++) {
        if (steps[j].ingredients) {
          for (let k = 0; k < steps[j].ingredients.length; k++) {
            if (!ingredients_array.includes(steps[j].ingredients[k].name)) {
              ingredients_array.push(steps[j].ingredients[k].name);
            }
          }
        }
      }
    }
    return ingredients_array;
  }


  // export function getApiData(ingredients) {
  //   fetch(URL + API_KEY + "&ingredients=" + ingredients)
  //     .then(res => res.json())
  //     .then(processData);
  // }

  // function getRecipeInfo(res) {

  // }

  // function processData(res) {
  //   for (let i = 0; i < res.length; i++) {
  //     //console.log(i);
  //     fetch(RECIPES + res[i].id + "/analyzedInstructions" + API_KEY)
  //       .then(res => res.json())
  //       .then(getRecipeData)
  //       .then(getCoupons);

  //   }
  // }

  // function getRecipeData(recipe) {
  //   let ingredients = [];
  //   for (let i = 0; i < recipe.length; i++) {
  //     let steps = recipe[i].steps;
  //     ingredients = [];
  //     for (let j = 0; j < steps.length; j++) {
  //       for (let k = 0; k < steps[j].ingredients.length; k++) {
  //         let item = steps[j].ingredients[k].name;
  //         if (!ingredients.includes(item)) {
  //           ingredients.push(item);
  //         }
  //       }
  //     }
  //   }
  //   return ingredients;
  // }

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

   export function searchCoupon(couponName) {
    let result = [];
    for (let i = 0; i < coupons.length; i++) {
      let current = coupons[i];
      if (current.name_product.includes(couponName) || current.name_company.includes(couponName) || current.store_name.includes(couponName) ||
        current.type.includes(couponName)) {
        result.push(current);
      }
    }
    return result;
  }


