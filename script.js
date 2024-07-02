//* THE TEXT ROTATION EFFECT
const text = document.querySelector(".text p");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) =>
			`<span style= "transform: rotate(${i * 11}deg)">${char}</span>`
	)
	.join("");

//* THE baffle.js GLITCH EFFECT ON TEXTS
const textReveal = () => {
	baffle(".reveal")
		.set({
			character: "",
			speed: 150,
		})
		.start()
		.reveal(3000);
};

const textRevealH1 = () => {
	baffle("h1")
		.set({
			character: "",
			speed: 150,
		})
		.start()
		.reveal(2500);
};

//* TO DELAY THE EFFECT
const interval = setInterval(textReveal, 8000); //TODO: CHANGE THE NUMBER TO DELAY INTERVAL
const intervalH1 = setInterval(textRevealH1, 4000); //TODO: CHANGE THE NUMBER TO DELAY INTERVAL
