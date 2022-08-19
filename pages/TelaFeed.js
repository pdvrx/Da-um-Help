import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function App() {

    return(
      <View style={styles.center}>

        <View style={styles.topTypo}>
        <Image source={require('../assets/typo.png')}/>
        </View>
        <Text> Feed </Text>
      </View>
    );


}

const styles = StyleSheet.create({
  center:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    textAlign:'center',
    backgroundColor:'E5E5E5',
    padding:10,
  },

  topTypo:{
    backgroundColor:'#38C7A5'
  }

 
  });