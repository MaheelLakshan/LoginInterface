import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/topVector.png')} style={styles.topImage} />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>
          <Text style={{ color: '#F97794', fontWeight: 'bold' }}>A</Text>
          nomaly <Text style={{ color: '#623AA2', fontWeight: 'bold' }}>D</Text>
          etection
        </Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name="user" size={20} color={'#9A9A9A'} />
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>

      <View style={styles.inputContainer}>
        <Fontisto style={styles.inputIcon} name="locked" size={20} color={'#9A9A9A'} />
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
      </View>
      <Text style={styles.forgotPassword}>Forgot your password</Text>

      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Sign In</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
          <AntDesign style={styles.inputIcon} name="arrowright" size={20} color={'white'} />
        </LinearGradient>
      </View>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>
          Don't have an account? <Text style={{ textDecorationLine: 'underline' }}>Create</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.leftVectorContainer}>
        <ImageBackground source={require('../assets/leftVector.png')} style={styles.leftVectorImage} />
      </View>
    </View>
  );
};

export default LoginScreen;

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
  helloText: {
    textAlign: 'center',
    fontSize: 70,
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
    marginTop: 100,
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
    marginTop: 20,
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
