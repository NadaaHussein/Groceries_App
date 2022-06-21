import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

//import SearchIcon from '../../assets/icons/commons/search.svg';



    <TouchableOpacity  style={styles.searchbar}>
     
      <Text style={styles.searchBarText}>
       
      </Text>
    </TouchableOpacity>
 
const styles = StyleSheet.create({
    searchbar: {
        width: '100%',
        paddingVertical: 16.0,
        paddingHorizontal: 15.0,
        backgroundColor: '#F2F3F2',
        borderRadius: 15.0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      searchBarText: {
        marginLeft: 10,
        fontFamily: 'gilroyNormal',
        fontSize: 40,
        color: 'darkGrey',
      },
});

export default SearchBar;
