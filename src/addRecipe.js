import * as fs from 'fs';
$(document).ready(function () {
//get form info
const fs = require('fs');
const result = fs.readFileSync('api/recipes.json', {encoding: 'utf-8'});
console.log(result);


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
            console.log(newRecipe);
        },
        error: function(){
            console.log("error")
        }
        });

    });
 


});

