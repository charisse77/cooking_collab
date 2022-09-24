let recipe1Obj = JSON.parse(localStorage.getItem('recipe1'));
let recipe2Obj = JSON.parse(localStorage.getItem('recipe2'));
let recipe3Obj = JSON.parse(localStorage.getItem('recipe3'));

let recipe4Obj = JSON.parse(localStorage.getItem('recipeBook1'));

console.log(recipe1Obj);
console.log(recipe2Obj);
console.log(recipe3Obj);
console.log("This is recipe4Obj below")
console.log(recipe4Obj);

function pageLoad(){

  

  function recipe1(){
console.log("inside recipe1")
//RECIPE ONE NAME-PREP-DIFFICULTY//
document.querySelector(".recipeName").innerHTML = recipe1Obj.recipe_name; 
document.querySelector(".prepTime").innerHTML = recipe1Obj.recipe_prep; 
document.querySelector(".difficultyLevel").innerHTML = recipe1Obj.recipe_difficulty; 
	
//END RECIPE ONE NAME-PREP-DIFFICULTY//
	
	
//RECIPE ONE RADIO BUTTONS//	
let radioName = "serving_size";
let radioTemp = document.querySelector("#radio");
let radioInput = radioTemp.content.querySelector("input");
let radioLabel = radioTemp.content.querySelector("label");
	
for(x=0; x< recipe1Obj.servings.length; x++){
radioInputNode = document.importNode(radioInput, true);
radioLabelNode = document.importNode(radioLabel, true);
radioLabelNode.innerHTML = recipe1Obj.servings[x];
radioLabelNode.htmlFor = recipe1Obj.servings[x];
radioInputNode.id = recipe1Obj.servings[x];
radioInputNode.name = radioName;
radioInputNode.value = recipe1Obj.servings[x];
document.querySelector("#radio_display").appendChild(radioInputNode);
document.querySelector("#radio_display").appendChild(radioLabelNode);
		
}
	
document.getElementById("1").addEventListener("click", calculateServing);
document.getElementById("2").addEventListener("click", calculateServing);
document.getElementById("4").addEventListener("click", calculateServing);
	

function calculateServing(){
	//alert("inside calculate Serving");
	const DOUBLE_SERVING = 2;
	const QUAD_SERVING = 4;

	let oneServing = recipe1Obj.servings[0];
	let twoServings = recipe1Obj.servings[1];
	let fourServings = recipe1Obj.servings[2];

	let oneServingButton = document.getElementById("1").checked; 
	let twoServingButton = document.getElementById("2").checked; 
	let fourServingButton = document.getElementById("4").checked; 

	let element = document.querySelectorAll("li.hideServing1");
	let element2 = document.querySelectorAll("li.hideServing2");
	let element3 = document.querySelectorAll("li.hideServing4");  

	if(oneServingButton == true){
		console.log("serving selected is 1")
		for(let i=0; i<element.length; i++){
			element[i].style.display = "list-item";
		}

		for(let i=0; i<element3.length; i++){
			element2[i].style.display = "none";
		}

		for(let i=0; i<element2.length; i++){
			element2[i].style.display = "none";
		}

	}

	if(twoServingButton == true){
		console.log("serving selected is 2")
		for(let i=0; i<element.length; i++){
		element[i].style.display = "none";
	   }

	   for(let i=0; i<element3.length; i++){
		element3[i].style.display = "none";
	   }

	   	for(let i = 0, l = recipe1Obj.ingredients.length; i < l; i++){
			var obj = recipe1Obj.ingredients[i];
			var obj2 = recipe1Obj.ingredients[i].quantity;
			let newQuantity = obj2 * DOUBLE_SERVING; 
			var obj3 = recipe1Obj.ingredients[i].item;
			var li = document.createElement("li")
			li.classList.add("hideServing2");;
			li.innerText = newQuantity + " " + obj3;
			list1.appendChild(li);
			
		}
	}

	if(fourServingButton == true){
		console.log("serving selected is 4")
		for(let i=0; i<element.length; i++){
		element[i].style.display = "none";
	   }

	   for(let i=0; i<element2.length; i++){
		element2[i].style.display = "none";
	   }

	   	for(let i = 0, l = recipe1Obj.ingredients.length; i < l; i++){
			var obj = recipe1Obj.ingredients[i];
			var obj2 = recipe1Obj.ingredients[i].quantity;
			let newQuantity = obj2 * QUAD_SERVING; 
			var obj3 = recipe1Obj.ingredients[i].item;
			var li = document.createElement("li")
			li.classList.add("hideServing4");;
			li.innerText = newQuantity + " " + obj3;
			list1.appendChild(li);
			
		}
	}

	
}//END CALCULATESERVING() 


//END RECIPE ONE RADIO BUTTONS//

	
//RECIPE ONE LISTS//
let list1 = document.querySelector("#ingredientList"); 
let list1a = document.querySelector("#instructionList");



for(let i = 0, l = recipe1Obj.ingredients.length; i < l; i++){
			var obj = recipe1Obj.ingredients[i];
			var obj2 = recipe1Obj.ingredients[i].quantity;
			var obj3 = recipe1Obj.ingredients[i].item;
			var li = document.createElement("li");
			li.classList.add("hideServing1");
			li.innerText = obj2 + " " + obj3;
			list1.appendChild(li);
		}	
		
		for(let i = 0, l = recipe1Obj.instructions.length; i < l; i++){
			var obj = recipe1Obj.instructions[i];
			var li = document.createElement("li");
			li.innerText = obj;
			list1a.appendChild(li);
		}
			

}
recipe1();

function recipe2(){
	console.log("inside recipe2");
//NAME-PREP-DIFFICULTY//
document.querySelector(".recipeName2").innerHTML = recipe2Obj.recipe_name; 
document.querySelector(".prepTime2").innerHTML = recipe2Obj.recipe_prep; 
document.querySelector(".difficultyLevel2").innerHTML = recipe2Obj.recipe_difficulty; 
	
//END NAME-PREP-DIFFICULTY//

//CREATE RADIO BUTTONS//
let radioName = "serving_size";
let radioTemp = document.querySelector("#radio2");
let radioInput = radioTemp.content.querySelector("input");
let radioLabel = radioTemp.content.querySelector("label");
	
for(x=0; x< recipe2Obj.servings.length; x++){
radioInputNode = document.importNode(radioInput, true);
radioLabelNode = document.importNode(radioLabel, true);
radioLabelNode.innerHTML = recipe2Obj.servings[x];
radioLabelNode.htmlFor = recipe2Obj.servings[x];
radioInputNode.id = recipe2Obj.servings[x];
radioInputNode.name = radioName;
radioInputNode.value = recipe2Obj.servings[x];
document.querySelector("#radio_display2").appendChild(radioInputNode);
document.querySelector("#radio_display2").appendChild(radioLabelNode);
		
}
//CREATE RADIO BUTTONS//

//CREATE INSTRUCTION AND INGREDIENT LIST//
let list1 = document.querySelector("#ingredientList2"); 
let list1a = document.querySelector("#instructionList2");

for(let i = 0, l = recipe2Obj.instructions.length; i < l; i++){
			var obj = recipe2Obj.instructions[i];
			var li = document.createElement("li");
			li.innerText = obj;
			list1a.appendChild(li);
		}

		for(let i = 0, l = recipe2Obj.ingredients.length; i < l; i++){
			var obj = recipe2Obj.ingredients[i];
			var obj2 = recipe2Obj.ingredients[i].quantity;
			var obj3 = recipe2Obj.ingredients[i].item;
			var li = document.createElement("li");
			li.classList.add("hideServing1a");
			li.innerText = obj2 + " " + obj3;
			list1.appendChild(li);
		}	

//CREATE INSTUCTION AND INGREDIENT LIST//

//CALCULATE SERVINGS//

document.getElementById("4").addEventListener("click", calculateServing);
document.getElementById("8").addEventListener("click", calculateServing);
document.getElementById("16").addEventListener("click", calculateServing);

function calculateServing(){
	console.log("inside recipe2 calculate function")
	const DOUBLE_SERVING = 2;
	const QUAD_SERVING = 4;

	let oneServing = recipe2Obj.servings[0];
	let twoServings = recipe2Obj.servings[1];
	let fourServings = recipe2Obj.servings[2];

	let oneServingButton = document.getElementById("4").checked; 
	let twoServingButton = document.getElementById("8").checked; 
	let fourServingButton = document.getElementById("16").checked; 

	let element = document.querySelectorAll("li.hideServing1a");
	let element2 = document.querySelectorAll("li.hideServing2a");
	let element3 = document.querySelectorAll("li.hideServing4a");  


	if(oneServingButton == true){
		console.log("serving selected is 1")

		for(let i=0; i<element.length; i++){
			element[i].style.display = "list-item";
		}

		for(let i=0; i<element2.length; i++){
			element2[i].style.display = "none";
		}

		for(let i=0; i<element3.length; i++){
			element3[i].style.display = "none";
		}



	}

	if(twoServingButton == true){
		console.log("serving selected is 2")
		for(let i=0; i<element.length; i++){
		element[i].style.display = "none";
	   }

	   for(let i=0; i<element3.length; i++){
		element3[i].style.display = "none";
	   }

	   	for(let i = 0, l = recipe2Obj.ingredients.length; i < l; i++){
			var obj = recipe2Obj.ingredients[i];
			var obj2 = recipe2Obj.ingredients[i].quantity;
			let newQuantity = obj2 * DOUBLE_SERVING; 
			var obj3 = recipe2Obj.ingredients[i].item;
			var li = document.createElement("li")
			li.classList.add("hideServing2a");;
			li.innerText = newQuantity + " " + obj3;
			list1.appendChild(li);
			
		}
	}

	if(fourServingButton == true){
		console.log("serving selected is 4")
		for(let i=0; i<element.length; i++){
		element[i].style.display = "none";
	   }

	   for(let i=0; i<element2.length; i++){
		element2[i].style.display = "none";
	   }

	   	for(let i = 0, l = recipe2Obj.ingredients.length; i < l; i++){
			var obj = recipe2Obj.ingredients[i];
			var obj2 = recipe2Obj.ingredients[i].quantity;
			let newQuantity = obj2 * QUAD_SERVING; 
			var obj3 = recipe2Obj.ingredients[i].item;
			var li = document.createElement("li")
			li.classList.add("hideServing4a");;
			li.innerText = newQuantity + " " + obj3;
			list1.appendChild(li);
			
		}
	}



}

//CALCULATE SERVINGS//
	
}

recipe2(); 

function recipe3(){
	console.log("inside recipe3");

//NAME-PREP-DIFFICULTY//
document.querySelector(".recipeName3").innerHTML = recipe3Obj.recipe_name; 
document.querySelector(".prepTime3").innerHTML = recipe3Obj.recipe_prep; 
document.querySelector(".difficultyLevel3").innerHTML = recipe3Obj.recipe_difficulty; 
	
//END NAME-PREP-DIFFICULTY//

//CREATE RADIO BUTTONS//
let radioName = "serving_size";
let radioTemp = document.querySelector("#radio3");
let radioInput = radioTemp.content.querySelector("input");
let radioLabel = radioTemp.content.querySelector("label");
	
for(x=0; x< recipe3Obj.servings.length; x++){
radioInputNode = document.importNode(radioInput, true);
radioLabelNode = document.importNode(radioLabel, true);
radioLabelNode.innerHTML = recipe3Obj.servings[x];
radioLabelNode.htmlFor = recipe3Obj.servings[x];
radioInputNode.id = recipe3Obj.servings[x];
radioInputNode.name = radioName;
radioInputNode.value = recipe3Obj.servings[x];
document.querySelector("#radio_display3").appendChild(radioInputNode);
document.querySelector("#radio_display3").appendChild(radioLabelNode);
		
}
//CREATE RADIO BUTTONS//

//CREATE INSTRUCTION AND INGREDIENT LIST//
let list1 = document.querySelector("#ingredientList3"); 
let list1a = document.querySelector("#instructionList3");

for(let i = 0, l = recipe3Obj.instructions.length; i < l; i++){
			var obj = recipe3Obj.instructions[i];
			var li = document.createElement("li");
			li.innerText = obj;
			list1a.appendChild(li);
		}

		for(let i = 0, l = recipe3Obj.ingredients.length; i < l; i++){
			var obj = recipe3Obj.ingredients[i];
			var obj2 = recipe3Obj.ingredients[i].quantity;
			var obj3 = recipe3Obj.ingredients[i].item;
			var li = document.createElement("li");
			li.classList.add("hideServing1b");
			li.innerText = obj2 + " " + obj3;
			list1.appendChild(li);
		}	

//CREATE INSTUCTION AND INGREDIENT LIST//

//CALCULATE SERVINGS//

document.getElementById("1.5").addEventListener("click", calculateServing);
document.getElementById("3").addEventListener("click", calculateServing);
document.getElementById("6").addEventListener("click", calculateServing);

function calculateServing(){
	console.log("inside recipe3 calculate function")
	const DOUBLE_SERVING = 2;
	const QUAD_SERVING = 4;

	let oneServing = recipe2Obj.servings[0];
	let twoServings = recipe2Obj.servings[1];
	let fourServings = recipe2Obj.servings[2];

	let oneServingButton = document.getElementById("1.5").checked; 
	let twoServingButton = document.getElementById("3").checked; 
	let fourServingButton = document.getElementById("6").checked; 

	let element = document.querySelectorAll("li.hideServing1b");
	let element2 = document.querySelectorAll("li.hideServing2b");
	let element3 = document.querySelectorAll("li.hideServing4b");  


	if(oneServingButton == true){
		console.log("serving selected is 1")

		for(let i=0; i<element.length; i++){
			element[i].style.display = "list-item";
		}

		for(let i=0; i<element2.length; i++){
			element2[i].style.display = "none";
		}

		for(let i=0; i<element3.length; i++){
			element3[i].style.display = "none";
		}



	}

	if(twoServingButton == true){
		console.log("serving selected is 2")
		for(let i=0; i<element.length; i++){
		element[i].style.display = "none";
	   }

	   for(let i=0; i<element3.length; i++){
		element3[i].style.display = "none";
	   }

	   	for(let i = 0, l = recipe3Obj.ingredients.length; i < l; i++){
			var obj = recipe3Obj.ingredients[i];
			var obj2 = recipe3Obj.ingredients[i].quantity;
			let newQuantity = obj2 * DOUBLE_SERVING; 
			var obj3 = recipe3Obj.ingredients[i].item;
			var li = document.createElement("li")
			li.classList.add("hideServing2b");;
			li.innerText = newQuantity + " " + obj3;
			list1.appendChild(li);
			
		}
	}

	if(fourServingButton == true){
		console.log("serving selected is 4")
		for(let i=0; i<element.length; i++){
		element[i].style.display = "none";
	   }

	   for(let i=0; i<element2.length; i++){
		element2[i].style.display = "none";
	   }

	   	for(let i = 0, l = recipe3Obj.ingredients.length; i < l; i++){
			var obj = recipe3Obj.ingredients[i];
			var obj2 = recipe3Obj.ingredients[i].quantity;
			let newQuantity = obj2 * QUAD_SERVING; 
			var obj3 = recipe3Obj.ingredients[i].item;
			var li = document.createElement("li")
			li.classList.add("hideServing4b");;
			li.innerText = newQuantity + " " + obj3;
			list1.appendChild(li);
			
		}
	}



}

//CALCULATE SERVINGS//

}

recipe3();


function recipe4(){
console.log("inside recipe4")
let recipeBlockNum = 4;
let recipeName="recipeName"+recipeBlockNum;

recipe4Obj.forEach(recipe => {
	//create a block to hold recipes
		// 1. create element
		// 2. append element to parent using append child
		// 3. add classes and other attributes - add class so that div or section is unique from others 
	let recipeSection=document.createElement("section");
		//SECTION
	document.querySelector(".row").appendChild(recipeSection);
	recipeSection.classList.add("col-md-4","mb-3","newRecipe"+recipeBlockNum);
	let recipeCardDiv=document.createElement("div");
		//RECIPE-CARD DIV
	document.querySelector(".newRecipe"+recipeBlockNum).appendChild(recipeCardDiv);
	recipeCardDiv.classList.add("card","recipeCard","newRecipeCardDiv"+recipeBlockNum);
	recipeCardDiv.style.width="18rem";
	let recipeImage=document.createElement("img");
		//RECIPE-IMG ELEMENT - APPEND TO RECIPE CARD DIV
	document.querySelector(".newRecipeCardDiv"+recipeBlockNum).appendChild(recipeImage);
	recipeImage.classList.add("card-img-top","newImage");
	recipeImage.src= "";
	recipeImage.alt="Card Image Cap";
	let recipeCardBody=document.createElement("div");
		//RECIPE-CARD-BODY DIV  APPEND TO RECIPE CARD DIV
	document.querySelector(".newRecipeCardDiv"+recipeBlockNum).appendChild(recipeCardBody);
	recipeCardBody.classList.add("card-body","newRecipeCardBody"+recipeBlockNum);
	let recipeCardTitle=document.createElement("h5");
		//RECIPE-TITLE H5  - APPENDS TO CARD BODY 
	document.querySelector(".newRecipeCardBody"+recipeBlockNum).appendChild(recipeCardTitle);
	recipeCardTitle.classList.add("card-title","recipeName"+recipeBlockNum)
	recipeCardTitle.innerHTML="Recipe Title";
	let recipeCardText=document.createElement("p");
		//RECIPE CARD-TEXT PARAGRAPH  - APPEND TO CARD BODY 
	document.querySelector(".newRecipeCardBody"+recipeBlockNum).appendChild(recipeCardText);
	recipeCardText.classList.add("card-text","newRecipeCardText"+recipeBlockNum);
	recipeCardText.innerHTML = "Serving Size: ";
	let recipeRadioSpan = document.createElement("span");
		//RADIO SPAN - APPEND TO CARD-TEXT PARAGRAPH
	document.querySelector(".newRecipeCardText"+recipeBlockNum).appendChild(recipeRadioSpan);
	recipeRadioSpan.id="radio_display"+recipeBlockNum;
	let radioTemplate=document.createElement("template");
		//RADIO TEMPLATE APPEND TO SPAN 
	document.querySelector("#radio_display"+recipeBlockNum).appendChild(radioTemplate);
	radioTemplate.id="radio"+recipeBlockNum;
	let inputTypeRadio=document.createElement("input");
		//appends to template
	document.querySelector("#radio"+recipeBlockNum).appendChild(inputTypeRadio);
	inputTypeRadio.id="";
	inputTypeRadio.setAttribute("name","")
	inputTypeRadio.setAttribute("value","")
	let inputRadioLabel=document.createElement("label");
		//appends to template
	document.querySelector("#radio"+recipeBlockNum).appendChild(inputRadioLabel);
	inputRadioLabel.setAttribute("for","")
	let prepTimeParagraph=document.createElement("p");
		//appends to card-text paragraph
	document.querySelector(".newRecipeCardBody"+recipeBlockNum).appendChild(prepTimeParagraph);
	prepTimeParagraph.classList.add("prepTime"+recipeBlockNum);
	prepTimeParagraph.innerHTML = "Preparation Time: ";
	let prepTimeSpan=document.createElement("span");
		//appends to prep-time paragraph
	document.querySelector(".prepTime"+recipeBlockNum).appendChild(prepTimeSpan);
	prepTimeSpan.classList.add("prepTimeSpan"+recipeBlockNum);

	let cookTime=document.createElement("p");
	document.querySelector(".newRecipeCardBody"+recipeBlockNum).appendChild(cookTime);
	cookTime.classList.add("cookTime"+recipeBlockNum);
	cookTime.innerHTML="Cooking Time: ";

	let cookTimeSpan=document.createElement("span");
	document.querySelector(".cookTime"+recipeBlockNum).appendChild(cookTimeSpan);
	cookTimeSpan.classList.add("cookTimeSpan"+recipeBlockNum);




	let difficultyParagraph=document.createElement("p");
		//appends to card-text paragraph
	document.querySelector(".newRecipeCardBody"+recipeBlockNum).appendChild(difficultyParagraph);
	difficultyParagraph.classList.add("difficultyParagraph"+recipeBlockNum);


	let difficultySpan=document.createElement("span");
		//appends to difficulty paragraph
	document.querySelector(".difficultyParagraph"+recipeBlockNum).appendChild(difficultySpan);
	difficultySpan.classList.add("difficultyLevel"+recipeBlockNum);


	let viewRecipe=document.createElement("p");
		//appends to card text paragraph
	document.querySelector(".newRecipeCardBody"+recipeBlockNum).appendChild(viewRecipe);
	viewRecipe.classList.add("viewRecipe"+recipeBlockNum);
	viewRecipe.innerHTML="View Recipe: "
	let switchLabel=document.createElement("label")
		//appends to view recipe paragraph
	document.querySelector(".viewRecipe"+recipeBlockNum).appendChild(switchLabel);
	switchLabel.classList.add("switch","newSwitch"+recipeBlockNum);
	let switchInput=document.createElement("input");
	  //appends to newswitch label
	document.querySelector(".newSwitch"+recipeBlockNum).appendChild(switchInput);
	switchInput.setAttribute("type","checkbox");
	switchInput.setAttribute("id","MyBtn"+recipeBlockNum);
	let switchSpan=document.createElement("span");
		//appends to newSwitch label
	document.querySelector(".newSwitch"+recipeBlockNum).appendChild(switchSpan);
	switchSpan.classList.add("slider","round");
	let fullRecipeDiv=document.createElement("div");
	 //appends to card-text paragraph
	 document.querySelector(".newRecipeCardBody"+recipeBlockNum).appendChild(fullRecipeDiv);
	 fullRecipeDiv.setAttribute("id","fullRecipe"+recipeBlockNum);
	 let ingredientsP=document.createElement("p");
	 //appends to full recipe div
	 document.querySelector("#fullRecipe"+recipeBlockNum).appendChild(ingredientsP);
	 ingredientsP.classList.add("ingredientP"+recipeBlockNum);
	 ingredientsP.innerHTML="Ingredients: ";
	 let ingredientList=document.createElement("ul")
		//appends to ingrdnt paragrpah
	document.querySelector("#fullRecipe"+recipeBlockNum).appendChild(ingredientList);
	ingredientList.setAttribute("id","ingredientList"+recipeBlockNum);
	let instructionP=document.createElement("p");
	//appends to full recipe div
	document.querySelector("#fullRecipe"+recipeBlockNum).appendChild(instructionP);
	instructionP.classList.add("instructionP"+recipeBlockNum);
	instructionP.innerHTML="Instructions: ";
	let instructionList=document.createElement("ul");
		//appends to instruction p
	document.querySelector("#fullRecipe"+recipeBlockNum).appendChild(instructionList);
	instructionList.classList.add("instructionList"+recipeBlockNum);


      //NAME-PREP-DIFFICULTY//
	  document.querySelector(".recipeName"+recipeBlockNum).innerHTML = recipe.recipe_name; 
	  document.querySelector(".prepTimeSpan"+recipeBlockNum).innerHTML = 
	  recipe.recipe_prep;
	  document.querySelector(".cookTimeSpan"+recipeBlockNum).innerHTML = recipe.recipe_cooking_time;
	  document.querySelector(".difficultyLevel"+recipeBlockNum).innerHTML=recipe.recipe_difficulty; 
	  document.querySelector("#radio_display"+recipeBlockNum).innerHTML = recipe.servings;

	  //END NAME-PREP DIFFICULTY//


//CREATE INSTRUCTION AND INGREDIENT LIST//
let ingredients = document.querySelector("#ingredientList4"); 
let instructions = document.querySelector(".instructionList4");

console.log(ingredients)
console.log(instructions)
for(let i = 0, l = recipe.instructions.length; i < l; i++){
			var obj = recipe.instructions[i];
			var li = document.createElement("li");
			li.innerText = obj.step;
			instructions.appendChild(li);
		}

		for(let i = 0, l = recipe.ingredients.length; i < l; i++){
			var obj = recipe.ingredients[i];
			var obj2 = recipe.ingredients[i].quantity;
			var obj3 = recipe.ingredients[i].item;
			var li = document.createElement("li");
			li.classList.add("hideServing1b");
			li.innerText = obj2 + " " + obj3;
			ingredients.appendChild(li);
		}	

//CREATE INSTUCTION AND INGREDIENT LIST//


	

   recipeBlockNum++
	console.log(instructionP)

});

}

recipe4()

let recipeNum=1;

//HIDING RECIPE BLOCK//
document.getElementById("myBtn").addEventListener("click",hideRecipe);
document.getElementById("myBtn2").addEventListener("click",hideRecipe2);
document.getElementById("myBtn3").addEventListener("click",hideRecipe3);
// document.getElementById("myBtn"+recipeNum).addEventListener("click",hideRecipe4);

let recipeBtn1 = document.getElementById("myBtn").checked; 
let recipeBtn2 = document.getElementById("myBtn2").checked; 
let recipeBtn3 = document.getElementById("myBtn3").checked; 
// let recipeBtn4 = document.getElementById("myBtn"+recipeNum).checked; 

function hideRecipe(){
	let recipeBlock = document.querySelector("#fullRecipe");
	

	if (recipeBlock.style.display == "none" || recipeBlock.style.display === "" && recipeBtn1 == false) {
    recipeBlock.style.display = "block";
  } else {
    recipeBlock.style.display = "none";
  }

}

function hideRecipe2(){
let recipeBlock2 = document.querySelector("#fullRecipe2");

	if (recipeBlock2.style.display == "none" || recipeBlock2.style.display === "" && recipeBtn2 == false) {
    recipeBlock2.style.display = "block";
  } else {
    recipeBlock2.style.display = "none";
  }
}

function hideRecipe3(){
let recipeBlock3 = document.querySelector("#fullRecipe3");

  if (recipeBlock3.style.display == "none" || recipeBlock3.style.display === "" && recipeBtn3 == false) {
    recipeBlock3.style.display = "block";
  } else {
    recipeBlock3.style.display = "none";
  }
}


// function hideRecipe4(){
// let recipeBlock4 = document.querySelector("#fullRecipe"+recipeNum);

//   if (recipeBlock4.style.display == "none" || recipeBlock4.style.display === "" && recipeBtn3 == false) {
//     recipeBlock4.style.display = "block";
//   } else {
//     recipeBlock4.style.display = "none";
//   }
// }

	



//END HIDING RECIPE BLOCK//

}


