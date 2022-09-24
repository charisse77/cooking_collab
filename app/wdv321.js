// The Cooking Collaborate

/*
1. Show Recipe when slider is pressed - DONE
If slider is unchecked then hide recipes else display recipe

2. Update Ingredients List based on Serving Size 
If radio button #half is selected then divide default ingredient by 2
If radio button #default is selected then display ingredients list as is
If radio button #double is selected then multiply default ingredient by 2


*/
//ADD RECIPE PAGE//
function pageLoad2(){






document.getElementById("button1").addEventListener("click", addIngredient);



let count=1; 
		function addIngredient(){
		count+=1;
		//INGREDIENT NAME//
		let ingredientsTemplate = document.querySelector("#ingredients_template");
		let inputObj = ingredientsTemplate.content.querySelector("input");
		let labelObj = ingredientsTemplate.content.querySelector("label");	
		
		let inputNode = document.importNode(inputObj, true);
		let labelNode = document.importNode(labelObj, true);
		inputNode.id = "ingredient_name"+count; 
		inputNode.name = "ingredient_name"+count;
		inputNode.placeholder = "Eggs"; 
		labelNode.innerHTML = "Ingredient Name:"; 
		labelNode.htmlFor = "ingredient_name"+count; 
		document.querySelector("#ingredients_display").appendChild(labelNode);
		document.querySelector("#ingredients_display").appendChild(inputNode);

		
		//INGREDIENT NAME//

		//INGREDIENT QUANTITY//
		let inputObj2 = ingredientsTemplate.content.querySelector("input");
		let labelObj2 = ingredientsTemplate.content.querySelector("label");	
		
		let inputNode2 = document.importNode(inputObj2, true);
		let labelNode2 = document.importNode(labelObj2, true);
		inputNode2.id = "ingredient_quantity"+count; 
		inputNode2.name = "ingredient_quantity"+count; 
		labelNode2.innerHTML = "Ingredient Quantity:"; 
		labelNode2.htmlFor = "ingredient_quantity"+count; 
		document.querySelector("#ingredients_display").appendChild(labelNode2);
		document.querySelector("#ingredients_display").appendChild(inputNode2);
		}

		//INGREDIENT QUANTITY//

		function addInstruction(){

			console.log("inside add instruction")
			count+=1;

		let ingNameTemp = document.querySelector("#instruction_template");
		let inputObj3 = ingNameTemp.content.querySelector("input");
		let labelObj3 = ingNameTemp.content.querySelector("label");	
		
		let inputNode3 = document.importNode(inputObj3, true);
		let labelNode3 = document.importNode(labelObj3, true);
		inputNode3.id = "instructions"+count; 
		inputNode3.name = "instructions"+count;
		inputNode3.placeholder = "Additonal Step"; 
		labelNode3.innerHTML = "Instructions:"; 
		labelNode3.htmlFor = "instructions"+count; 
		document.querySelector("#instructions_display").appendChild(labelNode3);
		document.querySelector("#instructions_display").appendChild(inputNode3);

		

		}

		document.getElementById("button2").addEventListener("click", addInstruction);


//END ADDING INGREDIENT AND INSTRUCTION BUTTONS//

//STORING ADDED RECIPE INTO JS OBJ//



let recipeBook = [];
let recipeCount=2;
function addRecipe(){

	let recipe = {
		recipe_name: document.getElementById("recipe_title").value,
		servings: document.getElementById("servings").value,
		recipe_prep: document.getElementById("prep_time").value,
		recipe_cooking_time: document.getElementById("cook_time").value,
		recipe_difficulty: document.getElementById("difficulty").value,
		ingredients:[
			{
				quantity: document.getElementById("ingredient_quantity").value,
				item: document.getElementById("ingredient_name").value,
			},
			{
				quantity: document.getElementById("ingredient_quantity").value,
				item: document.getElementById("ingredient_name").value,
			},
		],
	instructions:[
		{
			step: document.getElementById("instructions").value,
		},
		{
			step: document.getElementById("instructions").value,
		},
		
	],
	recipe_image: document.querySelector("input[type='file']").value,
	}

	recipeBook.push(recipe);
	// console.log(recipe)
localStorage.setItem('recipeBook1', JSON.stringify(recipeBook));
// array.push(object);  -- ADDS OBJECT TO END OF ARRAY 
// array.unshift(object); -- ADDS OBJECT TO START OF ARRAY 
}


function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function validateForm(){
	let successBlock=document.querySelector(".successMsg");

	let title=document.querySelector("#recipe_title").value;
	let servings=document.querySelector("#servings").value;
	let prep=document.querySelector("#prep_time").value;
	let cook=document.querySelector("#cook_time").value;
	let diff=document.querySelector("#difficulty").value;
	let ingName=document.querySelector("#ingredient_name").value;
	let ingQuantity=document.querySelector("#ingredient_quantity").value;
	let instruction=document.querySelector("#instructions").value;
	let image = document.querySelector("input[type='file']");


	if (title == "") {
	  alert("Form must be filled out");
	  return false; 
	} else if (successBlock.style.display === "none") {
		successBlock.style.display = "block";
	  } else {
		successBlock.style.display = "none";
	  }
  }














let submitButton = document.getElementById("submit");
// document.getElementById("submit").addEventListener("click", successMsg);

submitButton.addEventListener('click',() => {    

	topFunction(); 
	validateForm();
    addRecipe();
});

console.log(recipeBook)
//END STORING ADDED RECIPE INTO JS OBJ//

//END ADD RECIPE//








		
	
}//PAGELOAD

