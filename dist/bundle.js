(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
$(document).ready(function () {
//get form info
const fs = require('fs');
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


},{"fs":1}]},{},[2]);
