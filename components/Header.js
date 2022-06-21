import React from 'react';
import {View, Text,StyleSheet,state} from 'react-native';



const Header = (props) => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>{props.name}</Text> 
    </View>
  );
};
 

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop:10,
    paddingBottom: 20,
    paddingHorizontal: 25,
    //backgroundColor:'#F2F3F2'
  },
  text: {
    alignSelf: 'center',
    color: '#181725',
    fontFamily: 'GilroyBold',
    fontWeight:'700',
    fontSize:20,
  },
});

export default Header;
