/* eslint-disable prettier/prettier */
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import CustomDropdown from '../../components/CustomDropdown';
import DocumentPicker from 'react-native-document-picker';

const { width, height } = Dimensions.get('window');

const SignUp3 = ({ navigation, route }) => {
  const [selectedRegNo, setSelectedRegNo] = useState('');
  const [selectedDriveNo, setSelectedDriveNo] = useState('');
   const [uploadedDocuments, setUploadedDocuments] = useState({});

  // const handleDocumentUpload = async (type) => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     console.log('Document Picker Response:', res); // Debugging line to check response
  //     setUploadedDocuments((prev) => ({ ...prev, [type]: res[0] }));
  //     Alert.alert('Success', `Document ${type} uploaded successfully.`);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       Alert.alert('Cancelled', 'Document selection cancelled.');
  //     } else {
  //       console.error('Document Picker Error:', err); // Debugging line to check error
  //       Alert.alert('Error', 'Failed to upload document.');
  //     }
  //   }
  // };
  const handleDocumentUpload = async (type) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('Document Picker Response:', res); 
      setUploadedDocuments((prev) => ({ ...prev, [type]: res[0] }));
      Alert.alert('Success', `Document ${type} uploaded successfully.`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Cancelled', 'Document selection cancelled.');
      } else {
        console.error('Document Picker Error:', err); 
        Alert.alert('Error', 'Failed to upload document.');
      }
    }
  };
  const handleDocumentRemove = (type) => {
    setUploadedDocuments((prev) => {
      const newDocs = { ...prev };
      delete newDocs[type];
      return newDocs;
    });
  };

  // const handleDocumentRemove = (type) => {
  //   setUploadedDocuments((prev) => {
  //     const newDocs = { ...prev };
  //     delete newDocs[type];
  //     return newDocs;
  //   });
  // };

  const getButtonStyle = (type) => {
    return [
      cStyles.uploadBtn,
      uploadedDocuments[type] ? styles.uploadBtnWithFile : styles.uploadBtnWithoutFile,
    ];
  };

    const [buttonDisabled, setButtonDisabled] = useState(false);

   const handleSubmit = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
      navigation.navigate('SignUp4');
    }, 1000);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={cStyles.wrapT}>
          <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8}>
            {/* Back button content */}
          </TouchableOpacity>
          <Text style={cStyles.backText}>Sign Up - Step 3</Text>
          <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}>
            {/* Another button content */}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../../assets/img/Step3.png')} style={cStyles.progImage} />
        <View style={styles.contentContainer}>
    

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 11 }]}>
              Driving License No. <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={cStyles.inputContainer1}>
              <TextInput
                style={cStyles.inputs}
                placeholder="Enter your Driving License No."
                maxLength={16}
                placeholderTextColor="#979797"
                value={selectedDriveNo}
                onChangeText={(text) => setSelectedDriveNo(text)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
                  <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 11 }]}>
              Upload Driving License <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <TouchableOpacity
           style={[cStyles.uploadBtn]}
        onPress={() => handleDocumentUpload('drivinglicence')}
        activeOpacity={0.8}
      >
        <Text style={cStyles.uploadBtnText}>Upload</Text>
      </TouchableOpacity>
         {/* {uploadedDocuments.aadharFront && (
              <View style={styles.fileInfoContainer}>
                <Text style={styles.fileNameText}>{uploadedDocuments.aadharFront.name}</Text>
                <TouchableOpacity onPress={() => handleDocumentRemove('aadharFront')}>
                  <Image source={require('../../../assets/img/close.png')} style={cStyles.closeImage} />
                </TouchableOpacity>
              </View>
            )} */}
          </View>


          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 11 }]}>
              Bike Registration No. <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={cStyles.inputContainer1}>
              <TextInput
                style={cStyles.inputs}
                //maxLength={10}
                placeholder="Enter your bike’s Reg. No."
                placeholderTextColor="#979797"
                value={selectedRegNo}
                onChangeText={(text) => setSelectedRegNo(text)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={styles.inputContainerWithLabel}>
            <Text style={[cStyles.headerText2BL, { marginBottom: 11}]}>
              Upload RC Book <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
              <TouchableOpacity
        style={[cStyles.uploadBtn]}
        onPress={() => handleDocumentUpload('registration')}
        activeOpacity={0.8}
      >
        <Text style={cStyles.uploadBtnText}>Upload</Text>
      </TouchableOpacity>
       {/* {uploadedDocuments.panCard && (
              <Text style={cStyles.fileNameText}>{uploadedDocuments.panCard.name}</Text>
            )} */}
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
    margin:3,
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
});

export default SignUp3;