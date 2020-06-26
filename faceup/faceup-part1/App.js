console.disableYellowBox = true;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import { AntDesign } from '@expo/vector-icons'; 

import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import SnapScreen from './screens/SnapScreen';

var BottomNavigator = createBottomTabNavigator(
  {
    SnapScreen: SnapScreen,
    GalleryScreen: GalleryScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconName;
        if (navigation.state.routeName == 'SnapScreen') {
          iconName = 'camera';
        } else if (navigation.state.routeName == 'GalleryScreen') {
          iconName = 'picture';
        }

        return <AntDesign name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#009788',
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: '#111224',
    }
  },
  }
);

StackNavigator = createStackNavigator({
  HomeScreen:  HomeScreen,  
  BottomNavigator: BottomNavigator,
},
  {headerMode: 'none'}
);  

const Navigation = createAppContainer(StackNavigator);

export default function App() {
  return (
    <Navigation/>
  )
}