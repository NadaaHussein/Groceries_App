import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';


function OnBoarding({navigation}){

  
    return(
      
           <ImageBackground source={require('./images/onboardingImage.png')} style={styles.container} >
      
  <View style={styles.container1}>
      <Image source={require('./images/carrot.png')} style={styles.carrotIcon}/>
      <Image source={require('./images/text1.png')} style={styles.ImageText1}/>
      <Image source={require('./images/text2.png')} style={styles.ImageText2}/>
      <TouchableOpacity style={styles.button}  onPress={()=> {navigation.navigate('signin')}}> 
            <Text style={styles.Textbutton}> Get Started </Text>
      </TouchableOpacity> 
      </View>
    
       </ImageBackground>
       
      );
  }
export default OnBoarding;



const styles = StyleSheet.create({
   
   container : {
    flex:1,
     width:'100%',
     height:'100%',
     justifyContent:'center',
     alignItems:'center',
     resizeMode:'contain',
    
   },
 
   container1 : {
    flex:1,
     width:'100%',
     height:'100%',
    
     alignItems:'center',
     resizeMode:'contain',
     paddingTop:400,
   
    
   },
 

   carrotIcon:{
    width:50,
    height:52,
   
    resizeMode:'contain',
    
   },
   ImageText1:{
    marginTop:20
   },
   ImageText2:{
    marginTop:20
   },

    button:{
    backgroundColor:'#53B175',
    borderRadius:19,
    width:350,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
   
   
  
    },

Textbutton:{
  color:'#ffffff',
  fontFamily:'Gilroy',
  fontWeight:'600',
  fontSize:18,
  textAlign:'center',
  
  
},
  });










  