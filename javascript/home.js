setInterval(redToYellow, 500);
setInterval(nexBall, 10);

var bingoColor;
var cardSize;
var turn = 1;
var ballUsed = [];

var player1 = {"name":"A","point":0};
var player2 = {"name":"B","point":0};
var player3 = {"name":"C","point":0};
var player4 = {"name":"D","point":0};

createBox(player1);
createBox(player2);
createBox(player3);
createBox(player4);

// nextTurn();
nexBall();
// shadowMachine();

function updatePoint(card) {
    var name = card.name;
    var points = card.point;
    var textNode = document.getElementById(card.name).firstChild;
    textNode.textContent = name + "(" + points + ")";
}

function DEBUG(){
    checkCard(player1);
    checkCard(player2);
    checkCard(player3);
    checkCard(player4);
    checkCardPoint(player1);
    checkCardPoint(player2);
    checkCardPoint(player3);
    checkCardPoint(player4);
    updatePoint(player1);
    updatePoint(player2);
    updatePoint(player3);
    updatePoint(player4);
}

function shadowMachine(){
    document.getElementById("machine").style.top = "-140px";
    document.getElementById("shadowMachine").style.left = "5px";
    document.getElementById("shadowMachine").style.top = "1px";
    document.getElementById("shadowMachine").style.borderColor = "#1fc82b";
    document.getElementById("shadowMachine").children[0].style.borderColor = "#1fc82b";
    document.getElementById("shadowMachine").children[1].style.borderColor = "#1fc82b";
    document.getElementById("shadowMachine").children[2].style.backgroundColor = "#1fc82b";
    document.getElementById("shadowMachine").children[2].style.borderColor = "#1fc82b";
    document.getElementById("shadowMachine").children[3].style.backgroundColor = "#1fc82b";
    document.getElementById("shadowMachine").children[3].style.borderColor = "#1fc82b";
    document.getElementById("shadowMachine").children[4].style.backgroundColor = "#1fc82b";
    document.getElementById("shadowMachine").children[4].style.borderColor = "#1fc82b";
    document.getElementById("shadowMachine").children[5].style.backgroundColor = "#1fc82b";
    document.getElementById("shadowMachine").children[5].style.borderColor = "#1fc82b";
    document.getElementById("shadowMachine").children[6].style.backgroundColor = "#1fc82b";
    document.getElementById("shadowMachine").children[6].style.borderColor = "#1fc82b";
}

function createBox(card){
    var nameText = document.createElement("div");
    nameText.className = "h2";
    nameText.id = card.name
    nameText.innerHTML = card.name;
    document.getElementById("cardSelector").appendChild(nameText);

    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = card.name+"card";
    document.getElementById(card.name).appendChild(newCard);
    var numUsed = [];
    for (i = 0; i < 25; i++){
        var bingo = ["B","I","N","G","O"]
        if (i < 5) {
            var newBox = document.createElement("div");
            newBox.className = "emptyBox";
            newBox.innerHTML = bingo[i];
            document.getElementById(card.name+"card").appendChild(newBox);
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
            document.getElementById(card.name+"card").appendChild(newBox);
        } else{
            var newBox = document.createElement("div");
            newBox.className = "emptyBox";
            document.getElementById(card.name+"card").appendChild(newBox);
        }
    }
}

function checkCard(card){
    for (i = 0; i < 25; i++){
        for (var val of ballUsed){
            if (document.getElementById(card.name+"card").children[i].innerHTML == val && document.getElementById(card.name+"card").children[i].innerHTML != ""){
                document.getElementById(card.name+"card").children[i].style.backgroundColor = "#1fc82b";
            }
        }
    }
}

function checkCardPoint(card){
    var v1 = 0;
    var v2 = 0;
    var v3 = 0;
    var h1 = 0;
    var h2 = 0;
    var h3 = 0;
    var dd = 0;
    var ud = 0;
    var wc = 0;
    for (i = 0; i < 25; i++){
        if (document.getElementById(card.name+"card").children[i].style.backgroundColor == "rgb(31, 200, 43)"){
            if (i == 6 || i == 11 || i == 16){
                v1++;
                wc++;
            }
            else if (i == 7 || i == 12 || i == 17){
                v2++;
                wc++;
            }
            else if (i == 8 || i == 13 || i == 18){
                v3++;
                wc++;
            }
            if (i == 6 || i == 7 || i == 8){
                h1++;
                wc++;
            }
            else if (i == 11 || i == 12 || i == 13){
                h2++;
                wc++;
            }
            else if (i == 16 || i == 17 || i == 18){
                h3++;
                wc++;
            }
            if (i == 6 || i == 18){
                dd++;
                wc++;
            }
            else if (i == 16 || i == 8){
                ud++;
                wc++;
            }
            else if (i == 12){
                ud++;
                dd++;
                wc++;
            }
        }
    }
    if (v1 == 3){
        card.point += 1
        console.log("VERTICAL 1",card.name)
    }
    if (v2 == 3){
        card.point += 1
        console.log("VERTICAL 2",card.name)
    }
    if (v3 == 3){
        card.point += 1
        console.log("VERTICAL 3",card.name)
    }
    if (h1 == 3){
        card.point += 1
        console.log("HORIZONTAL 1",card.name)
    }
    if (h2 == 3){
        card.point += 1
        console.log("HORIZONTAL 2",card.name)
    }
    if (h3 == 3){
        card.point += 1
        console.log("HORIZONTAL 3",card.name)
    }
    if (dd == 3){
        card.point += 3
        console.log("DIAGONAL DOWN",card.name)
    }
    if (ud == 3){
        card.point += 3
        console.log("DIAGONAL UP",card.name)
    }
    if (wc == 9){
        card.point += 5
        console.log("FULL CARD",card.name)
    }
    console.log("V1:",v1," V2:",v2," V3:",v3," H1:",h1," H2:",h2," H3:",h3," DD:",dd," UD:",ud)
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