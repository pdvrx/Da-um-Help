import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/TelaLogin';
import Cadastro from './pages/TelaCadastro'


const Stack = createNativeStackNavigator();



export default function App() {
  return (
      <>

    <NavigationContainer>



      <Stack.Navigator screenOptions= { {headerShown: false}}
        initialRouteName = "Login">
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Cadastro" component = {Cadastro}/>


      </Stack.Navigator>




    </NavigationContainer>
    </>
  );
}