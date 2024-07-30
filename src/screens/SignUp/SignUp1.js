/* eslint-disable prettier/prettier */
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import CustomDropdown from '../../components/CustomDropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get('window');

const SignUp1 = ({ navigation, route }) => {
  const [selectedName, setSelectedName] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedContactNumber, setSelectedContactNumber] = useState('');
  const [selectedAlternateContactNumber, setSelectedAlternateContactNumber] = useState('');
  const [selectedWappNumber, setSelectedWappNumber] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedGenderID, setSelectedGenderID] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedProfessionID, setSelectedProfessionID] = useState('');
  const [selectedDateOfBirth, setSelectedDateOfBirth] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [errors, setErrors] = useState({});
  ;

  // const handleSubmit = () => {
  //   setButtonDisabled(true);
  //   setTimeout(() => {
  //     setButtonDisabled(false);
  //     navigation.navigate('SignUp2');
  //   }, 1000);
  // };
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form is valid, navigating to SignUp2");
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonDisabled(false);
        try {
          navigation.navigate('SignUp2');
          console.log("Navigated to SignUp2");
        } catch (error) {
          console.error("Navigation error:", error);
        }
      }, 1000);
    } else {
      console.log("Form validation failed");
    }
  };


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setSelectedDateOfBirth(currentDate.toISOString().split('T')[0]);
    if (Platform.OS !== 'ios') {
      setDatePickerVisibility(false);
    }
  };
  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{10}$/;

    // Validate name
    if (!nameRegex.test(selectedName.trim())) {
      errors.name = 'Invalid name';
      valid = false;
    }

    // Validate alternate phone number
    if (selectedAlternateContactNumber && !phoneNumberRegex.test(selectedAlternateContactNumber.trim())) {
      errors.alternateContactNumber = 'Invalid alternate phone number';
      valid = false;
    }

    // Validate WhatsApp number
    if (!phoneNumberRegex.test(selectedWappNumber.trim())) {
      errors.wappNumber = 'Invalid WhatsApp number';
      valid = false;
    }

    // Validate email address
    if (!emailRegex.test(selectedEmail.trim())) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    // Validate date of birth
    if (!selectedDateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required';
      valid = false;
    }

    // Set errors
    setErrors(errors);
    return valid;
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={cStyles.wrapT}>
          <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8}>
            {/* Back button content */}
          </TouchableOpacity>
          <Text style={cStyles.backText}>Sign Up - Step 1</Text>
          <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}>
            {/* Another button content */}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../../assets/img/Step1.png')} style={cStyles.progImage} />
        <View style={styles.contentContainer}>
          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 12, }]}>
              Name <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={cStyles.inputContainer1}>
              <TextInput
                style={cStyles.inputs}
                placeholder="Enter your name"
                placeholderTextColor="#979797"
                value={selectedName}
                onChangeText={(text) => setSelectedName(text)}
                underlineColorAndroid="transparent"
              />
            </View>
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          </View>

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 12, }]}>
              Alternate Phone No.
            </Text>
            <View style={cStyles.inputContainer1}>
              <TextInput
                style={cStyles.inputs}
                placeholder="Enter your alternate phone number"
                maxLength={10}
                placeholderTextColor="#979797"
                keyboardType="phone-pad"
                value={selectedAlternateContactNumber}
                onChangeText={(text) => setSelectedAlternateContactNumber(text)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 12, }]}>
              WhatsApp Number <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={cStyles.inputContainer1}>
              <TextInput
                style={cStyles.inputs}
                placeholder="Enter your whatsapp number"
                maxLength={10}
                placeholderTextColor="#979797"
                keyboardType="phone-pad"
                value={selectedWappNumber}
                onChangeText={(text) => setSelectedWappNumber(text)}
                underlineColorAndroid="transparent"
              />
            </View>
            {errors.wappNumber && <Text style={styles.errorText}>{errors.wappNumber}</Text>}

          </View>

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 12, }]}>
              Email Address <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={cStyles.inputContainer1}>
              <TextInput
                style={cStyles.inputs}
                placeholder="Enter your email address"
                placeholderTextColor="#979797"
                value={selectedEmail}
                onChangeText={(text) => setSelectedEmail(text)}
                underlineColorAndroid="transparent"
              />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          </View>

          <View style={styles.dropdownContainer}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 12, }]}>
              Gender <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={styles.dropdownWrapper}>
              <CustomDropdown
                options={[
                  { label: 'Male', value: 'Male' },
                  { label: 'Female', value: 'Female' },
                  { label: 'Other', value: 'Other' },
                ]}
                onSelect={(value) => setSelectedGender(value)}
                selectedValue={selectedGender}
                placeholder="Select Gender"
              />
              {/* <Image
                source={require('../../assets/img/dropDown.png')}
                resizeMode='contain'
                style={styles.dropdownIcon}
              /> */}
            </View>
            {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

          </View>

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 12 }]}>
              Date of Birth <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <TouchableOpacity onPress={showDatePicker}>
              <View style={cStyles.inputContainer1}>
                <TextInput
                  style={cStyles.inputs}
                  placeholder="Enter your Date Of Birth"
                  placeholderTextColor="#979797"
                  value={selectedDateOfBirth}
                  editable={false} // Prevent manual text input
                  underlineColorAndroid="transparent"
                />
              </View>
            </TouchableOpacity>
          </View>
          {isDatePickerVisible && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
              onClose={() => setDatePickerVisibility(false)}
            />
          )}
        </View>
        {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}

        <View style={{ marginBottom: height * 0.15 }}></View>
      </ScrollView>
      <TouchableOpacity
        style={[cStyles.button, styles.continueButton, { opacity: buttonDisabled ? 0.5 : 1 }]}
        onPress={handleSubmit}
        disabled={buttonDisabled}
        activeOpacity={0.8}
      >
        <Text style={cStyles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFCFC',
  },
  headerContainer: {},
  scrollContainer: {
    paddingHorizontal: 19,
  },
  contentContainer: {
    paddingVertical: 10,
    margin: 1
  },
  inputContainerWithLabel: {},
  dropdownContainer: {
    position: 'relative',
    zIndex: 2000,
    marginBottom: 24,
    borderColor: "black",
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 1
  },
  dropdownIcon: {
    marginLeft: 10,
    height: 20,
    width: 20,
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    bottom: 19,
    fontSize: 12,
    fontFamily: "Poppins-Small",
    fontWeight: "500"
  },
});

export default SignUp1;

