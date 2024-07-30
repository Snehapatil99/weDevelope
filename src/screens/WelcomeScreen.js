/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity ,SafeAreaView } from 'react-native';
import React from 'react';
import cStyles from '../components/cStyles';
// import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {

      const handleNext = async () => {
        console.log('LoginScreen');
            navigation.navigate('LoginScreen');
        }
    
  return (
     <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Image
        source={require('../assets/img/Start.png')}
        style={styles.image1}
        resizeMode="contain"
      />
      <View style={styles.subContainer}>
          <Text style={styles.deliveryText}>Delivery Boy</Text>
      <Text style={[cStyles.headerText2BL, styles.centeredText]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </Text>
           <TouchableOpacity
                            style={[cStyles.button, { marginBottom: 10,  marginTop: 50}]}
                        onPress={handleNext}
                        activeOpacity={0.8}>
                        <Text style={cStyles.buttonText}>Start Using</Text>
                    </TouchableOpacity>
      </View>
    
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    // marginVertical:10
    
  },
  image1: {
    width: width,
    height: undefined,  
    aspectRatio: 1,
    top:50
  },
  subContainer:{
    paddingHorizontal: 28,
    justifyContent: 'center',
    alignItems: 'center',
     marginTop: 60,
  },
   centeredText: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#121212',
    lineHeight: 18,
    fontWeight: '500',
    marginTop: 55,

  },
  deliveryText:{
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#121212',
    lineHeight: 24,
    fontWeight: '600',
    top:35
  }
});

export default WelcomeScreen;
