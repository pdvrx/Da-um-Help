import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from './TelaFeed';
import Pesquisa from './TelaPesquisa';
import Notificaçao from './TelaNotificação'
import Perfil from './TelaPerfil';

const  Tab = createBottomTabNavigator();

const Tabs = () =>{
    
    return(
        <Tab.Navigator
         screenOptions={{headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle:{
                position: 'absolute',
                height: 60,
                ...style.shadow
            }
        }}>
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Pesquisa" component={Pesquisa}/>
            <Tab.Screen name="Notificaçao" component={Notificaçao}/>
            <Tab.Screen name="Perfil" component={Perfil}/>
        </Tab.Navigator>
    );

}

const style = StyleSheet.create({

shadow:{
    shadowColor: '#171717',
    shadowOffset: {width: 30, height: 30},
    shadowOpacity: 0.8,
    shadowRadius: 4,
}

});

export default Tabs;

