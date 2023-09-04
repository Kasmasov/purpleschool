const body = document.body;

const wrapper = document.createElement('div');
wrapper.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; justify-content: center;');

const buttonGroup = document.createElement('div');
buttonGroup.style.display = 'flex';
buttonGroup.style.gap = '12px';
buttonGroup.style.marginBottom = '12px';


const count = document.createElement('div');
let counter = 0;
count.textContent = counter;
count.style.fontSize = '32px';

body.prepend(wrapper);
wrapper.prepend(buttonGroup);
wrapper.append(count);

for (let i = 0; i < 5; i++) {
  const button = document.createElement('button');
  button.textContent = 'Нажми меня!';
  button.style.padding = '8px 8px';
  button.style.width = '100px';
  button.style.background = 'white';
  button.style.border = '1px solid grey';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
  button.style.userSelect = 'none';
  button.id = `button${i}`;

  buttonGroup.append(button);
}

buttonGroup.addEventListener('click', handleClick);

function handleClick() {
  const id = event.target.getAttribute('id');
  [...buttonGroup.children].forEach((button) => {
    document.querySelector(`#${button.id}`).textContent = button.id === id
      ? 'Нажата!'
      : 'Нажми меня!'
  });
  count.textContent = counter += 1;
};