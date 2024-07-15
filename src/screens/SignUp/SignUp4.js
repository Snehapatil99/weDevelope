/* eslint-disable prettier/prettier */
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import CustomDropdown from '../../components/CustomDropdown';
import DocumentPicker from 'react-native-document-picker';
import colors from '../../components/Color';
const defaultProfileImage = require('../../assets/img/defaultImage1.png');

const { width, height } = Dimensions.get('window');

const SignUp4 = ({ navigation, route }) => {

   const [profileImage, setProfileImage] = useState(null); 

   const handleImageUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setProfileImage(res[0]);
      Alert.alert('Success', 'Profile image uploaded successfully.');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Cancelled', 'Image selection cancelled.');
      } else {
        console.error('Document Picker Error:', err);
        Alert.alert('Error', 'Failed to upload image.');
      }
    }
  };
    const [buttonDisabled, setButtonDisabled] = useState(false);

   const handleSubmit = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
      navigation.navigate('Waiting');
    }, 1000);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={cStyles.wrapT}>
          <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8}>
            {/* Back button content */}
          </TouchableOpacity>
          <Text style={cStyles.backText}>Sign Up - Step 4</Text>
          <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}>
            {/* Another button content */}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../../assets/img/Step4.png')} style={cStyles.progImage} />
        <View style={styles.contentContainer}>
    


<View style={{marginTop:80}}>
           <View style={styles.defaultContainer}>
            <TouchableOpacity onPress={handleImageUpload} style={styles.imageUploadButton}>
                {profileImage ? (
                  <Image source={{ uri: profileImage.uri }} style={styles.previewImage} />
                ) : (
                  <Image source={defaultProfileImage} style={styles.defaultProfileImage} />
                )}
              </TouchableOpacity>
                            {/* {profileImage ? (
                                <Image source={{ uri: profileImage.path }} style={styles.previewImage} />
                            ) : (
                                <Image source={defaultProfileImage} style={styles.defaultProfileImage} />
                            )} */}
                        </View>

                      <Text style={[cStyles.headerText2BL, { marginTop: 16, alignSelf: 'center' }]}>
             Upload Your Photo <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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
   fileNameText: {
    marginBottom: 24,
    color: '#333',
  },
   fileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
   uploadBtnWithFile: {
    marginBottom: 10,
  },
  uploadBtnWithoutFile: {
    marginBottom: 20,
  },
   imageUploadButton: {
    width: 184,
    height: 184,
    borderWidth: 1,
    borderColor:colors.inputBorderColor ,
    justifyContent: 'center',
     borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'center'
  },
  defaultProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default SignUp4;