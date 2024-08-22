import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: ' - Estudar React Native', completed: false },
    { id: '2', text: ' - Revisar sobre props', completed: false },
    { id: '3', text: ' - Ler um livro sobre javascript', completed: false },
    { id: '4', text: ' - Fazer o curso do Guanabara', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');


  function tachar(id){//me confundi, mas no fim consegui
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const renderizacao = ({ item }) => ( //arrow function
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => tachar(item.id)} style={styles.item}>
        <Text style={[styles.itemText, item.completed && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <FlatList
        data={tasks}
        renderItem={renderizacao}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
    width: 400,
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  titulo: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      fontFamily: 'helvetica',
      padding: 20,
      gap: 20,
    },

    itemText: {
      flex: 1,
      fontSize: 25,
      fontFamily: 'helvetica',
      padding: 3,
    },
    
    completed: {
      textDecorationLine: 'line-through',
      color: '#888',
    },
  });

export default App;


//ANOTAÇÕES:
// import React, {useState, FlatList, View, Text} from 'react'

// function App() {
//   const tarefa = [
//   { id: '1', content: 'Item 1', feito: false },
//   { id: '2', content: 'Item 2', feito: false },
//   { id: '3', content: 'Item 3', feito: false }
// ];

// listaTarefa = (tarefa) => {
//   const[tasks, setTasks] = useState(tarefa)
//   function Lista(tarefa){
//     tasks.find((task)) = tarefa.id == task.id ? { ...tarefas, feito: !tarefas.feito } : tarefas
//     // tasks.find((task)) => tarefa.id == task.id
//     // task.feito = !task.feito
//   }
//   setTasks(tasks)
// }

//     return (
//     <>  
// <button onPress={
//    (Lista) 
// }></button>
//     </>
//   )
// }

// export default App


//REFERENCIA https://itgolabs.com/blog/pt-br/2024/01/12/como-criar-uma-lista-de-tarefas-com-react/