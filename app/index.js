import React from 'react';
import { View, Text, Button } from 'react-native';
import { loginWithGoogle } from '../firebase/auth';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Google Login</Text>
      <Button title="Login with Google" onPress={loginWithGoogle} />
    </View>
  );
}
