import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import User from '../../app/screens/User/User';
import UserStack from './UserStack';
import WorkoutStack from './WorkoutStack';
import DrillStack from './DrillStack';

const Tab = createBottomTabNavigator();

const DashBoardStack = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7392B7',
        inactiveTintColor: 'black',
        // showLabel: false,
        // style: {backgroundColor: '#7392B7'},
      }}>
      {/* <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Games" component={Games} /> */}
      <Tab.Screen
        name="Workout"
        component={WorkoutStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Drills"
        component={DrillStack}
        options={{
          tabBarLabel: 'Drills',
          tabBarIcon: ({color}) => (
            <Icon name="dribbble" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserStack}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default DashBoardStack;
