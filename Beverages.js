import React from 'react';
import { StyleSheet, View, Text , Image,TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Header from './components/Header';
export function Beverages() {
  
  const [items, setItems] = React.useState([
    { name: 'Diet Coke', code: 'rgba(83, 177, 117, 0.1)' , image:require('./images/diet_coke.png'),text:'355ml, Price',price:'$4.99'},
    { name: 'Sprite Can', code: 'rgba(248, 164, 76, 0.1)'  , image:require('./images/sprite.png'),text:'325ml, Price',price:'$4.99'},
    { name: 'Apple & Grape Juice', code: 'rgba(247, 165, 147, 0.25)' ,image:require('./images/apple_juice.png'),text:'2L, Price',price:'$4.99'},
    { name: 'Orange juice', code: 'rgba(211, 176, 224, 0.25)' ,image:require('./images/orange_juice.png'),text:'325ml, Price',price:'$4.99'},
    { name: 'Coca Cola Can', code: 'rgba(253, 229, 152, 0.25)' ,image:require('./images/coke.png'),text:'325ml, Price',price:'$4.99'},
    { name: 'Pepsi Can', code: 'rgba(183, 223, 245, 0.25)' ,image:require('./images/pepsi.png'),text:'330ml, Price',price:'$4.99'},
 
    
  ]);
  
  return (
    <View style={styles.container}>
         
                <Header name='Beverages'/>
               
  
    <FlatGrid
      
      data={items}
      style={styles.gridView}
    
      spacing={10}
    
      renderItem={({ item }) => (
        
        <View style={[styles.itemContainer]}>
          
           <Image source={item.image} style={styles.itemCode}></Image>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.text1}>{item.text}</Text>
<View style={{flexDirection:'row'}}>
<Text style={styles.text}>{item.price}</Text>
<TouchableOpacity style={styles.buttonPlus}>
                  
  <Image source={require('./images/plus1.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
  </View>

        </View>
       
      )}
    />
     </View>  
  );
}

const styles = StyleSheet.create({
  gridView: {
  
    flex: 1,
    paddingHorizontal:5,
  },
  container: {
        width: '100%',
        flex:1,
      },
  itemContainer: {
  
    borderRadius: 18,
    padding: 10,
    width: 173.32,
    height: 210,
    borderWidth:1,
    borderColor:'#ccc',
  
  
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    
    paddingTop:15,
  },
  itemCode: {
  marginLeft:50,
    width: 44.49,
    height: 85,
    justifyContent:'center',
    alignItems:'center',
  },
  text1:{
    color:'#7C7C7C',
    fontSize:14,
  
    lineHeight: 25,

  },
  text:{
    alignItems:'center',
    color:'#000000',
    fontWeight:'700',
    fontSize:17,
    letterSpacing: 0.1,
    lineHeight:40 ,
},
buttonPlus:{
  backgroundColor: '#53B175',
    borderRadius: 15.0,

   borderColor:'#53B175',
   alignItems:'center',
   justifyContent:'center',
borderWidth:1,
    borderRadius: 17,
    marginTop:10,
width: 45,
height: 45,
position: 'absolute',

bottom:3,
left: 100,

},
});












