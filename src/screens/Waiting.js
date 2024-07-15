/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import cStyles from '../components/cStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const Waiting = ({navigation}) => {

      const handleNext = async () => {
        console.log('GetStarted');
            navigation.navigate('GetStarted');
        }

    return (
     <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Image
        source={require('../assets/img/Waiting.png')}
        style={styles.image1}
        resizeMode="contain"
      />
        <Text style={cStyles.headerText0R}>Verification in Process...</Text>
      <Text style={[cStyles.headerText0BL, {marginTop: height * 0.1}]}>Reg. Submited Successfully!</Text>
      <Text style={[cStyles.headerText2BL, styles.centeredText]}>
        Kindly wait until we verify your profile.
Our Team will notify you or you can
check the status here.
        </Text>
           <TouchableOpacity
                            style={[cStyles.button, { marginBottom: 10,  marginTop: height * 0.075}]}
                        onPress={handleNext}
                        activeOpacity={0.8}
                    >
                        <Text style={cStyles.buttonText}>Submit</Text>
                    </TouchableOpacity>
    
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 28,
  },
  image1: {
    width: width /1.8,
    height: undefined,
    aspectRatio: 1,
    marginBottom: 30,
  },
   centeredText: {
    textAlign: 'center',
    marginTop: 14,
  },
});

export default Waiting;