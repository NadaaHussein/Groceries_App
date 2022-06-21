import React from 'react';
import { StyleSheet, View, Text , Image,TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Header from './components/Header';
import SearchBar from "react-native-dynamic-search-bar";
import { NavigationContainer } from '@react-navigation/native';
 export const Explore=({navigation})=> {
  
  const [items, setItems] = React.useState([
    { name: 'Fresh Fruits & Vegatables',
      code: 'rgba(83, 177, 117, 0.1)' ,
      image:require('./images/Explore/fruits.png'),
      path:'Explore'
    },

    { name: 'Cooking Oil                & Ghee', 
      code: 'rgba(248, 164, 76, 0.1)'  , 
      image:require('./images/Explore/oil.png'),
      path:'Explore'
    },

    { name: 'Meat & Fish', 
      code: 'rgba(247, 165, 147, 0.25)' ,
      image:require('./images/Explore/meat.png'),
      path:'Explore'
    },

    { name: 'Bakery & Snacks', 
      code: 'rgba(211, 176, 224, 0.25)' ,
      image:require('./images/Explore/bakery.png'),
    
      path:'Explore'},

    { name: 'Dairy & Eggs', 
      code: 'rgba(253, 229, 152, 0.25)' ,
      image:require('./images/Explore/dairy.png'),
      path:'Explore'
    },

    { name: 'Beverages', 
      code: 'rgba(183, 223, 245, 0.25)' ,
      image:require('./images/Explore/beverages.png'),
      path:'Beverages'
    },

    { name: 'Fresh Fruits & Vegatables', 
      code: 'rgba(131, 106, 246, 0.15)' ,
      image:require('./images/Explore/fruits.png'),
      path:'Explore'
    },

    { name: 'Fresh Fruits & Vegatables', 
      code: 'rgba(215, 59, 119, 0.15)',
      image:require('./images/Explore/fruits.png'),
      path:'Explore'
     },
   
    
  ]);

  return (
    <View style={styles.container}>
         
                <Header name='Find Products'/>
                <SearchBar style={{ backgroundColor:"#F2F3F2", borderRadius: 15, height: 55}}
      fontColor="#c6c6c6"
      iconColor="#c6c6c6"
      shadowColor="#282828"
      backgroundColor="#F2F3F2"
      placeholder="Search store"
      
     // onChangeText={(text) => this.filterList(text)}
      //onSearchPress={() => console.log("Search Icon is pressed")}
      //onClearPress={() => this.filterList("")}
      //onPress={() => alert("onPress")}
    />
  
    <FlatGrid
      //itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
    
      renderItem={({ item }) => (
        <TouchableOpacity  onPress={()=> navigation.navigate(item.path)}>
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          
           <Image source={item.image} style={styles.itemCode}></Image>
          <Text style={styles.itemName}>{item.name}</Text>
         
        </View>
        </TouchableOpacity>
      )}
    />
     </View>  
  );
}
// export default Explore;
const styles = StyleSheet.create({
  gridView: {
    //marginTop: 10,
    flex: 1,
    paddingHorizontal:5,
  },
  container: {
        width: '100%',
        //paddingTop: 8.1,
       // paddingBottom: 30.0,
       // paddingHorizontal:20,
        flex:1,
      },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 18,
    padding: 10,
    height: 150,
    width: 170,
    height: 180,
    
     alignItems:'center',
  
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    justifyContent:'center',
    textAlign:'center',
    paddingTop:30,
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    //color: '#fff',
    width: 100,
    height: 70,
    justifyContent:'center',
    alignItems:'center',
  },
});















// import React from 'react';
// import {View,ScrollView,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';
// import Header from './components/Header';
// import SearchBar from "react-native-dynamic-search-bar";
// // import SearchBar from './components/SearchBar';
// import { FlatGrid } from 'react-native-super-grid';
// // import CategoryCard from './CategoryCard';
// export default class App extends React.Component{
//   // Example() {
//   //   const [items, setItems] = React.useState([
//   //     { name: 'TURQUOISE', code: '#1abc9c' },
//   //     { name: 'EMERALD', code: '#2ecc71' },
//   //     { name: 'PETER RIVER', code: '#3498db' },
//   //     { name: 'AMETHYST', code: '#9b59b6' },
//   //     { name: 'WET ASPHALT', code: '#34495e' },
//   //     { name: 'GREEN SEA', code: '#16a085' },
//   //     { name: 'NEPHRITIS', code: '#27ae60' },
//   //     { name: 'BELIZE HOLE', code: '#2980b9' },
    
