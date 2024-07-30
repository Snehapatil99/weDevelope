/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useCallback, useEffect } from 'react';
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
import Statistics from '../bottomtab/Statistics';
import { Image, View, Text } from 'react-native';
import TripHistory from './Statistics/TripHistory';
import LoginHistory from './Statistics/LoginHistory';
import CashDeposit from './Statistics/CashDeposit';
import Earnings from './Statistics/Earnings';
import WithDrawals from './Statistics/Withdrawls';
import IncenTives from './Statistics/Incentives';
import PersonalDetails from './Profile/PersonalDetails';
import MyProfile from '../bottomtab/MyProfile';
import ViewDocuments from './Profile/ViewDocuments';
import CompleteOrder from './Orders/CompleteOrder';
import TabNavigator from '../bottomtab/BottomTabs';
import HelplineModal from '../components/HelplineModal';
import GooglePdfViewer from './Profile/Googlepdf';






//     // tabBar={(props) => <TabBar {...props} />}

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   const renderDashboardIcon = useCallback(({ focused }) => (
//     <View style={{
//       width: 120,
//       height: 30,
//       borderWidth: 1.8,
//       borderRadius: 6,
//       padding: 3,
//       borderColor: focused ? '#F1E92A' : 'white',
//       left: 37,
//       top: 9
//     }}>
//       <Text style={{
//         fontSize: 14,
//         fontWeight: '600',
//         textAlign: 'center',
//         fontFamily: 'Poppins',
//         color: focused ? '#F1E92A' : 'white',
//         bottom: 1
//       }}>
//         Dashboard
//       </Text>
//     </View>
//   ), []);

//   const renderIcon = useCallback((source, size, top, left) => ({ focused }) => (
//     <Image
//       source={source}
//       resizeMode="contain"
//       style={{
//         width: size,
//         height: size,
//         tintColor: focused ? "#F1E92A" : "#FFFFFF",
//         top,
//         left
//       }}
//     />
//   ), []);

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#DF1F26',
//           height: 64,
//         },
//         lazy: true, // Load screens lazily
//         detachInactiveScreens: true // Detach inactive screens for better performance
//       }}
//     >
//       <Tab.Screen
//         name="HomePage"
//         component={HomePage}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: renderDashboardIcon
//         }}
//       />
//       <Tab.Screen
//         name="Deliveries"
//         component={Deliveries}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: renderIcon(require('../assets/bottomtab/Delivery1.png'), 34, 8, 60)
//         }}
//       />
//       <Tab.Screen
//         name="Statistics"
//         component={Statistics}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: renderIcon(require('../assets/bottomtab/Statistics.png'), 30, 8, 30)
//         }}
//       />
//       <Tab.Screen
//         name="MyProfile"
//         component={MyProfile}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: renderIcon(require('../assets/bottomtab/Profile.png'), 30, 8, 10)
//         }}
//       />
//     </Tab.Navigator>
//   );
// };



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
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Statistics"
          component={Statistics}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Deliveries"
          component={Deliveries}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='MyProfile'
          component={MyProfile}
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

        <Stack.Screen name='HelplineModal'
          component={HelplineModal}
          options={{ headerShown: false }} />

        <Stack.Screen name='GooglePdfViewer'
          component={GooglePdfViewer}
          options={{ headerShown: false }} />


        {/* <Stack.Screen name='CompleteOrder'
          component={CompleteOrder}
          options={{ headerShown: false }} /> */}

        {/* <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen name='BackToDashBoard'
          component={BackToDashBoard}
          options={{ headerShown: false }} />

        <Stack.Screen name='TripHistory'
          component={TripHistory}
          options={{ headerShown: false }} />

        <Stack.Screen name='LoginHistory'
          component={LoginHistory}
          options={{ headerShown: false }} />

        <Stack.Screen name='Earnings'
          component={Earnings}
          options={{ headerShown: false }} />

        <Stack.Screen name='CashDeposit'
          component={CashDeposit}
          options={{ headerShown: false }} />

        <Stack.Screen name='IncenTives'
          component={IncenTives}
          options={{ headerShown: false }} />

        <Stack.Screen name='WithDrawals'
          component={WithDrawals}
          options={{ headerShown: false }} />

        <Stack.Screen name='PersonalDetails'
          component={PersonalDetails}
          options={{ headerShown: false }} />

        <Stack.Screen name='ViewDocuments'
          component={ViewDocuments}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
