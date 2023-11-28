// BookListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './Firebase'; // Importe sua configuração do Firebase

const Lista = () => {
    const [livros, setLivros] = useState([]);
  
    useEffect(() => {
      read();
    }, []);
  
    const read = async () => {
      const livrosArray = [];
      const q = query(collection(db, "Livros")); // Certifique-se de ajustar o caminho da coleção
  
      try {
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((doc) => {
          const livro = {
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          };
  
          livrosArray.push(livro);
        });
  
        setLivros(livrosArray);
      } catch (error) {
        console.error('Erro ao buscar os livros:', error.message);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text>Lista de Livros</Text>
        <FlatList
          data={livros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.livroItem}>
              <Text>{item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
            </View>
          )}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    width: '80%',
    marginBottom: 5,
  },
});

export default Lista;