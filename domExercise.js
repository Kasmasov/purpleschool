const body = document.body;
const div = document.createElement('div');
const p = document.createElement('p');
const h3 = document.createElement('h3');
div.textContent = 'I love JavaScript';
p.textContent = 'We want to learn JavaScript';
h3.textContent = 'JavaScript is the one of programming languages';
const input = document.createElement('input');
body.prepend(div, p, h3, input)

let inputValue = '';
const allTags = [...body.children];
input.addEventListener('change', handleChange);
function handleChange(event) {
  inputValue = event.target.value;
	const search = searchTags(allTags, inputValue);
	console.log(search);
}
window.addEventListener('keyup', () => {
	handleChange(event);
});

function searchTags(tags, value) {
	return tags.filter((tag) => tag.innerHTML.toLowerCase().includes(value.toLowerCase()))
}
