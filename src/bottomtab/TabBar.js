// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const TabBar = ({ state, descriptors }) => {
//     const navigation = useNavigation();

//     const handleTabPress = (title) => {
//         if (title === 'HomePage') {
//             navigation.navigate('HomePage');
//         } else if (title === 'User') {
//             navigation.navigate('User');
//         } else if (title === 'Deliveries') {
//             navigation.navigate('Deliveries');
//         } else if (title === 'Sync') {
//             navigation.navigate('Sync');
//         }
//     };
//     return (
//         <View style={styles.tabBar}>
//             {state.routes.map((route, index) => {
//                 const { options } = descriptors[route.key];
//                 const label =
//                     options.tabBarLabel !== undefined
//                         ? options.tabBarLabel
//                         : options.title !== undefined
//                             ? options.title
//                             : route.name;

//                 const isFocused = state.index === index;

//                 const onPress = () => {
//                     const event = navigation.emit({
//                         type: 'tabPress',
//                         target: route.key,
//                         canPreventDefault: true,
//                     });

//                     if (!isFocused && !event.defaultPrevented) {
//                         navigation.navigate(route.name);
//                     }
//                 };

//                 let tabBarIcon;

//                 switch (route.name) {
//                     case 'HomePage':
//                         tabBarIcon = 'Dashboard'; // Text-based icon for Dashboard
//                         break;
//                     case 'Deliveries':
//                         tabBarIcon = require('../assets/bottomtab/delivery.png'); // Image icon for Deliveries
//                         break;
//                     case 'User':
//                         tabBarIcon = require('../assets/bottomtab/Vector.png'); // Image icon for User
//                         break;
//                     case 'Sync':
//                         tabBarIcon = require('../assets/bottomtab/User.png'); // Image icon for User
//                         break;
//                     default:
//                         break;
//                 }
//                 if (route.name === 'HomePage') {
//                     iconStyle = [styles.tabIcon, { alignSelf: 'flex-end', }];
//                 }

//                 return (
//                     <TouchableOpacity
//                         key={index}
//                         accessibilityRole="button"
//                         accessibilityState={isFocused ? { selected: true } : {}}
//                         accessibilityLabel={options.tabBarAccessibilityLabel}
//                         testID={options.tabBarTestID}
//                         onPress={() => handleTabPress(label)}
//                         style={styles.tabButton}
//                     >
//                         {typeof tabBarIcon === 'string' ? (
//                             <View >
//                                 <Text style={[styles.tabIcon, isFocused && route.name === 'HomePage' ? styles.dashboardText : null]}>
//                                     {tabBarIcon}
//                                 </Text>
//                             </View>

//                         ) : (
//                             <View style={{ justifyContent: "space-evenly" }}>
//                                 <Image
//                                     source={tabBarIcon}
//                                     style={[styles.tabImage, { tintColor: isFocused ? '#F1E92A' : '#FFFFFF' }]}
//                                 />
//                             </View>

//                         )}
//                     </TouchableOpacity>
//                 );
//             })}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     tabBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: '#DF1F26',
//         borderTopWidth: 1,
//         borderTopColor: '#ECECEC',
//         paddingBottom: 5,
//     },
//     tabButton: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//         paddingVertical: 10,
//         margin: 4, left: 10
//     },
//     tabIcon: {
//         marginTop: 0,
//         width: 100, // Adjust width as needed
//         height: 26, // Adjust height as needed
//         borderWidth: 1,
//         borderRadius: 6,
//         padding: 3,
//         borderColor: 'white',
//         justifyContent: "space-evenly",
//         left: 20, // Adjust left positioning as needed
//         top: 10
//     },
//     tabImage: {
//         width: 28,
//         height: 28,
//         resizeMode: 'contain',
//         justifyContent: "space-evenly",
//         padding: 10,
//         left: 10,

//     },
//     dashboardText: {
//         fontSize: 14,
//         fontWeight: '600',
//         marginTop: 0,
//         textAlign: 'center',
        
//         fontFamily: 'Poppins',
//         color: "yellow",

//         // Adjust left positioning as needed
//         top: 5,
//         margin: 10, right: 10

//     }
// });

// export default TabBar;
