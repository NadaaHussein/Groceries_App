import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';

function Number ({navigation}){

  
    return(
      
           <ImageBackground source={require('./images/background.png')} style={styles.container}> 
           
            {/* <Image source={require('./images/arrowLeft.png')} style={{width:15,height:15}}/> */}
            <View style={styles.form}>
            <Text style={styles.headerTitle}>Enter Your mobile number</Text>
            <Text style={styles.Text2}>Mobile Number</Text>
             <View style={{flexDirection:'row'}}> 
            <Image  style={styles.Image} source={require('./images/Rectangle1.png')} />
            <TextInput style={styles.placeholder} placeholder='+880' keyboardType='phone-pad'></TextInput>
            </View>
            <View style={styles.TextInput}/>
            <TouchableOpacity  onPress={()=> {navigation.navigate('verification')}}> 
           
          <Image source={require('./images/floatingButton.png')} style={styles.button}/>
          </TouchableOpacity> 
            </View>
            {/* <Image source={require('./images/keyboard.png')} style={styles.keyboard}/> */}
          
           </ImageBackground>
           
    
               
          
               

      
  
       
      );
  }

export default Number;


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
        fontSize: 17,
        fontWeight: '600',
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
Image:{
  marginTop:10
},

button:{
  position: 'absolute',
 
  left: 290,
  top: 80,

},



   
  

  });