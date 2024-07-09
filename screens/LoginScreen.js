import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { TextInput } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/topVector.png')} style={styles.topImage} />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
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
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
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
});
