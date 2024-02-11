setInterval(redToYellow, 500);

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

function nextTurn() {
    if (turn < 25){
        nexBall();
        checkCard(player1);
        checkCard(player2);
        checkCard(player3);
        checkCard(player4);
        if (turn == 24){
            document.getElementById("nextTurn").innerHTML = "VER PUNTAJE";
        }
        turn++;
    }else if (turn == 25){
        checkCardPoint(player1);
        checkCardPoint(player2);
        checkCardPoint(player3);
        checkCardPoint(player4);
        updatePoint(player1);
        updatePoint(player2);
        updatePoint(player3);
        updatePoint(player4);
        document.getElementById("nextTurn").innerHTML = "REINICIAR";
        turn++;
    }
    else{
        window.location.reload(true);
    }
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
    var cardButton = document.createElement("button");
    cardButton.id = card.name+"button";
    cardButton.type = "cardButton";
    document.getElementById("cardSelector").appendChild(cardButton);

    var nameText = document.createElement("div");
    nameText.className = "h2";
    nameText.id = card.name
    nameText.innerHTML = card.name;
    document.getElementById(card.name+"button").appendChild(nameText);

    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = card.name+"card";
    document.getElementById(card.name).appendChild(newCard);

    if (document.getElementById("3X3")){
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
    else if (document.getElementById("5X5")){
        var numUsed = [];
        for (i = 0; i < 30; i++){
            var bingo = ["B","I","N","G","O"]
            if (i < 5) {
                var newBox = document.createElement("div");
                newBox.className = "emptyBox";
                newBox.innerHTML = bingo[i];
                document.getElementById(card.name+"card").appendChild(newBox);
            } 
            else{
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
            }
        }
    // var hideCard = document.createElement("div");
    // hideCard.id = card.name+"hide";
    // hideCard.className = "hideCard";
    // document.getElementById(card.name+"button").appendChild(hideCard);
    }
}

function checkCard(card){
    if (document.getElementById("3X3")){
        for (i = 0; i < 25; i++){
            for (var val of ballUsed){
                if (document.getElementById(card.name+"card").children[i].innerHTML == val && document.getElementById(card.name+"card").children[i].innerHTML != ""){
                    document.getElementById(card.name+"card").children[i].style.backgroundColor = "#1fc82b";
                }
            }
        }
    }else if (document.getElementById("5X5")){
        for (i = 0; i < 30; i++){
            for (var val of ballUsed){
                if (document.getElementById(card.name+"card").children[i].innerHTML == val && document.getElementById(card.name+"card").children[i].innerHTML != ""){
                    document.getElementById(card.name+"card").children[i].style.backgroundColor = "#1fc82b";
                }
            }
        }
    }
}

function checkCardPoint(card){
    card.point = 0;
    var v1 = 0;
    var v2 = 0;
    var v3 = 0;
    var v4 = 0;
    var v5 = 0;
    var h1 = 0;
    var h2 = 0;
    var h3 = 0;
    var h4 = 0;
    var h5 = 0;
    var dd = 0;
    var ud = 0;
    var wc = 0;
    if (document.getElementById("3X3")){
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
                }
                else if (i == 16 || i == 8){
                    ud++;
                }
                else if (i == 12){
                    ud++;
                    dd++;
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
    }
    else if (document.getElementById("5X5")){
        for (i = 0; i < 29; i++){
            if (document.getElementById(card.name+"card").children[i].style.backgroundColor == "rgb(31, 200, 43)"){
                if (i == 5 || i == 10 || i == 15 || i == 20 || i == 25){
                    v1++;
                    wc++;
                }
                else if (i == 6 || i == 11 || i == 16 || i == 21 || i == 26){
                    v2++;
                    wc++;
                }
                else if (i == 7 || i == 12 || i == 17 || i == 22 || i == 27){
                    v3++;
                    wc++;
                }
                else if (i == 8 || i == 13 || i == 18 || i == 23 || i == 28){
                    v4++;
                    wc++;
                }
                else if (i == 9 || i == 14 || i == 19 || i == 24 || i == 29){
                    v5++;
                    wc++;
                }
                if (i == 5 || i == 6 || i == 7 || i == 8 || i == 9){
                    h1++;
                    wc++;
                }
                else if (i == 10 || i == 11 || i == 12 || i == 13 || i == 14){
                    h2++;
                    wc++;
                }
                else if (i == 15 || i == 16 || i == 17 || i == 18 || i == 19){
                    h3++;
                    wc++;
                }
                else if (i == 20 || i == 21 || i == 22 || i == 23 || i == 24){
                    h4++;
                    wc++;
                }
                else if (i == 25 || i == 26 || i == 27 || i == 28 || i == 29){
                    h5++;
                    wc++;
                }
                if (i == 5 || i == 11 || i == 23 || i == 29){
                    dd++;
                }
                else if (i == 25 || i == 21 || i == 13 || i == 9){
                    ud++;
                }
                else if (i == 17){
                    ud++;
                    dd++;
                }
            }
        }
        if (v1 == 5){
            card.point += 1
            console.log("VERTICAL 1",card.name)
        }
        if (v2 == 5){
            card.point += 1
            console.log("VERTICAL 2",card.name)
        }
        if (v3 == 5){
            card.point += 1
            console.log("VERTICAL 3",card.name)
        }
        if (v4 == 5){
            card.point += 1
            console.log("VERTICAL 4",card.name)
        }
        if (v4 == 5){
            card.point += 1
            console.log("VERTICAL 5",card.name)
        }
        if (h1 == 5){
            card.point += 1
            console.log("HORIZONTAL 1",card.name)
        }
        if (h2 == 5){
            card.point += 1
            console.log("HORIZONTAL 2",card.name)
        }
        if (h3 == 5){
            card.point += 1
            console.log("HORIZONTAL 3",card.name)
        }
        if (h4 == 5){
            card.point += 1
            console.log("HORIZONTAL 4",card.name)
        }
        if (h5 == 5){
            card.point += 1
            console.log("HORIZONTAL 5",card.name)
        }
        if (dd == 5){
            card.point += 3
            console.log("DIAGONAL DOWN",card.name)
        }
        if (ud == 5){
            card.point += 3
            console.log("DIAGONAL UP",card.name)
        }
        if (wc == 25){
            card.point += 5
            console.log("FULL CARD",card.name)
        }
    }
}

function nexBall(){
    if (turn < 25){
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

function cardSelected3x3() {
    cardSize = 3
    alert('3X3!');
}

function cardSelected5x5() {
    cardSize = 5
    alert('5X5!');
}