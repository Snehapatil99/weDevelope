/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import cStyles from '../../components/cStyles';

const { width, height } = Dimensions.get('window');

const OTPScreen  = ({ navigation, route }) => {

     const { phoneNumber } = route.params;
    const [otp, setOtp] = useState(['', '', '', '', '']);

    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);

    // const [timer, setTimer] = useState(60); 
    // const [showResendButton, setShowResendButton] = useState(false); 
     const [timer, setTimer] = useState(0);
  const [showResendButton, setShowResendButton] = useState(true);

     const focusPreviousInput = index => {
        if (inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    const focusNextInput = index => {
        if (inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (index, event) => {
        if (event.nativeEvent.key === 'Backspace' && otp[index] === '') {
            focusPreviousInput(index);
        } else if (event.nativeEvent.key !== 'Backspace' && otp[index] === '' && index < 4) {
            // If a digit is entered and the current input field is empty, move focus to the next input field
            focusNextInput(index);
        }
    };

    useEffect(() => {
        let intervalId;
        if (timer > 0) {
            // Start the timer countdown
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            // Timer expired, show resend button
            setShowResendButton(true);
        }

        // Clear the interval when component unmounts or timer reaches 0
        return () => clearInterval(intervalId);
    }, [timer]);

      const handleResend = () => {
    setTimer(59);
    setShowResendButton(false);
    // Add logic to resend OTP here
    Alert.alert('OTP Resent', 'A new OTP has been sent to your phone number.');
  };

 const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleVerifyAndContinue = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
      navigation.navigate('SignUp1');
    }, 1000);
  };

   return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enabled
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container1}>
          <Image source={require('../../assets/img/OTP.png')} style={styles.loginImage} 
             resizeMode="contain"
          />
          <Text style={[cStyles.headerText1BL, { alignSelf: 'center' }]}>
            Validate Phone No.
          </Text>
          <Text style={[cStyles.headerText2BL, styles.centeredText]}>
            Please enter the 5 digit OTP sent on your Reg. phone no.
          </Text>
          <View style={{ marginTop: 48 }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={[cStyles.headerText2BL, styles.numberText]}>
              +91 {phoneNumber}
            </Text>
             <Image source={require('../../assets/img/edit.png')} style={styles.edit}
          />
          </View>
         
           
            <View style={{ flexDirection: 'row', marginTop: 24, marginBottom: 10, justifyContent: 'center'}}>
                 <View style={styles.inputContainer}>
                        {otp.map((value, index) => (
                            <TextInput
                                key={index}
                                ref={ref => (inputRefs.current[index] = ref)}
                                style={[
                                    styles.input,
                                    {
                                        backgroundColor: value !== '' ? '#EFF2F5' : '#EFF2F5',
                                        borderColor: value !== '' ? '#EFF2F5' : '#EFF2F5',
                                    },
                                ]}
                                value={value}
                                onChangeText={text => {
                                    const newOtp = [...otp];
                                    newOtp[index] = text;
                                    setOtp(newOtp);
                                    if (text.length === 1) {
                                        focusNextInput(index);
                                    }
                                }}
                                keyboardType="number-pad"
                                maxLength={1}
                                onSubmitEditing={() => focusNextInput(index)}
                                onKeyPress={event => handleKeyPress(index, event)}
                                textAlign="center"
                                textAlignVertical="center"
                            />
                        ))}
                    </View>
            </View>
           
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.wrapShortR}>
                            {showResendButton ? (
                   <Text style={[cStyles.headerText2BL, styles.centeredText, { marginTop: 12 }]}>
                Didn’t Receive Code?{' '}
<Text style={styles.resendText} onPress={handleResend}>
                    Resend
                  </Text>
              </Text>
                ) : (
                  <Text style={[cStyles.headerText2BL, styles.centeredText, { marginTop: 12 }]}>Resend OTP in {timer} sec</Text>
                )}
            </View>
          </View>
         <TouchableOpacity
            style={[
              cStyles.button,
              { marginTop: 40, opacity: buttonDisabled ? 0.5 : 1 },
            ]}
            activeOpacity={0.8}
            disabled={buttonDisabled}
            onPress={handleVerifyAndContinue}
          >
            <Text style={cStyles.buttonText}>Verify and Continue</Text>
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
    inputContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    borderColor: '#000000',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: width / 8,
    height: 45,
    fontFamily: 'Poppins-Medium',
    borderRadius: 8,
    borderWidth: 2,
    color: '#121212',
    fontSize: 18,
    lineHeight: 25,
    marginHorizontal: 7,
    textAlign: 'center',
  },
    numberText:{
         backgroundColor: '#EFF2F5',
         padding:10,
          borderRadius: 40,
          alignSelf: 'center'
    },
    edit:{
        resizeMode:'contain',
          width: 19,
        height: 19,
         alignSelf: 'center',
         marginLeft: 10,

    },
    resendText:{
      color: '#DF1F26'
    }
});


export default OTPScreen