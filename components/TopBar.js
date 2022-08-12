import * as React from 'react';
import { Image, Text, StyleSheet, View, Pressable} from 'react-native';

export default function TopBar() {
  return (
    <View style={styles.position}>
      <Pressable style={styles.btn}>

          <View style={styles.barra} >
          <Image style={styles.foto} source={require('../assets/typoWhite.png')}/>
          </View>

      </Pressable>
     </View>
    );
  }
 


const styles = StyleSheet.create({

  foto:{

    padding:'20px',
    width:'130px',
    height:'30px',
    borderRadius:'8px'
  },

  barra:{
    backgroundColor:'#38C7A5',
    width:'100vw',
    alignItems:'center',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  },

  position:{
    position:'absolute',
    zIndex:1,
    top:'0%'
  }


});
