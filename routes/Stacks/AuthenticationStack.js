import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../app/screens/Welcome/WelcomeScreen';
import Login from '../../app/screens/Welcome/Login';
import Register from '../../app/screens/Welcome/Register';

const Stack = createStackNavigator();

const AuthenticationStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
