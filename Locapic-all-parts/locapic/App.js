import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

var BottomNavigator = createBottomTabNavigator({
  Chat: ChatScreen,
  Map: MapScreen,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      var iconName;
      if (navigation.state.routeName == 'Chat') {
        iconName = 'ios-chatboxes';
      } else if (navigation.state.routeName == 'Map') {
        iconName = 'ios-navigate';
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#eb4d4b',
    inactiveTintColor: '#FFFFFF',
    activeBackgroundColor: "#130f40",
    inactiveBackgroundColor: "#130f40",
  },
}
);

var StackNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  BottomNavigator: BottomNavigator,
},
{
  headerMode: 'none'
}
);

export default Navigation = createAppContainer(StackNavigator);