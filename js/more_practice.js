//The function prompt returns a string. If you want to verify this you can do alert(typeof count)

//You need to convert this string to an integer, and there is a well known function for this operation.
//Use this integer variable to then index into your array
var msg = "Please enter number betweem 1-16:"; 
var count = prompt(msg);
var num1 = parseInt(document.getElementById(count).value);
var HexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D" , "E", "F"];

document.getElementById("result").value = HexArray[count - 1];