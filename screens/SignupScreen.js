import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/topVector.png')} style={styles.topImage} />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.createAccoutText}>
          <Text style={{ color: '#F97794', fontWeight: 'bold' }}>C</Text>
          reate <Text style={{ color: '#623AA2', fontWeight: 'bold' }}>A</Text>ccount
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name="user" size={20} color={'#9A9A9A'} />
        <TextInput style={styles.textInput} placeholder="Username" />
      </View>

      <View style={styles.inputContainer}>
        <Fontisto style={styles.inputIcon} name="locked" size={20} color={'#9A9A9A'} />
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <AntDesign style={styles.inputIcon} name="mail" size={20} color={'#9A9A9A'} />
        <TextInput style={styles.textInput} placeholder="E-mail" />
      </View>
      <View style={styles.inputContainer}>
        <Entypo style={styles.inputIcon} name="mobile" size={20} color={'#9A9A9A'} />
        <TextInput style={styles.textInput} placeholder="phonenumber" />
      </View>

      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Sign In</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
          <AntDesign style={styles.inputIcon} name="arrowright" size={20} color={'white'} />
        </LinearGradient>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.socialMediaContainer}>
          <Entypo style={styles.socialIcon} name="facebook-with-circle" size={30} color={'blue'} />
          <Entypo style={styles.socialIcon} name="twitter-with-circle" size={30} color={'blue'} />
          <AntDesign style={styles.socialIcon} name="google" size={30} color={'blue'} />
        </View>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.footerText}>
            Or if you have an account<Text style={{ textDecorationLine: 'underline' }}> Log In </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.leftVectorContainer}>
        <ImageBackground source={require('../assets/leftVector.png')} style={styles.leftVectorImage} />
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    position: 'relative',
  },
  topImageContainer: {},
  topImage: {
    width: '100%',
    height: 130,
  },
  helloContainer: {},
  createAccoutText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: '#262626',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#262626',
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: 'center',
    height: 50,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 12,
  },
  inputIcon: {
    marginLeft: 15,
  },
  forgotPassword: {
    color: '#BEBEBE',
    textAlign: 'right',
    width: '90%',
    fontSize: 15,
  },
  signInButtonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    width: '90%',
    justifyContent: 'flex-end',
  },
  signIn: {
    color: '#262626',
    fontSize: 25,
    fontWeight: 'bold',
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  footerText: {
    color: '#262626',
    textAlign: 'center',
    fontSize: 18,
  },
  footerContainer: { marginTop: 25 },
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    backgroundColor: 'white',
    elevation: 10,
    margin: 10,
    padding: 10,
    borderRadius: 50,
  },
  leftVectorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  leftVectorImage: {
    height: 250,
    width: 200,
  },
});