//   //   ]);
//   // }
//   render(){
//     return(
      
//       <ScrollView style={styles.container}>
         
//            <Header name='Find Products'/>
//            <SearchBar style={{ backgroundColor:"#F2F3F2",width: '100%',paddingHorizontal: 20, borderRadius: 15, height: 55}}
//   fontColor="#c6c6c6"
//   iconColor="#c6c6c6"
//   shadowColor="#282828"
  
//   //cancelIconColor="#c6c6c6"
//   backgroundColor="#F2F3F2"
//   placeholder="Search store"
//  // onChangeText={(text) => this.filterList(text)}
//   //onSearchPress={() => console.log("Search Icon is pressed")}
//   //onClearPress={() => this.filterList("")}
//   //onPress={() => alert("onPress")}
// />
//            {/* <SearchBar/> */}
         
//            {/* <FlatGrid
//       itemDimension={130}
//       data={items}
//       style={styles.gridView}
//       // staticDimension={300}
//       // fixed
//       spacing={10}
//       renderItem={({ item }) => (
//         <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
//           <Text style={styles.itemName}>{item.name}</Text>
//           <Text style={styles.itemCode}>{item.code}</Text>
//         </View>
//       )}
//     /> */}

// <FlatGrid
//   itemDimension={130}
//   data={[1,2,3,4,5,6]}
  
//   renderItem={({ item }) => (<Text>{item}</Text>)}
//   // renderItem={({item}) => {
//   //   return (
//   //     <CategoryCard
//   //       key={item.id}
//   //       bgColour="#F00"
//   //       borderColour="#0F0"
//   //       title="Teste"
//   //       image={ImageTest}
//   //       onPress={() => null}
//   //     />
//   //   );
//   // }}
// />
  
//        </ScrollView>
//       );
//   }
// }



// const styles = StyleSheet.create({
   
  
//   container: {
//     width: '100%',
//     //paddingTop: 8.1,
//    // paddingBottom: 30.0,
//     paddingHorizontal:20,
//   },
//   gridView: {
//     marginTop: 10,
//     flex: 1,
//   },
//   itemContainer: {
//     justifyContent: 'flex-end',
//     borderRadius: 5,
//     padding: 10,
//     height: 150,
//   },
//   itemName: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   itemCode: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#fff',
//   },
  
//   searchBarBox: {
//     paddingHorizontal: 25.0,
//     marginBottom: 20.0,
//   },
//   searchBar: {
//     width: '100%',
//     paddingVertical: 16.0,
//     paddingHorizontal: 15.0,
//     //backgroundColor: '#F2F3F2',
//     borderRadius: 15.0,
//    // display: 'flex',
//    // flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   searchBarText: {
//     //marginLeft: 10,
//     fontFamily: 'gilroyNormal',
//     fontSize: 40,
//     color: 'black',
//   },
//     form: {
       
//         paddingHorizontal: 20,
//        },
//        TextInput: {
       
//         borderBottomWidth: 2,
//         borderBottomColor: '#E2E2E2',
//         paddingBottom: 5,
       
//       },
//       placeholder:{
//         fontFamily: 'Gilroy',
//         fontSize:20,
//         fontWeight: '900',
//       },
  
//        headerTitle: {
//         fontSize: 25,
    
//         fontFamily: '$gilroyNormal600',
//         marginBottom: 40,
//         color: '#030303',
//         paddingTop: 120,
//       },
//   Text2:{
//     color:'#828282',
//     fontFamily:'Gilroy',
//     fontSize:17,
//     fontWeight:'600',
//     paddingBottom:10


// },
// Text3:{
//   color:'green',
//   fontFamily:'Gilroy',
//   fontSize:17,
//   fontWeight:'500',
//   position: 'absolute',
 
//   right: 290,
//   top: 420,


// },
// Image:{
//   marginTop:10
// },

// button:{
//   position: 'absolute',
 
//   left: 322,
//   top: 400,

// },



   
  

//   });