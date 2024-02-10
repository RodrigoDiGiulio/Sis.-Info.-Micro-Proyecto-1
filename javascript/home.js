setInterval(redToYellow, 500);
setInterval(nexBall, 500);

var bingoColor;
var cardSize;
var turn = 1;
var ballUsed = [];

var player1 = {"name":"A"};
var player2 = {"name":"B"};
var player3 = {"name":"C"};
var player4 = {"name":"D"};

// nextTurn();
nexBall();
assignName();
addNumCard(player1);
addNumCard(player2);
addNumCard(player3);
addNumCard(player4);

function nexBall(){
    if (ballUsed.length < 25){
        var next = false;
        while (next == false){
            var ranNum = Math.floor(Math.random() * 51);
            if (ballUsed.includes(ranNum) == false){
                ballUsed.push(ranNum);
                document.getElementById("B"+turn).innerHTML = ranNum;
                next = true;
            }
        }
        turn++;
    }
}

function addNumCard(player) {
    var numUsed = [];
    var next = false;
    for (let i = 1; i < 10; i++){
        while (next == false){
            var ranNum = Math.floor(Math.random() * 51);
            if (numUsed.includes(ranNum) == false){
                player[ranNum] = false;
                numUsed.push(ranNum);
                document.getElementById(i).innerHTML = ranNum;
                next = true;
            }
        }
        next = false;
    }
    // alert(JSON.stringify(player));
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