// Создать функцию myFetch, которая выполняет внутри XMLHttpRequest

function myFetch(url) {
return new Promise((resolve, reject) => {
  
  const request = new XMLHttpRequest();
  request.open('get', url);
  request.send();
      
  request.addEventListener('load', function() {
		if (this.status > 400) {
      reject(new Error(this.status));
		}
    resolve(this.responseText);
  });

	request.addEventListener('error', function() {
		reject(new Error(this.status));
	});
	 request.addEventListener('timeout', function() {
		reject(new Error('Timeout'));
	 });
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
};

myFetch('https://pokeapi.co/api/v2/pokemon/');