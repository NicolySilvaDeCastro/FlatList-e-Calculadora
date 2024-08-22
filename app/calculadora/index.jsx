import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const App = () => {
  const [number, onChangeText] = useState('');
  const [number2, onChangeText2] = useState('');
  const [resultado, setResultado] = useState('');

  const soma = () => {
    setResultado(Number(number) + Number(number2));
    return number
  };

  const subtracao = () => {
    setResultado(Number(number) - 5);
  };

  const multiplicacao = () => {
    setResultado(Number(number) * 5);
  };

  const divisao = () => {
    setResultado(Number(number) / 5);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>
      
      <TextInput   
        style={styles.input}
        onChangeText={onChangeText} 
        value={number}
        placeholder='Insira um número'
        keyboardType='numeric'
      />

      <TextInput   
        style={styles.input}
        onChangeText={onChangeText2} 
        value={number2}
        placeholder='Insira um número'
        keyboardType='numeric'
      />

      <View style={styles.buttonContainer}>
        <Button title='+' onPress={soma} />
        <Button title='-' onPress={subtracao} />
        <Button title='x' onPress={multiplicacao} />
        <Button title=':' onPress={divisao} />
      </View>

      <Text style={styles.result}>O valor é {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '200px',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100px',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
  },
});

export default App;






















