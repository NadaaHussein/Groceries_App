import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
// import {
//   Dropdown }
//   from 'react-native-material-dropdown';
function Location ({navigation}) {
  
    return (
      <ImageBackground
        source={require('./images/background.png')}
        style={styles.container}>
        <Image
          source={require('./images/illustration.png')}
          style={styles.logo}
        />
         <Image
          source={require('./images/text.png')}
          style={styles.logo}
        />
        <View style={styles.form}>
         
          
          <View>
            <Text style={styles.Text}>Your Zone</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Banasree"></TextInput>
              {/* <Dropdown 
              label='your zone'/> */}
                    <Image
          source={require('./images/Vector.png')}
          style={{width:12,height:7,position: 'absolute',
            left: '95%',
            top: '29%',
           
          }}/> 
            <View style={{paddingBottom: 25}}></View>
            <Text style={styles.Text}>Your Area </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Types of your area">
              </TextInput>
              <Image
          source={require('./images/Vector.png')}
          style={{width:12,height:7,position: 'absolute',
            left: '95%',
            top: '87%',
           
          }}/>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button}  onPress={()=> {navigation.navigate('signup')}}>
              <Text style={styles.Textbutton}> Submit </Text>
            </TouchableOpacity>

          
          </View>
        </View>
      </ImageBackground>
    );
  }

export default Location ;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    alignSelf: 'center',
    marginTop: '15%',
  },
  form: {
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 25,

    fontFamily: '$gilroyNormal600',
    marginBottom: 20,
    color: '#030303',
    paddingTop: 50,
  },
  TextInput: {
    color: 'black',
    fontFamily: 'Gilroy',
    fontSize: 17,
    fontWeight: '600',
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 10,
   
  },
  headerSubTitle: {
    fontSize: 17,

    fontFamily: 'gilroyMedium',
    marginBottom: 30,
    color: '#828282',
  },
  Text: {
    color: '#828282',
    fontFamily: 'Gilroy',
    fontSize: 17,
    fontWeight: '700',

    paddingBottom: 10,
  },
  Text2: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'gilroyMedium',
    paddingLeft: 225,
    paddingTop: 5,
  },
  infoText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '$gilroyNormal600',
    fontWeight: '600',
    fontSize: 17,
    color: 'grey',
    letterSpacing: 0.05,
    lineHeight: 30,
  },
  greenInfoText: {
    color: 'green',
  },
  button: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    width: 350,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 40,
  },

  Textbutton: {
    color: '#ffffff',
    fontFamily: 'Gilroy',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});
