import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import login from './LogIn'
import signup from './SignUp'
import splash from './Splash'
import onboarding from './OnBoarding'
import signin from './SignIn'
import number from './Number'
import verification from './Verification'
import location from './Location'
import {Home} from './Home'
import {Beverages} from './Beverages'
// import Tabs from './components/Tabs'
//import favoruite from './Favoruite'
//import mycart from './MyCart'
//import home from './Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const App=()=>{
const stack= createNativeStackNavigator();
      
return(

<NavigationContainer>
  <stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false}}>
  <stack.Screen name="onboarding" component={onboarding}/>
  <stack.Screen name="signup" component={signup} />
  <stack.Screen name="signin" component={signin} />
   <stack.Screen name="splash" component={splash}/>
   <stack.Screen name="number" component={number} />
  <stack.Screen name="login" component={login}/>
  <stack.Screen name="verification" component={verification} />
  <stack.Screen name="location" component={location} />
  <stack.Screen name="Home" component={Home}/> 
  <stack.Screen name="Beverages" component={Beverages}/> 
  {/* <stack.Screen name="Tabs" component={Tabs} /> */}
  {/* <stack.Screen name="favoruite" component={favoruite} />
  <stack.Screen name="mycart" component={mycart} /> */}
  {/* <stack.Screen name="home" component={home} /> */}
  </stack.Navigator>
 
    
   
</NavigationContainer>

);
};
export default App;













// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }










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
    paddingTop:180

 },
  Text2:{
    color:'#828282',
    fontFamily:'Gilroy',
    fontSize:17,
    fontWeight:'700',
    paddingLeft:15,
    paddingTop:20


},
Text3:{
  color:'#181725',
    fontFamily:'Gilroy',
    fontSize:17,
    fontWeight:'700',
    paddingLeft:20,
    paddingTop:25,
    borderBottomWidth:1.5,
     borderBottomColor:'#E2E2E2',
     paddingBottom:5
},
button1:{
  backgroundColor:'#53B175',
  borderRadius:19,
  width:350,
  height:67,
  alignItems:'center',
  justifyContent:'center',
  marginLeft:22,
  marginTop:55
 

  },


Textbutton:{
color:'#ffffff',
fontFamily:'Gilroy',
fontWeight:'700',
fontSize:18,
textAlign:'center',


}, 

   
  

  });





















// import React from 'react';
// import {View,ScrollView,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';
// import Header from './components/Header';
// import SearchBar from "react-native-dynamic-search-bar";
// // import SearchBar from './components/SearchBar';
// import { FlatGrid } from 'react-native-super-grid';
// // import CategoryCard from './CategoryCard';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



// export default class App extends React.Component{
 
// state ={
//   count: 1 ,
//   Items:[
//     {
//         id:0,
//         name:'Orders',
//         //image:require('./images/sprite.png'),
        
//         icon:require('./images/icon/Orders.png'),
        
        
//     },
//        {
//           id:1,
//           name:'My Details',
//           icon:require('./images/icon/My_details.png'),
         
          
        
//        },
//        {
//         id:2,
//         name:'Delivery Address',
//         icon:require('./images/icon/Delivery.png'),
       
       
        
        
        
//     },
//     {
//       id:3,
//       name:'Payment Methods',
//       icon:require('./images/icon/Orders.png'),
      
     
      
      
      
//   },
//   {
//     id:4,
//     name:'Promo Code',
//     icon:require('./images/icon/Promo.png'),
   
    
    
    
// },
// {
//   id:5,
//   name:'Notifications',
//   icon:require('./images/icon/Bell.png'),
 
  
  
  
// },
// {
//   id:6,
//   name:'Help',
//   icon:require('./images/icon/help.png'),
 
  
  
  
// },
// {
//   id:7,
//   name:'About',
//   icon:require('./images/icon/about.png'),
 
  
  
  
// },
//   ]
// }

// setCount = () => this.setState(
//   prevState => ({ ...prevState, count: this.state.count + 1 })
// )
// setMinus = () => this.setState(
//   prevState => ({ ...prevState, count: this.state.count - 1 })
// )


// render(){
//   const { count } = this.state;
//   return (
   
  
      
//       <View >
//         <View style={{flexDirection: 'row'}}>
//         <Image source={require('./images/appleBig.png')} style={styles.imagelist}></Image> 
//         <View style={{flexDirection: 'column',paddingTop:15,paddingLeft:15}}>
        
        
//         </View>
//         </View>



//         <Text style= {styles.Profiletext}> Natural Red Apple </Text>
//         <Text style= {styles.text1}>1Kg, Price</Text>
//         <View style={{flexDirection:'row'}}>
//                 <TouchableOpacity onPress={this.setMinus} style={styles.buttonMinus}>
                  
