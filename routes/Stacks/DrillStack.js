import React from 'react';
import DrillHome from '../../app/screens/Drills/Drills';
import Drill from '../../app/screens/Drills/components/Drill';
import DisplayWorkout from '../../app/screens/DisplayWorkout/DisplayWorkout';
import {Image} from 'react-native';

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
        name="Drills"
        component={DrillHome}
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
        name="Drill"
        component={Drill}
        options={({route}) => ({title: route.params.name})}
      />

      <Stack.Screen name="DisplayWorkout" component={DisplayWorkout} />

      {/* <Stack.Screen name="Strength Workout" component={StrengthWorkout} /> */}
    </Stack.Navigator>
  );
};

export default ScreenStack;
