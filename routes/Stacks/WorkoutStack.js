import React from 'react';
import StartWorkout from '../../app/screens/Workout/StartWorkout';
import BasketballWorkout from '../../app/screens/Workout/components/WorkoutModal';
import DisplayWorkout from '../../app/screens/DisplayWorkout/DisplayWorkout';

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
        name="StartWorkout"
        component={StartWorkout}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        // }}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Select Workout" component={BasketballWorkout} />
      <Stack.Screen name="DisplayWorkout" component={DisplayWorkout} />
      {/* <Stack.Screen name="Strength Workout" component={StrengthWorkout} /> */}
    </Stack.Navigator>
  );
};

export default ScreenStack;
