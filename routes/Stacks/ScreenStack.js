import React from 'react';
import WorkoutDisplay from '../../app/screens/DisplayWorkout/DisplayWorkout';
import HomeNavigator from './HomeStack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScreenStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeNavigator} />
      <Stack.Screen name="Workout" component={WorkoutDisplay} />
    </Stack.Navigator>
  );
};

export default ScreenStack;
