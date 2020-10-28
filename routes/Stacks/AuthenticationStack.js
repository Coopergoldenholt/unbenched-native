import * as React from 'react';

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Subscribe" component={Subscribe} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
