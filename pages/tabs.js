import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from './TelaFeed';
import Pesquisa from './TelaPesquisa';
import Notificaçao from './TelaNotificação'
import Perfil from './TelaPerfil';
import Icon from 'react-native-vector-icons/FontAwesome'


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
            },
            tabBarActiveTintColor: 'red'
        }}>
            <Tab.Screen name="Feed" component={Feed}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <Icon name="github" size={30} color="green" />
                    )
                }}
            />
            <Tab.Screen name="Pesquisa" component={Pesquisa}
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <Icon name="github" size={30} color="green" />
                    )
             }}
            />
            <Tab.Screen name="Notificaçao" component={Notificaçao}
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <Icon name="github" size={30} color="green" />
                    )
            }}
            />
            <Tab.Screen name="Perfil" component={Perfil}
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <Icon name="github" size={30} color="green" />
                    )
            }}
            />
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

