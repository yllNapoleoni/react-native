import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tab =createBottomTabNavigator();

const BottomTabNavigator=()=>{
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor:'white',
        inactiveTintColor:'lightgray',
        style:{
            backgroundColor:'blue';

        },
        lableStyle:{
            fontSize:12,
        }
    }}
    >
        <Tab.Screen
        name='home'
        component={MainStackNavigator}
        options={{
            tabBarLabel:'home',
            tabBarIcon:({color})=>(
                <MaterialCommunityIcons name='video-stabilization' size={26} color={color}/>

            ),
        }}
        />

    </Tab.Navigator>
}
export default BottomTabNavigator