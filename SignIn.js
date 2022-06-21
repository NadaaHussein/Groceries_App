import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';

function SignIn({navigation}){

  
    return(
      <View style={styles.container}>
          <View>
           <ImageBackground source={require('./images/bg.png')} style={styles.container1}>  
      <View style={{flex:1,paddingTop:300}}>
           <Text style={styles.Text1}>Get your groceries </Text>
           <Text style={styles.Text1}>with nectar </Text>
           {/* <TextInput style={{borderBottomWidth:2, borderBottomColor:'#E2E2E2',color:'black',fontSize:20,paddingLeft:20,fontWeight:'600',justifyContent:'space-between',paddingTop:20}}>+880 {'\n'}</TextInput> */}
           <TouchableOpacity style={styles.button0}  onPress={()=> {navigation.navigate('number')}}> 
            <Text style={styles.Textbutton}> Continue with Phone Number </Text>
          </TouchableOpacity> 
      </View> 
     
           </ImageBackground>  
          </View>     
          
           <ImageBackground source={require('./images/Rectangle.png')} style={styles.container2}>
           
           <Text style={styles.Text2}> Or connect with social media </Text> 
           <TouchableOpacity style={styles.button1}> 
            <Text style={styles.Textbutton}> Continue with Google </Text>
          </TouchableOpacity> 
           <TouchableOpacity style={styles.button2}> 
           {/* <Image source={require('./images/facebook icon.png')}/> */}
            <Text style={styles.Textbutton}> Continue with Facebook </Text>
          </TouchableOpacity> 
           </ImageBackground>
           
      </View>
               
          
               

      
  
       
      );
  }
export default SignIn;



const styles = StyleSheet.create({
   
   container1 : {
   
     width:'100%',
     height:'75%',
     
    
   },
    container : {
     flex:1,
      width:'100%',
      height:'100%',
    
    },
 
   container2 : {
    flex:1,
    position:'absolute',
    width: 413.46,
    height: 350,
    left: 0.47,
    top: 500,
    
   },
  Text1:{
    color:'black',
    fontSize:26,
    fontWeight:'700',
    paddingLeft:20,
    fontFamily:'Gilroy',

 },
  Text2:{
    color:'#828282',
    fontFamily:'Gilroy',
    fontSize:14,
    fontWeight:'700',
    textAlign:'center',
    paddingTop:10


},
button1:{
  backgroundColor:'#5383EC',
  borderRadius:19,
  width:350,
  height:67,
  alignItems:'center',
  justifyContent:'center',
  marginLeft:22,
  marginTop:20
 

  },
  button2:{
    backgroundColor:'#4A66AC',
    borderRadius:19,
    width:350,
    height:67,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:22,
    marginTop:20,
   flexDirection:'row',
  
    },

Textbutton:{
color:'#ffffff',
fontFamily:'Gilroy',
fontWeight:'700',
fontSize:18,
textAlign:'center',


}, 

button0:{
  backgroundColor:'#53B175',
  borderRadius:19,
  width:350,
  height:67,
  alignItems:'center',
  justifyContent:'center',
  marginLeft:22,
  marginTop:30
 

  },
  

  });