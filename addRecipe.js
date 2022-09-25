$(document).ready(function () {

//get form info
var $name = $('#recipe_title');

//validate form info 

//save form info to js file
//https://dev.to/amjadmh73/submit-html-forms-to-json-apis-easily-137l
//upload image????


$("#submit").click(function(){
    console.log("hi")
    var recipe = {
        name: $name.val()
    }

    $.ajax({
        type: 'POST',
        url: 'api/recipes.json',
        data: recipe, 
        success: function(newRecipe) {
            console.log("success");
        },
        error: function(){
            console.log("error")
        }
        });

    });
 


});

