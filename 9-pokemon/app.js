
const DITTO_POKEMON_DATA_URL = 'https://pokeapi.co/api/v2/pokemon/ditto';
const DITTO_POKEMON_ABILITY_URL = "https://pokeapi.co/api/v2/ability/7/"

function findDittoAbilityUrl(){
  const dittoDataRequest = new XMLHttpRequest();
  dittoDataRequest.open("GET", DITTO_POKEMON_DATA_URL);

  dittoDataRequest.onload = function(){
    const data = JSON.parse(dittoDataRequest.response);
    console.log(data.abilities[0].ability.url);
  }

  dittoDataRequest.send();
}

findDittoAbilityUrl()

function getDittoAbilityInfo(){
  const dittoAbilityRequest = new XMLHttpRequest();
  dittoAbilityRequest.open("GET", DITTO_POKEMON_ABILITY_URL);

  dittoAbilityRequest.onload = function(){
  const data = JSON.parse(dittoAbilityRequest.response)
  console.log(data['effect_entries'][1]);
}

dittoAbilityRequest.send();
}

getDittoAbilityInfo()
