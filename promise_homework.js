function getRequest(url, pokemonName, errorMessage) {
  return fetch(`${url}${pokemonName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${errorMessage} ${response.status}`)
      }
      return response.json();
    })
};

const errorText = 'Проблеммы с запросом, Status = '

getRequest('https://pokeapi.co/api/v2/pokemon/', 'ditto', errorText)
  .then(({ abilities }) => {
		console.log(abilities)
		return getRequest(abilities[0].ability.url, '', errorText)
	})
	.then(response => {
		const pokemonEffect = response.effect_entries.find((item) => item.language.name === 'en' ).effect;
		console.log(pokemonEffect);
	})
	.catch(error => console.log(error));