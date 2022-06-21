import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';

export default class App extends React.Component{

  render(){
    return(
      
           <ImageBackground source={require('./images/OrderAccepted/Mask_Group.png')} style={styles.container} >
      
  <View style={styles.container}>
      <Image source={require('./images/OrderAccepted/RightSign.png')} style={styles.RightSign}/>
      <Image source={require('./images/OrderAccepted/Text1.png')} style={styles.ImageText1}/>
      <Image source={require('./images/OrderAccepted/Text2.png')} style={styles.ImageText2}/>
      <TouchableOpacity style={styles.button}> 
            <Text style={styles.Textbutton}> Track Order </Text>
      </TouchableOpacity> 
      <TouchableOpacity> 
            <Text style={styles.Textbutton2}> Back to home </Text>
      </TouchableOpacity> 
      </View>
    
       </ImageBackground>
       
      );
  }
}



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
 

   RightSign:{
   // width:50,
    //height:52,
    width: 250,
    height: 250,
    resizeMode:'contain',
    
   },
   ImageText1:{
    marginTop:40,
    //width:310,
    //height:70
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
    marginTop:100
   
   
  
    },

Textbutton:{
  color:'#ffffff',
  fontFamily:'Gilroy',
  fontWeight:'700',
  fontSize:17,
  textAlign:'center',
  
  
},
Textbutton2:{
  color:'#000000',
  fontFamily:'Gilroy',
  fontWeight:'700',
  fontSize:17,
  textAlign:'center',
  lineHeight: 60,
  
},
  });










  