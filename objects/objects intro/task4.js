// Write a function that creates an object that represents a culinary recipe. Each recipe is described by: 
//name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients.  



function culinaryRecipe (name, cuisine, complexity, ingredients, prepTime, prepInstruction) {

    return {
        name: name, 
        typeOfCuisine: cuisine,
        complexity: complexity,
        listOfIngredients: ingredients,
        preparingTime: prepTime,
        preparingInstruction: prepInstruction,

        printIngredients: function () {             // Add a method that prints out all the ingredients necessary for the meal preparation. 
            return this.listOfIngredients;
        },

        preparationTime: function () {              // Add a method that checks if a meal can be prepared for 15 minutes. 
            if (prepTime <= 15) {
             return "Preparation time is 15 minutes."
            } else {
               return "You need more than 15 minutes for this recipe."
        }
    },

        changeCuisineType: function () {          // Add a method that changes the type of cuisine to the given value. 
           var changeCuisine = this.cuisine;     
    
        return changeCuisine; 
        },

        deleteIngredientFromList: function (ingredientList, number) {  // Add a method that delete a given ingredient from the list of ingredients. 
var newIngredientList = [];
for (var i = 0; i < ingredientList.length; i++) {
    if (ingredientList[i] !== ingredientList[number]) {
        newIngredientList[newIngredientList.length] = ingredientList[i];
    }
        } 
        return newIngredientList;
    }
}
}

var pastaVegetariana = culinaryRecipe("Pasta Vegetariana", "Italian", "3/5", ["tomato", "olives", "corn", "onion", "garlic", "basil", "pasta"], 14, "Cut all ingredients, cook them few minutes and put over pasta.");

console.log(pastaVegetariana.name);
console.log(pastaVegetariana.typeOfCuisine);
console.log(pastaVegetariana.printIngredients());
console.log(pastaVegetariana.preparationTime());
console.log(pastaVegetariana.changeCuisineType());
console.log(pastaVegetariana.deleteIngredientFromList(pastaVegetariana.listOfIngredients, 2));








        


