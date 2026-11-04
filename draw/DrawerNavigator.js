
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#374054',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#374054',
          width: 260,
        },
        drawerActiveTintColor: '#00C8F0',
        drawerInactiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor: '#46536B',
      }}
    >
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <></>
          ),
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          drawerLabel: 'About',
        }}
      />
    </Drawer.Navigator>
  );
}
