// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';  // Substitua pelo seu caminho real
import Cadastrar from './Cadastrar';
import Lista from './Lista';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Início' }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{ tabBarLabel: 'Cadastrar' }}
      />
      <Tab.Screen
        name="Lista"
        component={Lista}
        options={{ tabBarLabel: 'Lista' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;