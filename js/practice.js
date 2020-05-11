function myFunction() {
    var HexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    var count = parseInt(document.getElementById("count").value);
        if (count > 16 || count < 1)
    {
        alert("Range must be between 1 and 16")
        return
    }
    document.getElementById("result").value = HexArray[count - 1];
    }

var number = ("Please enter number between 1-16:");
var count = prompt(number);
var convert = parseInt( count - 1 )
var hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F];

console.log(hex.LastIndexOf( convert )