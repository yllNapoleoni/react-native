
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#374054',
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },

        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#C5C5C5',

        tabBarLabelStyle: {
          fontSize: 14,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else {
            iconName = 'newspaper-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size + 3}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
}
