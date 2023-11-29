import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './Firebase';

const Cadastrar = () => {
  const [autor, setAutor] = useState('');
  const [titulo, setTitulo] = useState('');

  const handleAddBook = async () => {
    try {
        await addDoc(collection(db, 'Livros'), {
        autor: autor,
        titulo: titulo
      });
      console.log('Livro cadastrado com sucesso! Document ID:');
    } catch (error) {
      console.error('Erro ao cadastrar o livro:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={autor}
        onChangeText={(text) => setAutor(text)}
      />
      <Button title="Cadastrar Livro" onPress={handleAddBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Cadastrar;