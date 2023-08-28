const body = document.querySelector('body');
const select = document.createElement('select');
body.prepend(select);


fetch('https://dummyjson.com/products/categories')
.then(response =>  response.json())
.then(categories => {
	categories
	  .map((categorie, index) => {
			console.log(categorie);
		  const option = document.createElement('option');
		  option.value = index;
		  option.text = categorie;
		  select.append(option);
	  });
})
.catch(error => console.log(error.message));