//END ADD RECIPE PAGE//




//CREATE JSON OBJECTS//
let jsRecipe1 = {
	recipe_name: "3 Cheese Garlic Bread",
	servings:[1,2,4],
	recipe_prep: "30 minutes",
	recipe_difficulty: "Easy",
	ingredients:[
			{
				quantity: 1, 
				item: "stick of butter softened"
			},
			{
				quantity: 4,
				item: "cloves garlic, minced"
			},
			{
				quantity: 0.3,
				item: "cup parmesan cheese"
			},
			{
				quantity: 0.3,
				item: "cup shredded monterey jack cheese"
			},
			{
				quantity: 0.3,
				item: "cup shredded cheddar cheese"
			},
			{
				quantity: 0.3,
				item: "cup fresh green onion, sliced"
			},
			{
				quantity: 1,
				item: "baguette, 8 inch (20 cm)"
			}
		],
	instructions:["Preheat oven to 400°F (200°C).", "In a bowl, combine all of the ingredients except the baguette, and mix until smooth.", "Slice the baguette in half lengthwise, then spread the butter mixture evenly on both sides of the baguette.", "Place on a tray lined with parchment paper and bake for about 15 minutes, until cheese is bubbly and starting to brown on the edges.", "Slice, cool, then serve."
	
		],
};

let jsRecipe2 = {
	recipe_name: "German Potato Dumplings",
	servings:[4,8,16],
	recipe_prep: "40 minutes",
	recipe_difficulty: "Easy",
	ingredients:[
			{
				quantity: 3, 
				item: "pounds medium potatoes (about 10), peeled and quartered"
			},
			{
				quantity: 1,
				item: "cup all-purpose flour"
			},
			{
				quantity: 3,
				item: "large eggs, lightly beaten"
			},
			{
				quantity: 1,
				item: "cup dry bread crumbs"
			},
			{
				quantity: 1,
				item: "teaspoon salt"
			},
			{
				quantity: 0.5,
				item: "teaspoon ground nutmeg"
			},
			{
				quantity: 0.5,
				item: "cup butter, cubed - for Brown Butter Sauce"
			},
			{
				quantity: 1,
				item: "tablespoon chopped onion - for Brown Butter Sauce"
			},
			{
				quantity: 0.25,
				item: "cup dry bread crumbs - for Brown Butter Sauce"
			},

		],
	instructions:["Place potatoes in a Dutch oven. Add water to cover. Bring to a boil.", "Reduce heat cook uncovered, 15-20 minutes.", "Mash potatoes. Stir in flour, eggs, bread crumbs, salt and nutmeg. Shape into sixteen (2-in.) balls.", "In a Dutch oven, bring 12 cups water to a boil. Carefully add dumplings. Reduce heat; simmer, uncovered, 7-9 minutes or until a toothpick inserted in center of dumplings comes out clean.", "Meanwhile, in a small heavy saucepan, heat butter and onion over medium heat. Heat 5-7 minutes or until butter is golden brown, stirring constantly. Remove from heat; stir in bread crumbs. Serve with dumplings."
	
		],
};

let jsRecipe3 = {
	recipe_name: "Spicy Thai Basil Chicken (Pad Krapow Gai)",
	servings:[1.5,3,6],
	recipe_prep: "25 minutes",
	recipe_difficulty: "Easy",
	ingredients:[
			{
				quantity: 0.3, 
				item: "cup chicken broth"
			},
			{
				quantity: 1,
				item: "tablespoon oyster sauce"
			},
			{
				quantity: 1,
				item: "teaspoon white sugar"
			},
			{
				quantity: 1,
				item: "teaspoon brown sugar"
			},
			{
				quantity: 2,
				item: "tablespoons vegetable oil"
			},
			{
				quantity: 0.25,
				item: "cup sliced shallots"
			},
			{
				quantity: 2,
				item: "tablespoons minced Thai chilies, Serrano, or other hot pepper"
			},
			{
				quantity: 1,
				item: "cup very thinly sliced fresh basil leaves"
			},
			{
				quantity: 2,
				item: "cups hot cooked rice"
			},
			
		],
	instructions:["Whisk chicken broth, oyster sauce, soy sauce, fish sauce, white sugar, and brown sugar together in a bowl until well blended.", "Heat large skillet over high heat. Drizzle in oil. Add chicken and stir fry until it loses its raw color, 2 to 3 minutes. Stir in shallots, garlic, and sliced chilies.", "Continue cooking on high heat until some of the juices start to caramelize in the bottom of the pan, about 2 or 3 more minutes. Add about a tablespoon of the sauce mixture to the skillet; cook and stir until sauce begins to caramelize, about 1 minute.", "Pour in the rest of the sauce. Cook and stir until sauce has deglazed the bottom of the pan. Continue to cook until sauce glazes onto the meat, 1 or 2 more minutes. Remove from heat.", "Stir in basil. Cook and stir until basil is wilted, about 20 seconds. Serve with rice."
	
		],
};

localStorage.setItem('recipe1', JSON.stringify(jsRecipe1));
localStorage.setItem('recipe2', JSON.stringify(jsRecipe2));
localStorage.setItem('recipe3', JSON.stringify(jsRecipe3));
//END CREATE JSON OBJECTS//


