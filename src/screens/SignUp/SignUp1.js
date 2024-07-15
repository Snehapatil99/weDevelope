/* eslint-disable prettier/prettier */
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import CustomDropdown from '../../components/CustomDropdown';

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

  const [buttonDisabled, setButtonDisabled] = useState(false);

   const handleSubmit = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
      navigation.navigate('SignUp2');
    }, 1000);
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
            <Text style={[cStyles.headerText2BL, { marginBottom: 14 }]}>
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
          </View>

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 14 }]}>
              Contact No. <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={cStyles.inputContainer1}>
              <TextInput
                style={cStyles.inputs}
                placeholder="Enter your contact number"
                maxLength={10}
                placeholderTextColor="#979797"
                value={selectedContactNumber}
                onChangeText={(text) => setSelectedContactNumber(text)}
                underlineColorAndroid="transparent"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 14 }]}>
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
            <Text style={[cStyles.headerText2BL, { marginBottom: 14 }]}>
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
          </View>

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 14 }]}>
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
          </View>

          <View style={styles.dropdownContainer}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 14 }]}>
              Gender <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
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
          </View>

           <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 14 }]}>
              Date of Birth <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={cStyles.inputContainer1}>
              <TextInput
                style={cStyles.inputs}
                placeholder="Enter your dob"
                placeholderTextColor="#979797"
                value={selectedDateOfBirth}
                onChangeText={(text) => setSelectedDateOfBirth(text)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
        </View>
            
         <View style={{ marginBottom: height * 0.15, }}></View>
      </ScrollView>
      <TouchableOpacity
        style={[cStyles.button, styles.continueButton, {  opacity: buttonDisabled ? 0.5 : 1 },]}
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
  headerContainer: {
    // You can add any specific styles for the header here
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingVertical: 10,
  },
  inputContainerWithLabel: {
    //marginBottom: 24,
  },
  dropdownContainer: {
    position: 'relative',
    zIndex: 2000,
    marginBottom: 24,
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});

export default SignUp1;