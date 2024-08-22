import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));//pelo que entendi, o eval transforma strings em números que podem ser calculados
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result || input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((item) => (
          <Pressable
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </Pressable>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <Pressable
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </Pressable>
        ))}
        {['1', '2', '3', '-'].map((item) => (//pensei que o "map" era utilizado apenas em api -_-
          <Pressable
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </Pressable>
        ))}
        {['DEL', '0', '=', '+'].map((item) => (
          <Pressable
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 40,
    color: '#fff',
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#bbb',
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});

export default App;

//;-;

//ANOTAÇÕES
// import React, { useState } from 'react';
// import { Pressable, StyleSheet, Text, View, TextInput} from 'react-native';

// const App = () => {
//     const [mais, setMais] = useState(0);

//     let textLog = 'teste1';
//     if (mais > 1) {
//       textLog = setResultado(Number(number) + Number(number2));
//       return number
//     } else if (mais > 0) {
//       textLog = '0';
//     }
    
//   const [number, onChangeText] = useState('');
//   const [number2, onChangeText2] = useState('');
//   const [resultado, setResultado] = useState('');

//   const soma = () => {
//     setResultado(Number(number) + Number(number2));
//     return number
//   };

//   const subtracao = () => {
//     setResultado(Number(number) - 5);
//   };

//   const multiplicacao = () => {
//     setResultado(Number(number) * 5);
//   };

//   const divisao = () => {
//     setResultado(Number(number) / 5);
//   };

//   return (
// <div>
// <View style={styles.container}>
//       <Pressable
//         onPress={() => {
//           setMais(current => current + 1);
//         }}
//         style={({pressed}) => [
//           {
//             backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
//           },
//           styles.wrapperCustom,
//         ]}>
//         {({pressed}) => (
//           <Text style={styles.text}>{pressed ? '+' : '+'}</Text>
//         )}
//       </Pressable>
//       <View style={styles.logBox}>
//         <Text testID="pressable_press_console">{textLog}</Text>
//       </View>


//       <TextInput   
//         style={styles.input}
//         onChangeText={onChangeText} 
//         value={number}
//         placeholder='Insira um número'
//         keyboardType='numeric'
//       />

//     </View>
// </div>);
// };

// const styles = StyleSheet.create({
// });

// export default App;

