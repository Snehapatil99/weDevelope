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
          <Text style={cStyles.headerText1BL}>Delivery Boy</Text>
      <Text style={[cStyles.headerText2BL, styles.centeredText]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </Text>
           <TouchableOpacity
                            style={[cStyles.button, { marginBottom: 10,  marginTop: 55}]}
                        onPress={handleNext}
                        activeOpacity={0.8}
                    >
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
    marginVertical:10
  },
  image1: {
    width: width,
    height: undefined,  
    aspectRatio: 1,
  },
  subContainer:{
    paddingHorizontal: 28,
    justifyContent: 'center',
    alignItems: 'center',
     marginTop: 50,
  },
   centeredText: {
    textAlign: 'center',
    marginTop: 18,
  },
});

export default WelcomeScreen;
