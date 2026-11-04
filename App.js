import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import BottomTabNavigator from './src/navigation/TabNavigator';
import DrawerNavigator from './screens/DrawerNavigator';

const App = ()=>{
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

export default App