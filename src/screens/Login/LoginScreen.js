/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import cStyles from '../../components/cStyles';
import colors from '../../components/Color';


const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

    const handleGetOTP = () => {
    const phoneNumberPattern = /^[0-9]{10}$/;

    if (phoneNumberPattern.test(phoneNumber)) {
      navigation.navigate('OTPScreen', { phoneNumber });
    } else {
      Alert.alert("Invalid Phone Number", "Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enabled
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container1}>
          <Image source={require('../../assets/img/LoginOTP.png')} style={styles.loginImage} 
             resizeMode="contain"
          />
          <Text style={[cStyles.headerText1BL, { alignSelf: 'center' }]}>
            Login / Signup
          </Text>
          <Text style={[cStyles.headerText2BL, styles.centeredText]}>
            Enter your phone number and Go ahead and set up your account
          </Text>
          <View style={{ marginTop: 65 }}>
            <Text style={[cStyles.headerText2BL, {}]}>
              Enter Phone No. <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={styles.inputContainer2}>
                <TextInput
                  style={styles.inputs}
                  placeholder="+91"
                  placeholderTextColor={"#121212"}
                  underlineColorAndroid='transparent'
                  editable={false}
                  selectTextOnFocus={false}
                />
              </View>
              <View style={styles.inputContainer1}>
                <TextInput
                  style={styles.inputs}
                  maxLength={10}
                  keyboardType="phone-pad"
                  placeholder="Enter Mobile Number"
                  placeholderTextColor="#979797"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.wrapShortR}>
              <Text style={[cStyles.headerText2BL, styles.centeredText, { marginTop: 12 }]}>
                You will receive 5 digits code on your number
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[cStyles.button, { marginTop: 40 }]}
            activeOpacity={0.8}
            onPress={handleGetOTP}
          >
            <Text style={cStyles.buttonText}>Get OTP</Text>
          </TouchableOpacity>
            <View style={{ marginBottom: height * 0.05, }}></View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    backgroundColor: '#fff',
  },
  container1: {
    alignItems: 'center',
  },
  loginImage: {
    width: width/1.8,
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    marginBottom: 50,
  },
  centeredText: {
    textAlign: 'center',
    marginTop: 18,
  },
  inputContainer2: {
    marginRight: 10,
    borderColor: '#979797',
    borderWidth: 0.5,
    borderRadius: 14,
    backgroundColor: '#FEFCFC',
    height: 48,
    width: '20%',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
  },
  inputs: {
    padding: 8,
    color: '#121212',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  inputContainer1: {
    borderColor: colors.inputBorderColor,
    borderWidth: 0.5,
    borderRadius: 14,
    backgroundColor: '#FEFCFC',
    height: 48,
    width: '75%',
    paddingHorizontal: 7,
    justifyContent: "center",
  },
});

export default LoginScreen;
