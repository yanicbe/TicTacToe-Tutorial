$( document ).ready(function() {
	let playground = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
	let currentPlayer = "X"
	let id;
	let baseClassName = "selected-by-"
	
    $('.play-area').click(function(event){
		id = event.target.id
		setMove(id.split("_")[1])
	});

	function setMove(index){
		if(!isWinner()){
			if(playground[index] !== "X" && playground[index] !== "O"){
				playground[index] = currentPlayer;
				reRenderBoard()
				if(isWinner()){
					showWinner()
				} else if(!hasSpaceLeft()){
					document.getElementById("winner").innerText = "Unentschieden"
				}
				switchCurrentPlayer()
			}
		}
	}
	
	function reRenderBoard(){
		let selectedField = document.getElementById(id)
		selectedField.classList.add(baseClassName + currentPlayer)
		selectedField.classList.add("occupied")
	}

	function switchCurrentPlayer() {
		currentPlayer = currentPlayer === "X" ? "O" : "X"
	}
	
	function isWinner() {
		return (
			(playground[0] === playground[1] && playground[1] === playground[2]) ||
			(playground[3] === playground[4] && playground[4] === playground[5]) ||
			(playground[6] === playground[7] && playground[7] === playground[8]) ||                                                     
			(playground[0] === playground[3] && playground[3] === playground[6]) ||
			(playground[1] === playground[4] && playground[4] === playground[7]) ||
			(playground[2] === playground[5] && playground[5] === playground[8]) ||                                                
			(playground[0] === playground[4] && playground[4] === playground[8]) ||
			(playground[2] === playground[4] && playground[4] === playground[6]));
	}

	function hasSpaceLeft() {
		for (let i = 0; i < playground.length; i++) {
			if(playground[i] !== "X" && playground[i] !== "O"){
				return true;
			}
		}
		return false;
	}

	function showWinner() {
		let color = currentPlayer === "X" ? "Grün" : "Blau"
		document.getElementById("winner").innerText = "Der Spieler mit der Farbe " + color + " hat gewonnen :)"
	}

	$('#reset-button').click(function(event){
		playground = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
		id = "";
		removeWinner()
		resetFilledFields()
	});

	function removeWinner() {
		document.getElementById("winner").innerText = ""
	}

	function resetFilledFields() {
		removeClass(document.getElementsByClassName(baseClassName + currentPlayer))
		switchCurrentPlayer()
		removeClass(document.getElementsByClassName(baseClassName + currentPlayer))
		switchCurrentPlayer()
	}

	function removeClass(toRemoveClass) {
		let lengthOfBoard = toRemoveClass.length
		let copy = [...toRemoveClass]
		for (let i = 0; i < lengthOfBoard; i++) {
			let toRemove = copy[i]
			let classToAdd = toRemove.classList[0]
			toRemove.classList = classToAdd
		}	
	}
});