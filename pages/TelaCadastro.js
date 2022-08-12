import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native';



export default function TelaCadastro({navigation}) {

  return (

    <View style={styles.center}>

        <Image style={styles.logo} source={require('../assets/logo.png')}/>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu Email"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Insira sua senha"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Repita sua senha"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

      <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe seu cpf"
                  keyboardType="text"
                  >
              </TextInput>
      </View>

        <View style={styles.inputbox}>
              <TextInput 
                  style={styles.txtInput}
                  placeholder = "Informe sua data de nascimento"
                  keyboardType="text"
                  >
              </TextInput>
      </View>



        <Pressable style={styles.btnCadastro} onPress={()=>navigation.navigate("Tabs")}>
          <Text style={styles.btnTxt}>Cadastra-se</Text>
        </Pressable>



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
    height:850,
    backgroundColor:'white'
  },

  inputbox:{
    paddingHorizontal:20,
    paddingVertical:8,
    backgroundColor:'#F5F4F4',
    borderRadius:25,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom:10
  },

  logo:{
    marginTop:-60,
    height:250,
    width:250,
    marginBottom:30
  },

  btnTxt:{
    fontSize:30,
    whiteSpace:'nowrap',
    color:'#FFFFFF',
    
  },

  btnCadastro:{
    paddingHorizontal:65,
    paddingVertical:13,
    backgroundColor:'#38C7A5',
    borderRadius:15,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop:15
  
  },

  txtInput:{

    marginVertical:10,
    border:0,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(200,200,200)',
    width:265,
    outlineStyle: 'none',
    outline: 'none',
    paddingVertical: 0,
    placeholderTextColor:'red' 


  },


  
  });