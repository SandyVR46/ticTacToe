function startGame(){

	for(var i = 1;i <= 9; i++){
		clearBox(i);
	}

	document.write = "X";
	document.winner = null;
	setMessage(document.write + " get's to start.")
}

function nextMove(perpiece){
	if(document.winner != null){
		setMessage(document.write + " already won.");
	}
	else if(perpiece.innerText == ''){
		perpiece.innerText=document.write;
		switchTurn();
	}else{
		setMessage("Pick another square.")
	}
	
}

// To change message section
function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

// To check X or O
function switchTurn(){
	if(checkForWinner(document.write)){
		setMessage("Congrats " + document.write + " , you won!")
		document.winner = document.write;
	}else if(CheckforTie())
        {
            setMessage("Tie!! Play again...!!!");
        }
	else if(document.write == "X"){
		document.write = "O";
		setMessage("It's " + document.write + "'s turn now !" );
	}
	else{
		document.write = "X";
		setMessage("It's " + document.write + "'s turn now !" );
	}
	
}

function checkForWinner(move){
	var result = false;
	if(checkRow(1, 2, 3, move) ||
	   checkRow(4, 5, 6, move) ||
	   checkRow(7, 8, 9, move) ||
	   checkRow(1, 4, 7, move) ||
	   checkRow(2, 5, 8, move) ||
	   checkRow(3, 6, 9, move) ||
	   checkRow(1, 5, 9, move) ||
	   checkRow(3, 5, 7, move)){
		result = true;
	}
	return result;
}

function checkRow(a, b, c, move){
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
		result = true;
	}
	return result;
}
function CheckforTie(){
        	for(var i=1;i<10;i++){
        		if(getBox(i)=="")
               	return false;
            	}
            return true;
        }

function getBox(number){
	return document.getElementById("s" + number).innerText;
}
function clearBox(number){
	document.getElementById("s" + number).innerText = "";
}


