"use strict";
/*
	WEB 230
	Assignment 8
	{your name here}
*/
var board = new Array(9);
var currentPlayer = "X";
var allTD = document.getElementsByTagName("td");
 
function start() {
  for (var s = 0; s < allTD.length; s++) {
	  allTD[s].addEventListener("click", function(event){oneClick(event, currentPlayer);}, false);
  }
  newGame();
}
 
function oneClick(event, currentPlayer) {
  var s = event.target;
  if (s.className.match(/marker/)) {
	  return;
  }
  else {
	  board[s.id.split("")[1]] = currentPlayer;
	  consoleLog(board, currentPlayer);
	  createMarker(s, currentPlayer);
	  checkWinner();
	  switchPlayer(); 
  }
}
 
function createMarker(s, currentPlayer) {
  var marker = document.createElement('div');
  marker.className = currentPlayer + "-marker";
  s.appendChild(marker);
}
 
function switchPlayer() {
  if (currentPlayer == "X") {
	  currentPlayer = "O";
  } else if (currentPlayer == "O") {
	  currentPlayer = "X";
  }

}
 
function newGame() {
	for (var i = 0; i < board.length; i++) {
      board[i] = "";                               
      document.getElementById("c" + i).innerHTML = "";
    }
}

function consoleLog(b, c) {
	console.log(b);
	console.log(c);
	//console.log(JSON.stringify(board).match(/,"",/));
}

function checkWinner() {
  var a = 0; 
  var b = 1; 
  var c = 2;
  while (c < board.length) {
    if (someOneWin(a, b, c)) {
      return;
    }
    a+=3; b+=3; c+=3;
  }
    
  a = 0; 
  b = 3; 
  c = 6;
  while (c < board.length) {
    if (someOneWin(a, b, c)) {
      return;
    }
    a+=1; b+=1; c+=1;
  }
 
  if (someOneWin(0, 4, 8)) {
	  return;
  }

  if (someOneWin(2, 4, 6)) {
	  return;
  }
  
  if (!JSON.stringify(board).match(/,"",/)) {
    if (confirm("Draw!")) {
      newGame();
    }
  }
}

function someOneWin(a, b, c) {
  if ((board[a] === board[b]) && (board[b] === board[c]) && 
  (board[a] != "" || board[b] != "" || board[c] != "")) {
	  allTD[a].style.backgroundColor = "lightgreen";
	  allTD[b].style.backgroundColor = "lightgreen";
	  allTD[c].style.backgroundColor = "lightgreen";
	  var para=document.createElement("p");
	  var node=document.createTextNode(board[a] + " wins!");
	  para.appendChild(node);
	  var element=document.getElementById("table");
	  element.appendChild(para);
	  
	  //if (confirm(board[a] + " wins!")) {
		//  newGame();
		//}
		return true;
	} else
		return false;
}