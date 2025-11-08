// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
const copy_button = document.getElementById("copy");
const from_textbox = document.getElementById("userInput1");

// add an event listener on the target element
copy_button.addEventListener("click", async () => {
	// callback function to handle event
	await navigator.clipboard.writeText(from_textbox.value);
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
const output_textbox = document.getElementsByClassName("output")[0];

// add an event listener on the target element
copy_button.addEventListener("click", async () => {
	// callback function to handle event
	await navigator.clipboard.writeText(from_textbox.value);
	output_textbox.value = from_textbox.value;
});
