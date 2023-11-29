import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';  // Substitua pelo seu caminho real
import Cadastrar from './Cadastrar';
import Lista from './Lista';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Início', tabBarIcon: () => <MaterialCommunityIcons name="thought-bubble-outline" size={24} color="black" />}}
      />
      <Tab.Screen
        name="Cadastrar Livro"
        component={Cadastrar}
        options={{ tabBarLabel: 'Cadastrar', tabBarIcon: () => <MaterialCommunityIcons name="typewriter" size={24} color="black" /> }}
      />
      <Tab.Screen
        name="Lista de Livros"
        component={Lista}
        options={{ tabBarLabel: 'Lista', tabBarIcon: () => <MaterialCommunityIcons name="clipboard-check" size={24} color="black" />  }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;