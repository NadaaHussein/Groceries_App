import React from 'react';
import {View,ScrollView,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';
import Header from './components/Header';


export class MyCart extends React.Component{
 
state ={
  count: 1 ,
  Items:[
    {
        id:0,
        name:'Bell Pepper Red',
        image:require('./images/My_Cart/pepper.png'),
        price:'$4.99',
        text:'1Kg, Price',
        
        
        
    },
       {
          id:1,
          name:'Egg Chicken Red',
          image:require('./images/My_Cart/egg_red.png'),
          price:'$1.99',
          text:'4Pcs, Price',
        
       },
       {
        id:2,
        name:'Organic Bananas',
        image:require('./images/My_Cart/banana.png'),
        price:'$3.00',
        text:'12Kg, Price',
        
        
        
    },
    {
      id:3,
      name:'Ginger',
      image:require('./images/My_Cart/ginger.png'),
      price:'$2.99',
      text:'250gm, Price',
      
      
      
  },
  {
    id:4,
    name:'Ginger',
    image:require('./images/My_Cart/ginger.png'),
    price:'$2.99',
    text:'250gm, Price',
    
    
    
},
{
  id:5,
  name:'Ginger',
  image:require('./images/My_Cart/ginger.png'),
  price:'$2.99',
  text:'250gm, Price',
  
  
  
},

 
  ]
}



setCount = () => this.setState(
  prevState => ({ ...prevState, count: this.state.count + 1 })
)
setMinus = () => this.setState(
  prevState => ({ ...prevState, count: this.state.count - 1 })
)


render(){
  const { count } = this.state;
  return (
   
  
      
      <View>
     
         <Header name='My Cart'/>
         <View style={{ borderBottomWidth: 1,borderBottomColor: '#E2E2E2',paddingBottom: 3,paddingHorizontal:0}}/>
         <ScrollView style={styles.container}>
         <View >
        
       
          {
               this.state.Items.map((item,index)=>(
                 <View  style={styles.listView}>
                  <View style={{flexDirection: 'row'}}> 

                  <Image source={item.image}  style={styles.image} ></Image>
                  
               
                <View style={{flexDirection:'column', display:'flex' ,flex:1, paddingLeft:25}}>
                  <Text style= {styles.text}> {item.name}</Text>
                  <Text style= {styles.text1}> {item.text}</Text>
                  <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this.setMinus} style={styles.buttonMinus}>
                  
                   <Image source={require('./images/MINUS.png')} style={{width:15,height:5}}/>
                  </TouchableOpacity>
                  <Text style={styles.counter}> {count} </Text>
                  <TouchableOpacity onPress={this.setCount} style={styles.buttonPlus}>
                  
                   <Image source={require('./images/PLUS.png')} style={{width:20,height:20}}/>
                  </TouchableOpacity>
                  <Text style= {styles.textPrice}> {item.price} </Text>
                </View>
              </View>
                
                  </View>
                  
                  
                 

                 
                
                 </View> 
               )
               
             )
              
             }
            
         </View>

  
       </ScrollView>
       <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.Textbutton}> Go to Checkout </Text>
            </TouchableOpacity>
        </View>
       
  

       </View>
      );
  
}
}


const styles = StyleSheet.create({
   
  
  container: {
    width: '100%',
  
    paddingHorizontal:20,
    
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  
  searchBarBox: {
    paddingHorizontal: 25.0,
    marginBottom: 20.0,
  },
  searchBar: {
    width: '100%',
    paddingVertical: 16.0,
    paddingHorizontal: 15.0,
    
    borderRadius: 15.0,
  
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBarText: {
  
    fontFamily: 'gilroyNormal',
    fontSize: 40,
    color: 'black',
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
      text:{
            alignItems:'center',
            color:'#000000',
            fontWeight:'700',
            fontSize:16,
            letterSpacing: 0.1,
            lineHeight:30 ,
      },
      textPrice:{
        alignItems:'center',
        color:'#000000',
        fontWeight:'700',
        fontSize:18,
        letterSpacing: 0.1,
        lineHeight:30 ,
        paddingLeft:60,
      },
      text1:{
        color:'#7C7C7C',
        fontSize:14,
      
        lineHeight: 18,

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
  top: 420,


},
image:{
 
  width: 70.43,
  height: 64.69,
},


button: {
  backgroundColor: '#53B175',
  borderRadius: 19,
  width: 350,
  height: 67,
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: 30,
},

Textbutton: {
  color: '#FCFCFC',
  fontFamily: 'Gilroy',
  fontWeight: '600',
  fontSize: 18,
  textAlign: 'center',
},
listView : {

  paddingTop:15,
 paddingBottom:20,
  borderBottomWidth:1,
  borderBottomColor:'#ccc',
  flex:1,
 
},
buttonPlus:{
  backgroundColor: '#ffffff',
    borderRadius: 15.0,
  
   borderColor:'#E2E2E2',
   alignItems:'center',
   justifyContent:'center',
borderWidth:2,
    borderRadius: 17,
    marginTop:10,
width: 45,
height: 45,
},
buttonMinus:{
  backgroundColor: '#ffffff',
  borderRadius: 15.0,
  alignItems:'center',
  justifyContent:'center',
  marginTop:10,
 borderColor:'#E2E2E2',
borderWidth:2,
  borderRadius: 17,
width: 45,
height: 45,
},
counter:{
  
  textAlign:'center',
  marginTop:15,
  fontWeight:'600',
  fontSize:20,
 
  width: 35,
  height: 45,
}

   
  

  });