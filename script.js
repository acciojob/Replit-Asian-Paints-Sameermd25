const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");
const boxes = document.querySelectorAll(".grid-item");

changeButton.addEventListener("click", function (e) {
	e.preventDefault();
	const blockId = document.getElementById("block_id").value;
	const color = document.getElementById("colour_id").value;

	if (parseInt(blockId) >= 1 && parseInt(blockId) <= 9) {
		clearColors();
		const target = document.getElementById(blockId);
		target.style.backgroundColor = color;
	} else {
		alert("Please enter a valid block ID (1-9).");
	}
});

resetButton.addEventListener("click", function (e) {
	e.preventDefault();
	clearColors();
});

function clearColors() {
	boxes.forEach(box => {
		box.style.backgroundColor = "transparent";
	});
}
