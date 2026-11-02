import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import BottomTabNavigator from './src/navigation/TabNavigator';

const App = ()=>{
  return(
    <NavigationContainer>
      {/*<StackNavigator/>*/}
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

export default App