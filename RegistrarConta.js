// RegistroScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from './Firebase';

export default function RegistrarConta () {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleRegistrar = () => {
    if (senha === confirmarSenha) {
      createUserWithEmailAndPassword(auth, email, senha)
        .then(() =>{
            navigation.navigate('Login')
        })
        .catch((error) => {
            alert(error.message)
        })
      setSnackbarVisible(true);
    } else {
      alert('As senhas não coincidem. Por favor, tente novamente.');
    }
  };

  const handleVoltarLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20,}}>Registro de Conta</Text>

      <TextInput
        style={{width: '80%', height: 40, borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10,}}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={{width: '80%', height: 40, borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10,}}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <TextInput
        style={{width: '80%', height: 40, borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 10,}}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
      />

      <Button title="Confirmar" onPress={handleRegistrar} />

      <Text></Text>

      <Button title="Voltar para Login" onPress={handleVoltarLogin} />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Registro bem-sucedido!
      </Snackbar>
    </View>
  );
};