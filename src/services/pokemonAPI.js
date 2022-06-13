import https from "./https";

export function fetchPokemon(next = "") {
  let url = "https://pokeapi.co/api/v2/item";
  if (next) {
    url = next;
  }
  let pokemon = https
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return pokemon || [];
}

export function fetchPokemonInfo(url) {
  let info = https
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return info || [];
}
