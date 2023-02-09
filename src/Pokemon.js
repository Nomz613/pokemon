import axios from 'axios';
import React, { useState, useEffect } from './React'


const Pokemon = () => {
    // /asynch example with 
//     try{
//     let pokemon = axios
//         .get('https://pokeapi.co/api/v2/pokemon')
//         .then((response) => {
//             console.log(response);
//     });
// } catch (err){
//     console.log(err)
// }

////asynch await

const [pokemon, setPokemon] = useState([]);


const getPokemon = async () => {
    try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(data.results);;
    } catch (err) {
        console.log(err);
    }
}

    useEffect(() => {
        (async() => {
            const pokemonData = await getPokemon();
            console.log(pokemonData);
        })();
    })
    
    

    return(
       <>
       <p>hi pokemon</p>
       <button onClick={() => setPokemon(getPokemon())}>Get Pokemon</button>
       <button onClick={() => getPokemon()}>pokemonData</button>
       </>
    )

}
export default Pokemon;