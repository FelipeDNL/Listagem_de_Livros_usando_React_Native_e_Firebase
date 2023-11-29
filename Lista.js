import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './Firebase';

const Lista = () => {
    const [livros, setLivros] = useState([]);
  
    useEffect(() => {
      read();
    }, []);
  
    const read = async () => {
      const livrosArray = [];
      const q = query(collection(db, "Livros"));
  
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

    const handleRefresh = () => {
      read();
    };
  
    return (
      <View style={styles.container}>
        <View style={{flex: 0.0900, alignItems: 'center', margin: 20}}>
          <Button title="Atualizar Lista" onPress={handleRefresh}/>
        </View>
        <FlatList
          data={livros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <Text>Titulo: {item.titulo}</Text>
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
  },
  bookItem: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginBottom: 5,
    alignItems: 'center'
  },
});

export default Lista;