//                    <Image source={require('./images/MINUS.png')} style={{width:15,height:5}}/>
//                   </TouchableOpacity>
//                   <Text style={styles.counter}> {count} </Text>
//                   <TouchableOpacity onPress={this.setCount} style={styles.buttonPlus}>
                  
//                    <Image source={require('./images/PLUS.png')} style={{width:20,height:20}}/>
//                   </TouchableOpacity>
//                   <Text style= {styles.textPrice}>  </Text>
//                 </View>
//          <View style={{ borderBottomWidth: 1,borderBottomColor: '#E2E2E2',paddingBottom: 25}}/>
//          <ScrollView style={styles.container}>
//          <View >
        
       
//           {
//                this.state.Items.map((item,index)=>(
//                  <View  style={styles.listView}>
//                   <View style={{flexDirection: 'row'}}> 

//                   <Image source={item.icon}  style={styles.icon} ></Image>
//                   <Text style= {styles.text}> {item.name}</Text>
//             <TouchableOpacity>
//                   <Image source={require('./images/icon/arrowRight.png')}  style={styles.arrow} ></Image>
//             </TouchableOpacity>
                

                  
//                   </View>
                  
                 
                 
                
//                  </View> 
//                )
               
//              )
              
//              }
            
//          </View>

  
//        </ScrollView>
//        <View  style={{justifyContent: 'center', alignItems: 'center'}}>
//             <TouchableOpacity style={styles.button}>
//             <Image source={require('./images/icon/iconLogOut.png')} style={styles.iconLogOut}  ></Image>
//               <Text style={styles.Textbutton}> Log Out </Text>
//             </TouchableOpacity>
//         </View>
       
  

//        </View>
//       );
  
// }
// }


// const styles = StyleSheet.create({
   
  
//   container: {
//     width: '100%',
  
    
    
//   },
//   arrow:{

// marginRight:20,
// marginTop:5,
//   },
//   imagelist:{
    
//     width:400,
//    height:225,
//    justifyContent:'center',
//    alignItems:'center',
//    marginLeft:20,
//   marginTop:10,
    
  
   
    
//   },
 
//   Profiletext:{
   
//     color:'#000000',
//     fontWeight:'700',
//     fontSize:18,
//     letterSpacing: 0.1,
//     lineHeight:30 ,
   
// },
  
     
//       text:{
            
//             color:'#000000',
//             fontWeight:'600',
//             fontSize:18,
//             letterSpacing: 0.1,
//             lineHeight:30 ,
//             paddingLeft:20,
//             flex:1,
//       },
//       text1:{
//         color:'#7C7C7C',
//         fontSize:16,
//        // fontWeight:'500',
//         lineHeight: 20,

//       },
 

// icon:{
// marginTop:10,
 
//   width: 18,
//   height: 20,
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// iconLogOut:{
//   position: 'absolute',
//   left: 20,
//   top: 24,
// },

// button: {
//   backgroundColor: '#F2F3F2',
//   borderRadius: 19,
//   width: 340,
//   height: 67,
//   alignItems: 'center',
//  justifyContent: 'center',

//   marginTop: 30,
// },

// Textbutton: {
//   color: '#53B175',
//   fontFamily: 'Gilroy',
//   fontWeight: '600',
//   fontSize: 18,
//   textAlign: 'center',
// },
// listView : {
//   paddingTop:14,
//   paddingBottom:15,
//   borderBottomWidth:1,
//   borderBottomColor:'#ccc',
//   flex:1,
//   paddingLeft:25
 
// },
// buttonPlus:{
//   backgroundColor: '#ffffff',
//     borderRadius: 15.0,
//    // padding: 10,
//    // border: '1 solid #E2E2E2',
//   // borderColor:'#E2E2E2',
//    alignItems:'center',
//    justifyContent:'center',
// //borderWidth:2,
//     borderRadius: 17,
//     marginTop:10,
// width: 45,
// height: 45,
// },
// buttonMinus:{
//   backgroundColor: '#ffffff',
//   borderRadius: 15.0,
//   alignItems:'center',
//   justifyContent:'center',
//   marginTop:10,
//  //borderColor:'#E2E2E2',
// //borderWidth:2,
//   borderRadius: 17,
// width: 45,
// height: 45,
// },
// counter:{
//   backgroundColor: '#ffffff',
//   borderRadius: 15.0,
//   alignItems:'center',
//   justifyContent:'center',
//   textAlign:'center',
//   marginTop:10,
//   fontWeight:'600',
//   fontSize:20,
//   borderColor:'#E2E2E2',
//   borderWidth:2,
//   borderRadius: 17,
//   width: 45,
//   height: 45,
// }




   
  

//   });