import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import { FlatGrid } from 'react-native-super-grid';
export const Shop = () => {
    const [items, setItems] = React.useState([
        { name: 'Organic Bananas', code: 'rgba(83, 177, 117, 0.1)' , image:require('./images/My_Cart/banana.png'),text:'7pcs, Price',price:'$4.99'},
        { name: 'Red Apple', code: 'rgba(248, 164, 76, 0.1)'  , image:require('./images/My_Cart/apple.png'),text:'1kg, Price',price:'$4.99'},
        { name: 'Pepper', code: 'rgba(247, 165, 147, 0.25)' ,image:require('./images/My_Cart/pepper.png'),text:'1kg, Price',price:'$4.99'},
        { name: 'Ginger', code: 'rgba(211, 176, 224, 0.25)' ,image:require('./images/My_Cart/ginger.png'),text:'1kg, Price',price:'$4.99'},
        { name: 'Coca Cola Can', code: 'rgba(253, 229, 152, 0.25)' ,image:require('./images/coke.png'),text:'325ml, Price',price:'$4.99'},
        { name: 'Pepsi Can', code: 'rgba(183, 223, 245, 0.25)' ,image:require('./images/pepsi.png'),text:'330ml, Price',price:'$4.99'},
     
        
      ]);
  return (
<View style = {styles.container}>
<Image source={require('./images/logo-colour.png')} style={styles.carrot}/>
<View style={styles.location}>
<Image source={require('./images/pin.png')} style={styles.pin} />
<Text style={{fontSize: 18, fontweight: 'bold', color: '#4CAFAD'}}>
     Dhaka, Banassre
</Text>

</View>
<SearchBar style={{ backgroundColor:"#F2F3F2", borderRadius: 15, height: 55}}
      fontColor="#c6c6c6"
      iconColor="#c6c6c6"
      shadowColor="#282828"
      backgroundColor="#F2F3F2"
      placeholder="Search store" />
{/* <View style={styles.searchSection}>
<Image
source={require('./images/search.png')}
style={styles.searchIcon}
/>
<TextInput
style ={styles.input}
placeholder="Search Store"
underlineColorAndroid="transparent"
placeholderTextColor={ '#7c7c7c'}
/>
</View> */}
<Image source={require('./images/banner.png')} style={styles.banner}/>
<View style={{flexDirection:"row"}}>
    <Text style={{color: '#181725'}}> Exclusive Offer </Text>
    <Text style= {{color:' #53B175'}}> See All</Text>
    </View>
    <FlatGrid
      //itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
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
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundcolor: '#fff',
// alignitems: 'center',
paddingTop: 0,
paddingHorizontal: 10
},
carrot:{
    width:50,
    height:55,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:160,
    marginTop:10,
    // position:'absolute',
    // left: '46.73%',
    // top: '4.21%',
    // bottom: '94.26%',
},

location: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:5,
},
gridView: {
    //marginTop: 10,
    flex: 1,
    paddingHorizontal:5,
  },
  itemContainer: {
    // justifyContent: 'center',
     borderRadius: 18,
     padding: 10,
     width: 173.32,
     height: 210,
     borderWidth:1,
     borderColor:'#ccc',
     // alignItems:'center',
   
   },
   itemName: {
     fontSize: 16,
     color: 'black',
     fontWeight: '700',
     //justifyContent:'center',
    // textAlign:'center',
     paddingTop:15,
   },
   itemCode: {
   marginLeft:30,
     width: 110,
     height: 90,
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
    // padding: 10,
    // border: '1 solid #E2E2E2',
    borderColor:'#53B175',
    alignItems:'center',
    justifyContent:'center',
 borderWidth:1,
     borderRadius: 17,
     marginTop:10,
 width: 45,
 height: 45,
 position: 'absolute',
 //width: 45.67,
 bottom:3,
 left: 100,
 
 },
 banner:{
marginBottom:10,
marginTop:10,
 },
});