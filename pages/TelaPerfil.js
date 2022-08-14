import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function App() {

    return(
      <View style={styles.center}>
        <Text> Doador </Text>
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
    backgroundColor:'white'
  },

  
  });