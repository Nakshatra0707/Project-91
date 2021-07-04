var player1 = localStorage.getItem("Player 1");
var player2 = localStorage.getItem("Player 2");

document.getElementById("player1_name").innerHTML = player1 + ": ";
document.getElementById("player2_name").innerHTML = player2 + ": ";



var player1_score = 0
var player2_score = 0

document.getElementById("player1_score").innerHTML = 0;
document.getElementById("player2_score").innerHTML = 0;



function player1_update(){
    player1_score = player1_score + 1;
    document.getElementById("player1_score").innerHTML = player1_score
}

function player2_update(){
    player1_score = player2_score + 1;
    document.getElementById("player2_score").innerHTML = player1_score
}

function send(){
    number1 = document.getElementById("no_1").value;
    number2 = document.getElementById("no_2").value;
    actual = parseInt(number1) * parseInt(number2);
    
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer: <input type=`text` id=`input_check`>";
    check_button = "<br><br><button id=`check_butt` onclick=`check()`>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("no_1").value = "";
    document.getElementById("no_2").value = "";

}
