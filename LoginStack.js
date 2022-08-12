import * as React from 'react';
import {AppContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import TelaLogin from './pages/TelaLogin';
import TelaCadastro from './pages/TelaCadastro';


const screens = {
  TelaLogin:{
    screen: TelaLogin
  },

  TelaCadastro:{
    screen: TelaCadastro
  }


}

const Stack = createStackNavigator(screens);


export default createAppContainer(Stack)

