import { View, Text, Button } from 'react-native';
import React from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>HomeScreen</Text>
      <View style={{ marginBottom: 20 }}>
        <Button onPress={() => navigation.navigate('Abnormal Details')} title="Open Abnormal page" />
      </View>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  );
};

export default HomeScreen;
