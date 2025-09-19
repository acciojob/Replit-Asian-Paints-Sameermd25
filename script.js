// Get references to all needed elements
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("reset_button");
const boxes = document.querySelectorAll(".grid-item");

// Change color logic
changeButton.addEventListener("click", function (e) {
	e.preventDefault();

	const blockId = document.getElementById("block_id").value.trim();
	const color = document.getElementById("colour_id").value.trim();

	// Check if valid block ID between 1 and 9
	if (parseInt(blockId) >= 1 && parseInt(blockId) <= 9) {
		clearColors(); // Set all boxes to transparent
		const targetBox = document.getElementById(blockId);
		targetBox.style.backgroundColor = color;
	} else {
		alert("Please enter a valid block ID between 1 and 9.");
	}
});

// Reset logic
resetButton.addEventListener("click", function (e) {
	e.preventDefault();
	clearColors(); // Just clear all background colors
});

// Utility function to clear all background colors
function clearColors() {
	boxes.forEach(box => {
		box.style.backgroundColor = "transparent";
	});
}
