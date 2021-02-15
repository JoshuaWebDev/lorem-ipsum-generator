// Variables
const range = document.querySelector("#paragraphsRange");
const field = document.querySelector("#paragraphsNumber");
const result = document.querySelector(".result");
const send = document.querySelector(".send");

// Range and Number Input linking
range.addEventListener('input', function (e) {
	field.value = e.target.value;
})
field.addEventListener('input', function (e) {
	range.value = e.target.value;
})


/* Generate a phrase built by picking an item from each array (which I call text collections). Then, repeats the process a few times, randomly defined, to create a paragraph.*/

function generateParagraph() {
	const tempPhrase = [];
	for (let i = 0; i < calcParagraphLength(); i++) {

		tempPhrase.push(
			text.forEach((textCollection, i) => {
				tempPhrase.push(shuffleArrays(textCollection)[0])
			})
		)
	}
	return tempPhrase.join(" ");
}


function generateText() {
	let resultString = [];
	for (let i = 0; i < parseInt(field.value); i++) {
		resultString.push(
			`${generateParagraph()} <br> <br>`
		)
		result.innerHTML = resultString.join("");
	}

	return result.textContent;
}


// array sort randomizing function
function shuffleArrays(array) {
	for (let i = array.length - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]
	}
	return array;
}

// length of paragraph calculating function
function calcParagraphLength() {
	return Math.ceil(Math.random() * 2);
}

send.addEventListener('click', generateText)

result.addEventListener('click', function(event){
	document.execCommand("copy");
})

result.addEventListener("copy", function(event){
	if(event.clipboardData) {
		event.clipboardData.setData('text/plain', result.textContent);
		alert("Textão copiado.")
	}
	event.preventDefault();
})