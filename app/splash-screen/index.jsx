import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const App = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: 'https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723334400&semt=ais_hybrid' }}
    />
    <Text style={styles.title}>Carregando</Text>
    <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: 'gray',
  },
  title: {
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 16, // Adiciona espaço entre o título e a imagem
  },
  image: {
    resizeMode: 'cover',
    height: 200,
    width: 200,
    borderRadius: 100,
  },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
});

export default App;

