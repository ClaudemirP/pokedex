const fetchPokemon = () => {
    const getPokemonUrl = id => `: https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []
    for (let i = 1; i <= 150; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }
    promise.all(pokemonPromises)
    .then(pokemons => {

        const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemons.types.map(typeInfo => typeInfo.type.name)

            accumulator += `
                <li class="card ${types[0]}">
                <img class="card-image" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
                <h2>${pokemon.id}. ${pokemon.name}</h2>
                <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p> 
                </li>
            `
            return accumulator
        }, '')
        const ul = document.querySelector('[data-js="pokedex"]')
        ul.innerHTML = lisPokemons
    })
}