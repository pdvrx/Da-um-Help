import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Feed from '../pages/Feed';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Notification from '../pages/Notification';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        scrollEnabled: true,
        showLabel: false,

      }}

      screenOptions={{  
        tabBarStyle: { 
          position: 'absolute',
          borderRadius:'5px',
          elevation:0,
          backgroundColor:'#FFFF',
          shadowColor: '#171717',
          shadowOffset: {width: 1, height: -3},
          shadowOpacity: 0.3,
          shadowRadius: 3,
        },    
        tabBarActiveTintColor: '#60D2B7',
        tabBarInactiveTintColor:'#545454',
        headerShown: false,
      }}
    >
      <Tab.Screen name="Feed" component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={28} />
          ),
        }}    
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={33} />
          ),
        }}          
      />
 
    </Tab.Navigator>
  );
}

