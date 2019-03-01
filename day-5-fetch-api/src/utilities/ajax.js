/**
 * This is the old way of fetching with $.ajax()
 * Notice how we are forced to import jQuery.
 * This is the legacy way to do this.
 */

import $ from "jquery";

const POKEMON_NAME = "eevee";
const URL = `https://pokeapi.co/api/v2/pokemon/${POKEMON_NAME}`;

// http://api.jquery.com/jQuery.ajax/
$.ajax({
  url: URL
}).done(function(json) {
  console.log(json);
});
