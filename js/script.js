window.onload = function() {
    document.getElementById("name").focus();
}
// Create input text field and append it to the form
const $otherTitle = $('<input type="text" placeholder = "Your Job Role"></input>');
$('#personal').append($otherTitle);

$otherTitle.hide();
// JQuery function to show text field if "other" option selected and hide the text box again if value changed to something other than "other"
$('#title').change(function(){
    if ($(this).val() == "other") {
        $otherTitle.show();
    }
    else $otherTitle.hide();
})

const designSelect = $('#design');
const selectTheme = $(designSelect).find('option:contains("Select Theme")')
const colorSelect = $('#colors-js-puns');
colorSelect.hide();
const cornflowerBlue = $(colorSelect).find('option[value = "cornflowerblue"]');
const darkSlateGrey = $(colorSelect).find('option[value = "darkslategrey"]');
const gold = $(colorSelect).find('option[value = "gold"]');
const tomato = $(colorSelect).find('option[value = "tomato"]');
const SteelBlue = $(colorSelect).find('option[value = "steelblue"]');
const dimGrey = $(colorSelect).find('option[value = "dimgrey"]');

$('#design').change(function(){
    if ($(this).val() == "js puns"){
        colorSelect.show();
        selectTheme.hide();
        tomato.hide();
        SteelBlue.hide();
        dimGrey.hide();
    }
    else if ($(this).val() == "heart js"){
        colorSelect.show();
        selectTheme.hide();
        tomato.show();
        SteelBlue.show();
        dimGrey.show();
        cornflowerBlue.hide();
        darkSlateGrey.hide();
        gold.hide();
    }
    
})
const activities = $('.activities');
const JSFrameworks = $(activities).find('input[name = "js-frameworks"]');
const express = $(activities).find('input[name = "express"]');


$(activities).on('click', function(){
    if (JSFrameworks.is(':checked')){
        express.attr("disabled", true);
    } else if (express.is(':checked')){
        JSFrameworks.attr("disabled", true);
    }
    else {
        express.attr("disabled", false);
        JSFrameworks.attr("disabled", false);
        }
    })

const JSLib =$(activities).find('input[name = "js-libs"]');
const nodeJS = $(activities).find('input[name = "node"]');

var totalCounter = $(`<div id = "total"></div>`);
$('.activities').append(totalCounter);
var total = 0;
$(activities).on('click', function(event){
    let clickedElement = $(event.target);
    let valueOfParent = clickedElement.parent('label').text();
    var searchTerm = '$';
    var index = valueOfParent.indexOf(searchTerm);
    var slice = valueOfParent.slice(index + 1);
    var sliceNum = parseInt(slice);
    if ($(event.target).is(':checked')){
        total = total + sliceNum;
    } else if ($(event.target).not(':checked')){
        total = total - sliceNum;
    } console.log(total);
    document.getElementById('total').innerHTML=`Total: $`+`${total}`;
    if (JSLib.is(':checked')){
        nodeJS.attr("disabled", true);
    } else if (nodeJS.is(':checked')){
        JSLib.attr("disabled", true);
    }
    else {
        JSLib.attr("disabled", false);
        nodeJS.attr("disabled", false);
    }
})

const creditCard = $('#credit-card');
const paypal = $('p:contains("PayPal")');
paypal.hide();
const bitcoin =$('p:contains("Bitcoin")');
bitcoin.hide();

const paySelect = $('#payment');
const pleaseSelect = $(paySelect).find('option[value = "select_method"]');
pleaseSelect.hide();

$('#payment').change(function(){
    if ($(this).val() == "credit card"){
        creditCard.show();
        paypal.hide();
        bitcoin.hide();
    }
    else if ($(this).val() == "paypal"){
        paypal.show();
        creditCard.hide();
        bitcoin.hide();
    }
    else if ($(this).val() == "bitcoin"){
        bitcoin.show();
        paypal.hide();
        creditCard.hide();
    }
})

const regexName = /^[A-Z][a-z]*[ ][A-Z][a-z]*$/;
const regexEmail = /[\w-]+@([\w-]+\.)+[\w-]+/;
const regexCredit = /\b\d{15,19}/;

$('#name').on('keyup', function(){
    var name = $('#name').val();
    var nameTest = regexName.test(name);
    if (nameTest == false){
        $('#name').css("border", "3px solid red");
        $('button[type="submit"]').attr("disabled", true);   
    } else if (nameTest == true){
        $('#name').css("border", "2px solid #c1deeb");
        $('button[type="submit"]').removeAttr("disabled");
    }
})

$('#mail').on('keyup', function(){
    var email = $('#mail').val();
    var emailTest = regexEmail.test(email);
    if (emailTest == false){
        $('#mail').css("border", "3px solid red");
        $('button[type="submit"]').attr("disabled", true); 
    } else if (emailTest == true) {
        $('#mail').css("border", "2px solid #c1deeb");
        $('button[type="submit"]').removeAttr("disabled");
    }
})

$('#cc-num').on('keyup', function(){
    var cardNum = $('#cc-num').val();
    var creditTest = regexCredit.test(cardNum);
    if (creditTest == false){
        $('#cc-num').css("border", "3px solid red");
        $('button[type="submit"]').attr("disabled", true); 
    } else if (creditTest == true){
        $('#cc-num').css("border", "2px solid #c1deeb");
        $('button[type="submit"]').removeAttr("disabled");
    }
})
