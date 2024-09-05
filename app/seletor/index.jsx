import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        fontWeight: 'bold'  
        
    },
    picker: {
        width: 200, 
        backgroundColor: 'lightgray',
        height: 30
    }
});

export default Seletor = () => {
    const[pokemon, setPokemon] = useState('');
    const [listapokemons, setListaPokemons] = useState([{name:''}]);
    // const lista_pokemons = [
    //     {nome:'Pikachu', value: 'pikachu'},//nome = id | value = o que vai aparecer no seletor
    //     {nome:'Bulbasaur', value: 'bulbasaur'},
    //     {nome:'Charmander', value: 'charmander'},
    //     {nome:'Squirtle', value: 'squirtle'},
    // ]; SUBSTITUIR PELA API UTILIZANDO O FETCH

    useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')//retornar uma "promisse" que diz que retornará algo | ?limit=100 = query string
        .then(response => response.json())//.then = função que será executada quando a "promisse" chegar | transforma a resposta em json
        .then(dados => setListaPokemons(dados.results))
    }, []) // }, [pokemon]) = toda vez que a variavel pokemon for alterada, o useEFfect vai ser chamado(isso aumenta a rapidez, pois evita chamada desnecessárias para a api)


return(

    <View style={styles.container}>
        <Text style={styles.title}>Selecione um Pokémon</Text>
        <Picker
            selectedValue={pokemon}
            style={styles.picker}
            onValueChange={(itemValue) => setPokemon(itemValue)} //value change: toda vez que usuario clicar no seletor, a função irá pegar o id(itemValue) e mudar irá o setPokemon
        >
            {/* label = placeholder */}
            <Picker.Item label="Selecione um Pokémon"/> 
            {listapokemons.map((item, index) =>( //mapeamento da lista dos pokemons
                <Picker.Item key={index} label={item.name} value={item.url} />
            ))}
        </Picker>

    </View>
)

}

