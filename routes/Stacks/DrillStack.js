import React from 'react';
import DrillHome from '../../app/screens/Drills/Drills';
import Drill from '../../app/screens/Drills/components/Drill';

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
          color: 'black',
        },
      }}>
      {/* <Stack.Screen name="Home" component={HomeNavigator} /> */}
      <Stack.Screen name="Drills" component={DrillHome} />
      <Stack.Screen
        name="Drill"
        component={Drill}
        options={({route}) => ({title: route.params.name})}
      />

      {/* <Stack.Screen name="Strength Workout" component={StrengthWorkout} /> */}
    </Stack.Navigator>
  );
};

export default ScreenStack;
