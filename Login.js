import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './Firebase';

export default function Login ({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Deslogar');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  };

  const handleTexto = () => {
    navigation.navigate('RegistrarConta')
  };

  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontWeight: 'bold',fontSize: 50, bottom: 15}}>Login</Text>
      <TextInput
        style={{width: '80%', height: 40, borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10}}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}/>

      <TextInput
        style={{width: '80%', height: 40, borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10}}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}/>

      <Button title="Login" onPress={handleLogin} />

      <Text 
        style={{top: 10, color: 'blue', textDecorationLine: 'underline' }}
        onPress={handleTexto}
      >Não possui conta? Registre-se</Text>
    </View>
  );
};
