import React, { useState } from 'react';
import { View, TextInput, Button, } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './Firebase';

export default function Cadastrar () {
  const [autor, setAutor] = useState('');
  const [titulo, setTitulo] = useState('');

  const handleCadastrar = async () => {
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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{width: '80%', height: 40, borderWidth: 2, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10,}}
        placeholder="Título"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
      <TextInput
        style={{width: '80%', height: 40, borderWidth: 2, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10,}}
        placeholder="Autor"
        value={autor}
        onChangeText={(text) => setAutor(text)}
      />
      <Button title="Cadastrar Livro" onPress={handleCadastrar} />
    </View>
  );
};