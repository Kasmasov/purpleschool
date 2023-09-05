const body = document.querySelector('body');
const select = document.createElement('select');
body.prepend(select);


fetch('https://dummyjson.com/products/categories')
.then(response => response.json())
.then(categories => {
	categories
	  .map((category, index) => {
		  const option = document.createElement('option');
		  option.value = index;
		  option.text = category;
		  select.append(option);
	  });
})
.catch(error => console.log(error.message));

// решение через функции и innerHTML

const filter = document.createElement('div');
filter.style.marginBottom = '20px';
body.prepend(filter);

const errors = {
  404: 'Not Found',
}

function isError(status) {
  if (status === 200) return;
	throw new Error(`${errors[status]}`)
}

function createSelect(array) {
  filter.innerHTML = `<select>
	  ${array.map((item) =>`<option value=${item}>${item}</option>` )}
	</select>`
}

function getCategories(url) {
  return fetch(url)
	  .then((response) => {
		  isError(response.status);
		  return response.json();
	  })
	  .then((data) => {createSelect(data)})
	  .catch(error => filter.innerHTML = `Ошибка: ${error.message}`)
}

getCategories('https://dummyjson.com/products/categories');
