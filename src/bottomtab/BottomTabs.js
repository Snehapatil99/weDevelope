import React, { useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Deliveries from './Deliveries';
import MyProfile from './MyProfile';
import HomePage from '../screens/Home/HomePage';
import Deliveries from '../screens/Home/Deliveries';
import Statistics from './Statistics';

 
const Tab = createBottomTabNavigator();

const renderDashboardIcon = ({ focused }) => (
  <View style={{
    width: 120,
    height: 30,
    borderWidth: 1.8,
    borderRadius: 6,
    padding: 3,
    borderColor: focused ? '#F1E92A' : 'white',
    left: 37,
    top: 9
  }}>
    <Text style={{
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
      fontFamily: 'Poppins',
      color: focused ? '#F1E92A' : 'white',
      bottom: 1
    }}>
      Dashboard
    </Text>
  </View>
);

const renderIcon = (source, size, top, left) => ({ focused }) => (
  <Image
    source={source}
    resizeMode="contain"
    style={{
      width: size,
      height: size,
      tintColor: focused ? "#F1E92A" : "#FFFFFF",
      top,
      left
    }}
  />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#DF1F26',
          height: 64,
        },
        lazy: true, // Load screens lazily
        detachInactiveScreens: true, // Detach inactive screens for better performance
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: '',
          tabBarIcon: renderDashboardIcon
        }}
      />
      <Tab.Screen
        name="Deliveries"
        component={Deliveries}
        options={{
          tabBarLabel: '',
          tabBarIcon: renderIcon(require('../assets/bottomtab/Delivery1.png'), 34, 8, 60)
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarLabel: '',
          tabBarIcon: renderIcon(require('../assets/bottomtab/Statistics.png'), 30, 8, 30)
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: '',
          tabBarIcon: renderIcon(require('../assets/bottomtab/Profile.png'), 30, 8, 10)
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
