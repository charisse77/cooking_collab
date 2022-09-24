$(document).ready(function () {
    var count = -1;
    //Build card
    //foreach recipe in the array build a card 



    //Get Cookbook
    $.ajax({
        url: "api/recipes.json", success: function (cookbook) {
            //console.log(cookbook);

            //build card
            cookbook.forEach((recipe, i) => {
                const card = `<div class="row p-4" data-index=${i}>
                <section class="col-md-4 mb-3">
                    <div class="card recipeCard" style="width: 18rem;">
                        <img class="card-img-top" src="images/${recipe.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title recipeName">${recipe.name}</h5>
                            <p class="card-text">
                                Serving Size: <span class="prepTime">${recipe.servings}</span>
                            <p>Preparation Time: <span class="prepTime">${recipe.preparationTime}</span></p>
                            <p>Difficulty: <span class="difficultyLevel">${recipe.difficulity}</span></p>
                            <p>View Recipe:
                                <label class="switch">
                                    <input type="checkbox" id="myBtn${i}">
                                    <span class="slider round"></span>
                                </label>
                            </p>
                            <div id="full-recipe${i}" style="display:none">
                                <p>Ingredients:
                                <ul id="ingredient-list${i}">
                                    <!-- display the courses as list items -->
                                </ul>
                                </p>
                                <p>Instructions:
                                <ul id="instruction-list${i}">
                                    <!-- display the courses as list items -->
                                </ul>
                                </p>
                            </div> <!-- END FULL RECIPE DIV-->
                            </p> <!-- END CARD TEXT CLASS-->
                        </div>
                    </div>
                </section>
            </div>`
                $(".main-div").append(card);
                
            });


            //render lists 
            cookbook.forEach((recipe, i) => {
                count = count + 1; 
                console.log(count);
                var btn = document.getElementById("myBtn"+count);
                var fullRecipe = document.getElementById("full-recipe"+count);
                $(btn).click(function(){
                    
                    if (fullRecipe.style.display === "none") {
                        fullRecipe.style.display = "block";

                    } else {
                        fullRecipe.style.display = "none";
                    }
                })

            });



            // var btn = document.getElementById("myBtn"+count);
            // console.log(btn);
            // $("#myBtn0").click(function () {
            //     count = count + 1;
            //     console.log(count)

            //    //renderLists(cookbook);;
            // })
        }
    });


    // function renderLists(data) {
    //     var fullRecipe = document.getElementById("full-recipe0");
    //     if (fullRecipe.style.display === "none") {
    //         fullRecipe.style.display = "block";

    //     } else {
    //         fullRecipe.style.display = "none";
    //     }

    //     if (count == 1) {
    //         console.log(count);
    //         data[0].ingredients.forEach(element => $("#ingredient-list").append("<li>" + element.quantity + " " + element.item + "</li>"));
    //         data[0].instructions.forEach(element => $("#instruction-list").append("<li>" + element + "</li>"));
    //     }

    // }





});

