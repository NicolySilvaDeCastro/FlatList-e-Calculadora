import React from 'react'; 
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, 
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'white', 
        textAlign: 'center', 
    },
    botao1: {
        backgroundColor: 'rgba(40, 15, 32, 0.9)',
        fontSize: 20,
        color: 'white',
        width: 400,
        height: 60, 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao2: {
        fontSize: 20,
        backgroundColor: 'rgba(10, 15, 32, 0.9)',
        color: 'white',
        width: 400, 
        height: 60, 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    voltar: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: 'black',
        color: 'white',
        width: '100%', 
        height: 60, 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10, 
        paddingHorizontal: 20,
    },
});

const Home = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://ijnet.org/sites/default/files/styles/full_width_node/public/story/2021-10/chris-ried-ieic5Tq8YMk-unsplash.jpg?h=0c24f139&itok=-PHiVj3I' }}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Atividades</Text>

                <Link href="/splash-screen">
                    <Pressable style={styles.botao1}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Splash Screen com LinearGradient</Text>
                    </Pressable>
                </Link>

                <Link href="/calculadora">
                    <Pressable style={styles.botao2}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Calculadora Simples</Text>
                    </Pressable>
                </Link>

                <Link href="/calculadora2">
                    <Pressable style={styles.botao1}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Calculadora Avançada com Pressable</Text>
                    </Pressable>
                </Link>

                <Link href="/list-tarefas">
                    <Pressable style={styles.botao2}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Lista de Tarefas com FlatList</Text>
                    </Pressable>
                </Link>

                <Link href="/Login">
                    <Pressable style={styles.botao1}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Tela de Login com Modal</Text>
                    </Pressable>
                </Link>

                <Link href="/seletor">
                    <Pressable style={styles.botao2}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Seletor Picker Pokémons</Text>
                    </Pressable>
                </Link>
                
                <Link href="/_sitemap">
                    <Pressable style={styles.voltar}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Voltar</Text>
                    </Pressable>
                </Link>
            </View>
        </ImageBackground>
    );
};

export default Home;

