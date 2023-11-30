import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './Firebase';

export default function Lista () {
    const [livros, setLivros] = useState([]);
  
    useEffect(() => {
      ler();
    }, []);
  
    const ler = async () => {
      const livrosArray = [];
      const consulta = query(collection(db, "Livros"));
      var count = 1;
  
      try {
        const resultConsulta = await getDocs(consulta);
  
        resultConsulta.forEach((doc) => {

          const livro = {
            id: "Livro " + count++,
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

    const handleAtualizar = () => {
      ler();
    };
  
    return (
      <View style={{flex: 1, justifyContent: 'center',}}>
        <View style={{flex: 0.0900, alignItems: 'center', margin: 20}}>
          <Button title="Atualizar Lista" onPress={handleAtualizar}/>
        </View>
        <FlatList
          data={livros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{flex: 1, borderWidth: 2, borderRadius: 10, padding: 10, margin: 10, marginBottom: 5, alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>{item.id}</Text>
              <Text>Titulo: {item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
            </View>
          )}
        />
      </View>
    );
  };