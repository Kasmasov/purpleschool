/*
  Получение средней цены товара
	https://dummyjson.com/products
*/

function req(id) {
  const request = new XMLHttpRequest();
	request.open('get', 'https://dummyjson.com/products/' + id);
	request.send();

	request.addEventListener('load', function() {
		const data = JSON.parse(this.responseText);
		console.log(data);
	});
};

req(1);
req('');
req(3);

const request = new XMLHttpRequest();
request.open('get', 'https://dummyjson.com/products/');
request.send();

const products = request.addEventListener('load', function() {
	const { products } = JSON.parse(this.responseText);
	const summ = products.reduce((acc, item) => (acc += item.price), 0);
	console.log(summ / products.length)
});


function requestPokemonAbility(method, url, name) {
  const request = new XMLHttpRequest();
	request.open(method, `${url}/${name || ''}`);
	request.send();

	request.addEventListener('load', function() {
		const { abilities } = JSON.parse(this.responseText);
		
		const request = new XMLHttpRequest();
		request.open('get', abilities[0].ability.url);
		request.send();
   
      request.addEventListener('load', function() {
				const data = JSON.parse(this.responseText);
				console.log(data.effect_entries.find((item) => item.language.name === 'en' ).effect);
			});
	});
}

requestPokemonAbility('get', 'https://pokeapi.co/api/v2/pokemon', 'ditto');



