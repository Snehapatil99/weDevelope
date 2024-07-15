/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from 'react';
import SplashScreen from './Splash';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './Login/LoginScreen';
import OTPScreen from './Login/OTPScreen';
import SignUp1 from './SignUp/SignUp1';
import SignUp2 from './SignUp/SignUp2';
import SignUp3 from './SignUp/SignUp3';
import SignUp4 from './SignUp/SignUp4';
import Waiting from './Waiting';
import GetStarted from './GetStarted';
import HomePage from './Home/HomePage';
import Deliveries from './Home/Deliveries';
import OrderDetails from './Orders/OrderDetails';
import OrderDeliver from './Orders/OrderDeliver';
import BackToDashBoard from './Orders/BackToDashboard';
import User from '../bottomtab/user';
import TabBar from '../bottomtab/TabBar';
import Delivery from '../assets/bottomtab/delivery.png'
import User1 from '../assets/bottomtab/User.png'
import Vector from '../assets/bottomtab/Vector.png'
import Sync from '../bottomtab/Sync';
import { Image, View, Text } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    // tabBar={(props) => <TabBar {...props} />}
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: {
                backgroundColor: '#DF1F26',height:58
            },
        }}>
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (<View style={{
                        width: 120, // Adjust width as needed
                        height: 30, // Adjust height as needed
                        borderWidth: 1.8,
                        borderRadius: 6,
                        padding: 3,
                        borderColor: 'white', left: 37, top: 9
                    }}><Text style={{
                        fontSize: 14,
                        // padding:3,
                        fontWeight: '600',
                        marginTop: 0,
                        textAlign: 'center',
                        fontFamily: 'Poppins',
                        color: "white", bottom: 1
                    }}>Dashboard</Text></View>)
                }}
            />
            <Tab.Screen
                name="Deliveries"
                component={Deliveries}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (<Image source={require('../assets/bottomtab/delivery.png')}
                        resizeMode="contain" style={{ width: 33, height: 30, tintColor: focused ? "#F1E92A" : "#FFFFFF", top: 10, left: 50 }} />)
                }}BottomTabNavigator
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (<Image source={require('../assets/bottomtab/User.png')}
                        resizeMode="contain" style={{ width: 30, height: 30, tintColor: focused ? "#F1E92A" : "#FFFFFF", top: 10, left: 30 }} />)
                }}
            />
            <Tab.Screen
                name="Sync"
                component={Sync}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (<Image source={require('../assets/bottomtab/Vector.png')}
                        resizeMode="contain" style={{ width: 30, height: 30, tintColor: focused ? "#F1E92A" : "#FFFFFF", top: 10, left: 10 }} />)
                }}
            />
        </Tab.Navigator>
    );
};



const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="OTPScreen"
                    component={OTPScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp1"
                    component={SignUp1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp2"
                    component={SignUp2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp3"
                    component={SignUp3}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp4"
                    component={SignUp4}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Waiting"
                    component={Waiting}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GetStarted"
                    component={GetStarted}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="HomePage"
                    component={HomePage}
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name="Deliveries"
                    component={Deliveries}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BottomTab"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="OrderDetails"
                    component={OrderDetails}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='OrderDeliver'
                    component={OrderDeliver}
                    options={{ headerShown: false }} />

                <Stack.Screen name='BackToDashBoard'
                    component={BackToDashBoard}
                    options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
