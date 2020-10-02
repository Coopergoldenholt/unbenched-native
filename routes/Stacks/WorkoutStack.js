import React from 'react';
import WorkoutDisplay from '../../app/screens/DisplayWorkout/DisplayWorkout';

import Workout from '../../app/screens/Workout/Workout';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScreenStack = (props) => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeNavigator} /> */}
      <Stack.Screen name="Workout" component={Workout} />
      <Stack.Screen name="Workout Display" component={WorkoutDisplay} />
    </Stack.Navigator>
  );
};

export default ScreenStack;
