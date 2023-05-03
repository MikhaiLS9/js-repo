const DITTO_POKEMON_DATA_URL = "https://pokeapi.co/api/v2/pokemon/ditto";

function getDittoAbilityInfo() {
fetch(DITTO_POKEMON_DATA_URL)
.then(response => response.json())
.then(data => {
    const dittoPokemonAbilitityUrl = "https://pokeapi.co/api/v2/ability/7/"
    console.log(data.abilities[0].ability.url)
    return fetch(dittoPokemonAbilitityUrl)
})
.then(response => response.json())
.then(data => console.log(data.effect_entries[1]))
.catch(error => console.log(error))
}

getDittoAbilityInfo();
