import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

function LogIn({navigation}) {
  const [user_name, setuser_name] = useState('')
  const [password, setpassword] = useState('')
  LogIn = () => {
      console.log(password);
      auth()
          .signInWithEmailAndPassword(user_name, password)
          .then(() => {
              alert('User account created & signed in!');
          })
          .catch(error => {
            alert(error.message);
          });
  }


 
    return (
      <ImageBackground
        source={require('./images/background.png')}
        style={styles.container}>
        <Image
          source={require('./images/logo-colour.png')}
          style={styles.logo}
        />
        <View style={styles.form}>
          <Text style={styles.headerTitle}>Loging </Text>
          <Text style={styles.headerSubTitle}>
            Enter your email and password{' '}
          </Text>
          <View>
            <Text style={styles.Text}>Email</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="imshuvo97@gmail.com" onChangeText={(text) => {
                setuser_name(text)
            }}></TextInput>
            <View style={{paddingBottom: 25}}></View>
            <Text style={styles.Text}>Password </Text>
            <TextInput
              style={styles.TextInput}
              secureTextEntry={true}
              placeholder="........"  onChangeText={(text) => {
                setpassword(text)
            }}></TextInput>
            <Text style={styles.Text2}> Forgot Password? </Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={LogIn}>
              <Text style={styles.Textbutton}> Log In </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> {navigation.navigate('Home')}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 15,
                paddingTop: 15,
              }}>
              Don't have an account?{' '}
              <Text style={[styles.infoText, styles.greenInfoText]}>
                SignUp
              </Text>
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  
            }

export default LogIn;

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
    // width:'100%',
    // height:50,
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

    marginTop: 30,
  },

  Textbutton: {
    color: '#ffffff',
    fontFamily: 'Gilroy',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});
