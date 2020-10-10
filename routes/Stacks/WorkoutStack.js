import React from 'react';
import StartWorkout from '../../app/screens/Workout/StartWorkout';
import StrengthWorkout from '../../app/screens/Workout/components/StrengthModal';
import BasketballWorkout from '../../app/screens/Workout/components/WorkoutModal';
import DisplayWorkout from '../../app/screens/DisplayWorkout/DisplayWorkout';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScreenStack = (props) => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeNavigator} /> */}
      <Stack.Screen name="StartWorkout" component={StartWorkout} />
      <Stack.Screen name="Select Workout" component={BasketballWorkout} />
      <Stack.Screen name="DisplayWorkout" component={DisplayWorkout} />
      {/* <Stack.Screen name="Strength Workout" component={StrengthWorkout} /> */}
    </Stack.Navigator>
  );
};

export default ScreenStack;
