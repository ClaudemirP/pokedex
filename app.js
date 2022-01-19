const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []
    for (let i = 1; i <= 150; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(responde => response.json()))
    }
    promise.all(pokemonPromises)
    .then(pokemons => {

        const liPokemons = pokemons.reduce((accumulator, pokemon) => {
            accumulator += `
            <li class="card">
            <h2>${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name)}</p> 
            </li>`
            return accumulator
        }, '')
    })
}