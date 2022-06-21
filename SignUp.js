
import React , { useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';

function SignUp ({navigation}){
  const [email, setemail] = useState('')
  const [user_name, setuser_name] = useState('')
  const [password, setpassword] = useState('')
  
SignUp = () => {
  console.log(email,password)
    auth()
        .createUserWithEmailAndPassword(email,password)
        .then((res) => {
          res.user.updateProfile({displayName:user_name})
            alert('User account created & signed in!');
        })
        .catch(error => {
         alert(error.message);
        });
}
    
        return (
 
          <ImageBackground source={require('./images/Mask_Group.png')} style={styles.container}>
                <Image  source={require('./images/logo-colour.png')} style={styles.logo} />
                <View style={styles.form}>
                    <View>
                        <Text style={styles.headerTitle}>Sign up</Text>
                        <Text style={styles.headerSubtitle}>Enter your credentials to continue</Text>
                      
                    </View>     
                     <View>
                        <Text style={styles.Text1}>Username</Text>
                        <TextInput style={styles.TextInput} placeholder='Nada Hussein' onChangeText={(text) => {
                setuser_name(text)
            }} />
                        <View style={{paddingBottom:5}}></View>
                        <Text style={styles.Text1}>Email</Text>
                        <TextInput style={styles.TextInput} placeholder='Nada_Hussein@gmail.com'  onChangeText={(text) => {
                setemail(text)
            }}/>
                        <View style={{paddingBottom:10}}></View>
                        <Text style={styles.Text1}>Password</Text>
                        <TextInput style={styles.TextInput} secureTextEntry={true} placeholder='......'  onChangeText={(text) => {
                setpassword(text)
            }} />
                         <View style={{paddingBottom:5}}></View> 
                    </View> 

                  
                    <View style={styles.footer}>
                    <Text style={styles.infoText}>
                            By continuing you agree to our{' '}
                            <Text style={[styles.infoText, styles.greenInfoText]}>
                                Terms of Service
                            </Text>{' '}
                            and{' '}
                            <Text style={[styles.infoText, styles.greenInfoText]}>
                                Privacy Policy
                            </Text>

                        </Text>
                        <TouchableOpacity style={styles.button} onPress={SignUp}>
                            <Text style={[styles.infoText, styles.greenInfoText, styles.Textbutton]}>Sign Up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=> {navigation.navigate('login')}}>
                        <Text style={{color:'black',fontWeight:'600',fontSize:15,paddingTop:15}}>Already have an account?{' '}
                            <Text style={[styles.infoText, styles.greenInfoText]}>
                                LogIn
                            </Text>
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
           






        );
    }

    export default SignUp;


const styles = StyleSheet.create({


    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    logo: {
      alignSelf: 'center',
      marginTop:'15%',
      
      
    },
    Text1:{
    
        color:'#828282',
        fontFamily:'Gilroy',
        fontSize:17,
        fontWeight:'700',
       
       paddingBottom:5
  
   },
    form: {
      paddingHorizontal: 20,
    },
    headerTitle: {
      fontSize: 25,
    
      fontFamily: '$gilroyNormal600',
      marginBottom: 20,
      color: '#030303',
      paddingTop:45,
      
    },
    headerSubtitle: {
      fontSize: 17,
    
      fontFamily: '$gilroyMedium',
      marginBottom: 10,
      color: '#828282',
    },
    TextInput:{
      color:'black',
      fontFamily:'Gilroy',
      fontSize:17,
      fontWeight:'600',
     
      paddingTop:2,
      borderBottomWidth:2,
       borderBottomColor:'#E2E2E2',
       paddingBottom:10
    },
    
    infoText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '$gilroyNormal600',
      fontWeight: '600',
      fontSize: 17,
      color: 'grey',
      letterSpacing: 0.05,
      lineHeight:30, 
    
    },
    footer: {
    
      justifyContent: 'center',
      alignItems: 'center',
     paddingTop:25,
      
    },
    greenInfoText: {
      color: 'green',
     
    },
    button:{
      backgroundColor:'#53B175',
      borderRadius:19,
      width:350,
      height:67,
      alignItems:'center',
      justifyContent:'center',
   
      marginTop:10,
     
    
      },

      Textbutton:{
        color:'#ffffff',
        fontFamily:'Gilroy',
        fontWeight:'700',
        fontSize:18,
        textAlign:'center',
        
        
        }, 


});
