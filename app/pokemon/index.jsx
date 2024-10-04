import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#fff', // Mudança de cor para melhor contraste
    },
    picker: {
        width: 200,
        height: 50,
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo branco com transparência
        borderRadius: 10, // Bordas arredondadas
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Seletor = () => {
    const [pokemon, setPokemon] = useState('');
    const [listaPokemons, setListaPokemons] = useState([]);
    const [tiposPokemon, setTiposPokemon] = useState([]);
    const [tipoSelecionado, setTipoSelecionado] = useState('');

    // Carregar os tipos de Pokémon
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(response => response.json())
            .then(data => setTiposPokemon(data.results));
    }, []);

    // Carregar pokémons do tipo selecionado
    useEffect(() => {
        if (tipoSelecionado) {
            fetch(tipoSelecionado) // Usa a URL do tipo selecionado
                .then(response => response.json())
                .then(data => {
                    const pokemons = data.pokemon.map(p => ({
                        name: p.pokemon.name,
                        url: p.pokemon.url,
                    }));
                    setListaPokemons(pokemons);
                });
        } else {
            setListaPokemons([]); // Limpa a lista quando nenhum tipo é selecionado
        }
    }, [tipoSelecionado]);

    // Carregar imagem do Pokémon selecionado
    const [imagemPokemon, setImagemPokemon] = useState('');
    
    useEffect(() => {
        if (pokemon) {
            fetch(pokemon)
                .then(response => response.json())
                .then(data => {
                    setImagemPokemon(data.sprites.front_default); // Obtém a imagem
                });
        }
    }, [pokemon]);

    return (
        <ImageBackground 
            source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/de2uhd3-3d4bc964-2cad-4662-8309-ccee9ebb52e7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZGUydWhkMy0zZDRiYzk2NC0yY2FkLTQ2NjItODMwOS1jY2VlOWViYjUyZTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CuUm06zvj8DlOpRcmLhXhGVD_La5PSCW0wwQ2UxgBdE' }} 
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Selecione um Pokémon</Text>
                
                {/* TIPOS: */}
                <Picker
                    selectedValue={tipoSelecionado}
                    style={styles.picker}
                    onValueChange={(itemValue) => setTipoSelecionado(itemValue)} 
                >
                    <Picker.Item label="Selecione um Tipo" value="" /> 
                    {tiposPokemon.map((item, index) => (
                        <Picker.Item key={index} label={item.name} value={item.url} />
                    ))}
                </Picker>

                {/* NOME: */}
                <Picker
                    selectedValue={pokemon}
                    style={styles.picker}
                    onValueChange={(itemValue) => setPokemon(itemValue)} 
                >
                    <Picker.Item label="Selecione um Pokémon" value="" /> 
                    {listaPokemons.map((item, index) => (
                        <Picker.Item key={index} label={item.name} value={item.url} />
                    ))}
                </Picker>

                {/* Imagem do Pokémon Selecionado */}
                {imagemPokemon && (
                    <Image source={{ uri: imagemPokemon }} style={styles.image} />
                )}
            </View>
        </ImageBackground>
    );
};

export default Seletor;




































//////////////////////////RASCUNHOS /////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import {Picker} from '@react-native-picker/picker'

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 25,
//         marginBottom: 20,
//         fontWeight: 'bold'  
        
//     },
//     picker: {
//         width: 200, 
//         backgroundColor: 'lightgray',
//         height: 30
//     }
// });

// export default Seletor = () => {
//     const[pokemon, setPokemon] = useState('');
//     const [listapokemons, setListaPokemons] = useState([{name:''}]);
//     const[tipopokemon, setTipoPokemon] = useState([{type:''}]);
//     const[tiposelecionado, setTipoSelecionado] = useState([{type:''}]);
//     // const lista_pokemons = [
//     //     {nome:'Pikachu', value: 'pikachu'},//nome = id | value = o que vai aparecer no seletor
//     //     {nome:'Bulbasaur', value: 'bulbasaur'},
//     //     {nome:'Charmander', value: 'charmander'},
//     //     {nome:'Squirtle', value: 'squirtle'},
//     // ]; SUBSTITUIR PELA API UTILIZANDO O FETCH


//     useEffect(() =>{ 
//     fetch('https://pokeapi.co/api/v2/type/?limit=100')
//         .then(response => response.json())
//         .then(dados => setTipoPokemon(dados.results))
//     }, [])

//     useEffect(() =>{ 
//     fetch(`https://pokeapi.co/api/v2/type/$(selectType)`)
//         .then(response => response.json())
//         .then(dados => setListaPokemons(dados.results))
//     }, []) 

// //     useEffect(() =>{ 
// //         //() =>{} -função anonima
// // fetch('https://pokeapi.co/api/v2/pokemon?limit=100')//retornar uma "promisse" que diz que retornará algo | ?limit=100 = query string
// //     .then(response => response.json())//.then = função que será executada quando a "promisse" chegar | transforma a resposta em json
// //     .then(dados => setListaPokemons(dados.results))
// // }, []) // }, [pokemon]) = toda vez que a variavel pokemon for alterada, o useEFfect vai ser chamado(isso aumenta a rapidez, pois evita chamada desnecessárias para a api)

    
// return(

//     <View style={styles.container}>
//         <Text style={styles.title}>Selecione um Pokémon</Text>
//         {/* TIPOS: */}
//         <Picker
//             selectedValue={tipopokemon}
//             style={styles.picker}
//             onValueChange={(itemValue) => setTipoPokemon(itemValue)} //value change: toda vez que usuario clicar no seletor, a função irá pegar o id(itemValue) e mudar irá o setPokemon
//         >
//             {/* label = placeholder */}
//             <Picker.Item label="Selecione um Tipo"/> 
//             {tipopokemon.map((item, index) =>( //mapeamento da lista dos pokemons
//                 <Picker.Item key={index} label={item.name} value={item.url} />))}
//         </Picker>

//         {/* NOME: */}
//         <Picker
//             selectedValue={pokemon}
//             style={styles.picker}
//             onValueChange={(itemValue) => setPokemon(itemValue)} //value change: toda vez que usuario clicar no seletor, a função irá pegar o id(itemValue) e mudar irá o setPokemon
//         >
//             {/* label = placeholder */}
//             <Picker.Item label="Selecione um Pokémon"/> 
//             {listapokemons.map((item, index) =>( //mapeamento da lista dos pokemons
//                 <Picker.Item key={index} label={item.name} value={item.url} />))}
//         </Picker>
//     </View>
// )

// }

// //fetch -> chamada para a API
// //Picker -> seletor
// //useEffect -> Hook, função asincrona, renderiza apenas uma parte do app que foi chamada