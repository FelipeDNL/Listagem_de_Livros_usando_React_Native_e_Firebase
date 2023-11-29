import React from 'react';
import { View, Text, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <Image 
        source={{uri: 'https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-the-books-clipart-vector-png-image_6653533.png'}} 
        style={{width: 300, height: 200, bottom: 50}}/>
      <Text style={{fontSize: 20}}>
        Uma aplicação básica para cadastro e visualização de livros. Utilizando o Firebase e seu banco de dados como meio de autenticação e para garantir a persistência de dados.
      </Text>
    </View>
  );
};

export default HomeScreen;