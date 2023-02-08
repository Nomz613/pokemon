import axios from 'axios';

const Pokemon = () => {
    ///asynch example with 
//     try{
//     let pokemon = axios
//         .get('https://pokeapi.co/api/v2/pokemon')
//         .then((response) => {
//             console.log(response);
//     });
// } catch (err){
//     console.log(err)
// }

//////asynch await
const getPokemon = asynch () => {
    try{
        const {data} = axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

    return(
       <>
       <p>hi pokemon</p>
       <button onClick={getPokemon()}>Get Pokemon</button>
       </>
    )

}
export default Pokemon;