import React from 'react';
import StartWorkout from '../../app/screens/Workout/StartWorkout';
import SelectTime from '../../app/screens/Workout/components/SelectTime';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScreenStack = (props) => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeNavigator} /> */}
      <Stack.Screen name="StartWorkout" component={StartWorkout} />
      <Stack.Screen name="SelectTime" component={SelectTime} />
    </Stack.Navigator>
  );
};

export default ScreenStack;
