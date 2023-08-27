
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
                  const pokemonEffect = data.effect_entries.find((item) => item.language.name === 'en' ).effect;
                  console.log(pokemonEffect);
              });
      });
  }
  
  requestPokemonAbility('get', 'https://pokeapi.co/api/v2/pokemon', 'ditto');
  
  
  
  