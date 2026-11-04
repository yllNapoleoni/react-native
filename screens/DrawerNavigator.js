import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutStackNavigator} from './StackNavigator';
import BottomTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();


const DrawerNavigator =()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='home' component={BottomTabNavigator}/>
            <Drawer.Screen name='about' component={AboutStackNavigator}/>
            
        </Drawer.Navigator>

    )
}
export default DrawerNavigator;