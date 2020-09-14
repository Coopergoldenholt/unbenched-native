import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to Statisget</Text>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
