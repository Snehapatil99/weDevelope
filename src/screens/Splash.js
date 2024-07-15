/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('WelcomeScreen'); // Replace with your actual next screen WelcomeScreen
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/img/loader.json')} // Update the path to your Lottie file
        autoPlay
        loop
         style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
   animation: {
        width: 350, // Adjust the width and height based on your animation's dimensions
        height: 350,
    },
});

export default SplashScreen;
