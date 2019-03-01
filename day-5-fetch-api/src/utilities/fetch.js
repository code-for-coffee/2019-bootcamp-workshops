/**
 * This is the new way to fetch()
 * Notice there is no import; this is native!
 * This is the new and best way to do this.
 */

const POKEMON_NAME = "eevee";
const URL = `https://pokeapi.co/api/v2/pokemon/${POKEMON_NAME}`;

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
