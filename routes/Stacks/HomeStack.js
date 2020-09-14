import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../../app/screens/Dashboard/Dashboard';
import Games from '../../app/screens/Games/Games';
import User from '../../app/screens/User/User';

const Tab = createBottomTabNavigator();

const DashBoardStack = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

export default DashBoardStack;
