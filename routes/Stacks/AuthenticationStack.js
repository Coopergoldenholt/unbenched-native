import * as React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../app/screens/Welcome/WelcomeScreen';
import Login from '../../app/screens/Welcome/Login';
import Register from '../../app/screens/Welcome/Register';
import Subscribe from '../../app/screens/Subscribe/Subscribe';

const Stack = createStackNavigator();

const AuthenticationStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7392B7',
          height: 100,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Image
              style={{width: 40, height: 40, marginBottom: 10}}
              source={require('../../assets/Icon_White.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: () => (
            <Image
              style={{width: 40, height: 40, marginBottom: 10}}
              source={require('../../assets/Icon_White.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: () => (
            <Image
              style={{width: 40, height: 40, marginBottom: 10}}
              source={require('../../assets/Icon_White.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Subscribe"
        component={Subscribe}
        options={{
          headerTitle: () => (
            <Image
              style={{width: 40, height: 40, marginBottom: 10}}
              source={require('../../assets/Icon_White.png')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
