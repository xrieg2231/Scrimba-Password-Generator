var signsChars = "!@#$%^&*()";
var numbersChars = "0123456789";
var lettersUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLowerChars = "abcdefghijklmnopqrstuvwxyz";

var chars = signsChars + numbersChars + lettersLowerChars + lettersUpperChars;

function generate(){
    var password = "";
    var passLength = document.getElementById("pass-length").value - 1;
    for (var i = 0; i <= passLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);}
    document.getElementById("firstPass").innerHTML = password;
    var password = "";
    var passLength = document.getElementById("pass-length").value - 1;
    for (var i = 0; i <= passLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);} 
    document.getElementById("secondPass").innerHTML = password;
    var password = "";
    var passLength = document.getElementById("pass-length").value - 1;
    for (var i = 0; i <= passLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);} 
    document.getElementById("thirdPass").innerHTML = password;
    var password = "";
    var passLength = document.getElementById("pass-length").value - 1;
    for (var i = 0; i <= passLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);} 
    document.getElementById("fourthPass").innerHTML = password;
}
