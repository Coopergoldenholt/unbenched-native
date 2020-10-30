import React from 'react';
import {Image} from 'react-native';
import User from '../../app/screens/User/User';
import DefaultGym from '../../app/screens/DefaultSettings/DefaultSettings';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScreenStack = (props) => {
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
      {/* <Stack.Screen name="Home" component={HomeNavigator} /> */}
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: () => (
            <Image
              style={{width: 40, height: 40, marginBottom: 10}}
              source={require('../../assets/Icon_White.png')}
            />
          ),
        }}
      />
      <Stack.Screen name="DefaultGym" component={DefaultGym} />

      {/* <Stack.Screen
        name="Drill"
        component={Drill}
        options={({route}) => ({title: route.params.name})}
      /> */}

      {/* <Stack.Screen name="Strength Workout" component={StrengthWorkout} /> */}
    </Stack.Navigator>
  );
};

export default ScreenStack;

// function LogoTitle() {
//   return (

//   );
// }
