const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
const errorText = 'Проблеммы с запросом, Status = '


function getRequest(url, pokemonName) {
  return fetch(`${url}${pokemonName}`)
    .then((response) => {
      getError(response.status);
      return response.json();
    })
};

function getError(status) {
  if (status !== 200) {
    switch (status) {
      case 400:
        throw new Error('Bad request! Incorrect syntax of request.');
      case 401: 
        throw new Error('Unauthorized! You have to authorize.');
      case 402:
        throw new Error('Payment Required! You have to make a payment for services.');
      case 403:
        throw new Error('Forbidden! Not enough rights for access.');
      case 404: 
        throw new Error('Not Found! The server cannot find the requested resource.')
      case 405: 
        throw new Error('Method Not Allowed! The method has been deactivated and can\'t be used.')
      case 405: 
        throw new Error('Not Acceptable! Setver  doesn\'t find content!')
      default:
        throw new Error('Sorry! Error! We\'re trying to fix problem soon!');
    }
  }

}


getRequest(BASE_URL, 'ditto')
  .then(({ abilities }) => {
		return getRequest(abilities[0].ability.url, '', errorText)
	})
	.then(response => {
		const pokemonEffect = response.effect_entries.find((item) => item.language.name === 'en' ).effect;
		console.log(pokemonEffect);
	})
	.catch(error => console.log(error));