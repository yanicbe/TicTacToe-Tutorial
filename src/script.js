$( document ).ready(function() {
	playground = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
	let currentPlayer = "X"
	let id
	const baseClassName = "selected-by-"

    $('.play-area').click(function(event){
		id = event.target.id
		setMove(id.split("_")[1])
	});
	
	function setMove(index) {
		if(playground[index] !== "X" && playground[index] !== "O"){
			playground[index] = currentPlayer
			console.log(playground)
			reRenderBoard()
			switchCurrentPlayer()
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
});