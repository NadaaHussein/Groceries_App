import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,KeyboardAvoidingView , TextInput,ImageBackground,Button,Pressable} from 'react-native';

function Verification({navigation}){

  
    return(
      
           <ImageBackground source={require('./images/background.png')} style={styles.container}> 
           
            {/* <Image source={require('./images/arrowLeft.png')} style={{width:15,height:15}}/> */}
            <View style={styles.form}>
            <Text style={styles.headerTitle}>Enter Your 4-digit code</Text>
            <Text style={styles.Text2}>code</Text>
             <View style={{flexDirection:'row'}}> 
           
            <TextInput style={styles.placeholder} placeholder='- - - -  ' keyboardType='phone-pad'></TextInput>
            </View>
            <View style={styles.TextInput}/>
            <Text style={styles.Text3}>Resend code</Text>
            <TouchableOpacity  onPress={()=> {navigation.navigate('location')}}>
            <Image source={require('./images/floatingButton.png')} style={styles.button}/>
            </TouchableOpacity>
            </View>
            {/* <Image source={require('./images/keyboard.png')} style={styles.keyboard}/> */}
          
           </ImageBackground>
           
    
               
          
               

      
  
       
      );
  }
export default Verification;



const styles = StyleSheet.create({
   
  
    container : {
     flex:1,
      width:'100%',
      height:'100%',
      resizeMode:'contain',
    },
    form: {
       
        paddingHorizontal: 20,
       },
       TextInput: {
       
        borderBottomWidth: 2,
        borderBottomColor: '#E2E2E2',
        paddingBottom: 5,
       
      },
      placeholder:{
        fontFamily: 'Gilroy',
        fontSize:20,
        fontWeight: '900',
      },
  
       headerTitle: {
        fontSize: 25,
    
        fontFamily: '$gilroyNormal600',
        marginBottom: 40,
        color: '#030303',
        paddingTop: 120,
      },
  Text2:{
    color:'#828282',
    fontFamily:'Gilroy',
    fontSize:17,
    fontWeight:'600',
    paddingBottom:10


},
Text3:{
  color:'green',
  fontFamily:'Gilroy',
  fontSize:17,
  fontWeight:'500',
  position: 'absolute',
 
  right: 290,
  top: 390,


},
Image:{
  marginTop:10
},

button:{
  position: 'absolute',
 
  left: 290,
  top: 80,

},



   
  

  });