import React from 'react';
import {View,ScrollView,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';
import Header from './components/Header';
import SearchBar from "react-native-dynamic-search-bar";
// import SearchBar from './components/SearchBar';
import { FlatGrid } from 'react-native-super-grid';
// import CategoryCard from './CategoryCard';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



export class Account extends React.Component{
 
state ={
  Items:[
    {
        id:0,
        name:'Orders',
        //image:require('./images/sprite.png'),
        
        icon:require('./images/icon/Orders.png'),
        
        
    },
       {
          id:1,
          name:'My Details',
          icon:require('./images/icon/My_details.png'),
         
          
        
       },
       {
        id:2,
        name:'Delivery Address',
        icon:require('./images/icon/Delivery.png'),
       
       
        
        
        
    },
    {
      id:3,
      name:'Payment Methods',
      icon:require('./images/icon/Orders.png'),
      
     
      
      
      
  },
  {
    id:4,
    name:'Promo Code',
    icon:require('./images/icon/Promo.png'),
   
    
    
    
},
{
  id:5,
  name:'Notifications',
  icon:require('./images/icon/Bell.png'),
 
  
  
  
},
{
  id:6,
  name:'Help',
  icon:require('./images/icon/help.png'),
 
  
  
  
},
{
  id:7,
  name:'About',
  icon:require('./images/icon/about.png'),
 
  
  
  
},
  ]
}


render(){
 
  return (
   
  
      
      <View >
        <View style={{flexDirection: 'row'}}>
        <Image source={require('./images/profile.png')} style={styles.imagelist}></Image> 
        <View style={{flexDirection: 'column',paddingTop:15,paddingLeft:15}}>
        <Text style= {styles.Profiletext}> Afsar Hossen </Text>
        <Text style= {styles.text1}>Imshuvo97@gmail.com</Text>
        </View>
        </View>
         <View style={{ borderBottomWidth: 1,borderBottomColor: '#E2E2E2',paddingBottom: 25}}/>
         <ScrollView style={styles.container}>
         <View >
        
       
          {
               this.state.Items.map((item,index)=>(
                 <View  style={styles.listView}>
                  <View style={{flexDirection: 'row'}}> 

                  <Image source={item.icon}  style={styles.icon} ></Image>
                  <Text style= {styles.text}> {item.name}</Text>
            <TouchableOpacity>
                  <Image source={require('./images/icon/arrowRight.png')}  style={styles.arrow} ></Image>
            </TouchableOpacity>
                

                  
                  </View>
                  
                 
                 
                
                 </View> 
               )
               
             )
              
             }
            
         </View>

  
       </ScrollView>
       <View  style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button}>
            <Image source={require('./images/icon/iconLogOut.png')} style={styles.iconLogOut}  ></Image>
              <Text style={styles.Textbutton}> Log Out </Text>
            </TouchableOpacity>
        </View>
       
  

       </View>
      );
  
}
}


const styles = StyleSheet.create({
   
  
  container: {
    width: '100%',
  
    
    
  },
  arrow:{

marginRight:20,
marginTop:5,
  },
  imagelist:{
    
    width: 63,
    height: 64,
      marginLeft:20,
   
      marginTop:10,
     
      borderRadius: 27,
    
  
   
    
  },
 
  Profiletext:{
   
    color:'#000000',
    fontWeight:'700',
    fontSize:18,
    letterSpacing: 0.1,
    lineHeight:30 ,
   
},
  
     
      text:{
            
            color:'#000000',
            fontWeight:'600',
            fontSize:18,
            letterSpacing: 0.1,
            lineHeight:30 ,
            paddingLeft:20,
            flex:1,
      },
      text1:{
        color:'#7C7C7C',
        fontSize:16,
       // fontWeight:'500',
        lineHeight: 20,

      },
 

icon:{
marginTop:10,
 
  width: 18,
  height: 20,
  alignItems: 'center',
  justifyContent: 'center',
},
iconLogOut:{
  position: 'absolute',
  left: 20,
  top: 24,
},

button: {
  backgroundColor: '#F2F3F2',
  borderRadius: 19,
  width: 340,
  height: 67,
  alignItems: 'center',
 justifyContent: 'center',

  marginTop: 10,
},

Textbutton: {
  color: '#53B175',
  fontFamily: 'Gilroy',
  fontWeight: '600',
  fontSize: 18,
  textAlign: 'center',
},
listView : {
  paddingTop:14,
  paddingBottom:15,
  borderBottomWidth:1,
  borderBottomColor:'#ccc',
  flex:1,
  paddingLeft:25
 
},




   
  

  });