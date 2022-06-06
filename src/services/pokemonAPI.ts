import https from './https';

export function fetchPokemon(amount = 1) {

  let pokemon = https
    .get("https://pokeapi.co/api/v2/item/")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
    return pokemon || []
  }