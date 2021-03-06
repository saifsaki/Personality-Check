const colors = [
	'red',
	'yellow',
	'green',
	'blue',
	'orange',
	'indigo',
	'violet'
];

const paras = [
	"Red is the great clarifier bright and revealing. I can’t imagine becoming bored with red it would be like becoming bored with the person you love.",
	"Silence isn't golden. Its yellow.",
	"Green is the prime color of the world, and that from which its loveliness arises.",
	"Blue has no dimensions, it is beyond dimensions. ...",
	"If the family were a fruit, it would be an orange, a circle of sections, held together but separable - each segment distinct.",
	"I don't have a purple problem, I have a purple passion!",
	"You are someone's reason to smile"
];

const container = document.querySelector('section');
const h1 = document.querySelector('h3');
const selectedColor = document.querySelector('#selected_color');
const para = document.querySelector('p');

for(let color of colors) {
	const box = document.createElement('div');
	box.classList.add('box');

	container.appendChild(box);


	box.style.backgroundColor = color;

	box.addEventListener('click', function(){
		h1.innerText = "You have selected: ";
		selectedColor.innerText = box.style.backgroundColor;
		selectedColor.style.backgroundColor = box.style.backgroundColor;
		para.innerText = paras.find((p, i) => box.style.backgroundColor === colors[i])
	});
	
	
}

