import axios from 'axios';

const Pokemon = () => {
    let pokemon = axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
        console.log(response);
    });
    return(
        
        {pokemon.data.results.map(pokemon => {
            return <p>{pokemon.name}</p>
        })}
    )
}

export default Pokemon;