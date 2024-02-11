setInterval(redToYellow, 500);
setInterval(nexBall, 100);

var bingoColor;
var cardSize;
var turn = 1;
var ballUsed = [];

var player1 = {"name":"A"};
var player2 = {"name":"B"};
var player3 = {"name":"C"};
var player4 = {"name":"D"};

createBox("cardP1");
createBox("cardP2");
createBox("cardP3");
createBox("cardP4");

// nextTurn();
nexBall();
assignName();
shadowMachine();

function createBox(card){
    var numUsed = [];
    for (i = 0; i < 25; i++){
        var bingo = ["B","I","N","G","O"]
        if (i < 5) {
            var newBox = document.createElement("div");
            newBox.className = "emptyBox";
            newBox.innerHTML = bingo[i];
            document.getElementById(card).appendChild(newBox);
        } else if(i != 5 && i != 9 && i != 10 && i != 14 && i != 15 && i < 19){
            var newBox = document.createElement("div");
            newBox.className = "box";
            newBox.id = card+i;
            var next = false;
            while (next == false){
                var ranNum = Math.floor(Math.random() * 51);
                if (numUsed.includes(ranNum) == false){
                    card[ranNum] = false;
                    numUsed.push(ranNum);
                    newBox.innerHTML = ranNum;
                    next = true;
                }
            }
            next = false;
            document.getElementById(card).appendChild(newBox);
        } else{
            var newBox = document.createElement("div");
            newBox.className = "emptyBox";
            document.getElementById(card).appendChild(newBox);
        }
    }
}

function checkCard(card){
    for (i = 0; i < 25; i++){
        for (var val of ballUsed){
            if (document.getElementById(card).children[i].innerHTML == val && document.getElementById(card).children[i].innerHTML != ""){
                document.getElementById(card).children[i].style.backgroundColor = "#1fc82b";
            }
        }
    }
}

function nexBall(){
    if (ballUsed.length < 25){
        var next = false;
        while (next == false){
            var ranNum = Math.floor(Math.random() * 51);
            if (ballUsed.includes(ranNum) == false){
                var newBox = document.createElement("div");
                newBox.className = "ball";
                newBox.innerHTML = ranNum;
                document.getElementById("ballGrid").appendChild(newBox);
                ballUsed.push(ranNum);
                next = true;
            }
        }
        turn++;
    }
}

function redToYellow() {
    if (bingoColor == 1){
        document.getElementById('bingo').style.textShadow = "5px 5px 5px #de1818";
        bingoColor = 0;
    }
    else{
        document.getElementById('bingo').style.textShadow = "5px 5px 5px #cede18";
        bingoColor = 1
    }
}

function startGame() {
    document.getElementById('startGame');
    player1.name = document.getElementById('player1').value;
    player2.name = document.getElementById('player2').value;
    player3.name = document.getElementById('player3').value;
    player4.name = document.getElementById('player4').value;
    var debug = player1.name + player2.name + player3.name + player4.name;
    alert(debug);
}

function assignName(){
    document.getElementById('player1').innerHTML = player1.name;
    document.getElementById('player2').innerHTML = player2.name;
    document.getElementById('player3').innerHTML = player3.name;
    document.getElementById('player4').innerHTML = player4.name;
}

function nextTurn() {
    document.getElementById('turn').innerHTML = "Turno " + turn;
    turn++;
}

function cardSelected3x3() {
    cardSize = 3
    alert('3X3!');
}

function cardSelected5x5() {
    cardSize = 5
    alert('5X5!');
}