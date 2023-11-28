import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import app from './Firebase';

const auth = getAuth(app);

export default function Login ({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('BottomTabNavigator');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  };

  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{width: '80%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10}}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}/>

      <TextInput
        style={{width: '80%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10}}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}/>

      <Button 
        title="Login" 
        onPress={handleLogin} />
    </View>
  );
};
