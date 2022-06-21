import React from 'react';
import {View,Text,StyleSheet,Image,SafeAreaView,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';



 function Splash({navigation}){
 
  
    return(
     
        
     
       <View style={styles.container}> 
        
      <TouchableOpacity style={styles.container}  onPress={()=> {navigation.navigate('onboarding')}}>
       <Image source={require('./images/logoo.png')} style={styles.carrotIcon}/>
      </TouchableOpacity>
      
       </View>
 
      );
     
      
  }
  // componentDidMount(){
  //   setTimeout(()=>{

  //    },3);
  //  }
export default Splash;


const styles = StyleSheet.create({
   
   container : {
    backgroundColor:'#53B175',
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height:'100%',
     resizeMode:'contain',
   },
   carrotIcon:{
    width:'70%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    
      resizeMode:'contain',
    
     

   },

   
  });