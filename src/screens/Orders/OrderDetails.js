/* eslint-disable prettier/prettier */
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import DocumentPicker from 'react-native-document-picker';
import SwipeButton from 'rn-swipe-button';
import thumbIcon from '../../assets/img/arrow-left1.png';


const { width, height } = Dimensions.get('window');

const OrderDetails = ({ navigation, route }) => {
  const { orderID } = route.params;
  console.log('orderID', orderID);

  const [uploadedDocuments, setUploadedDocuments] = useState({});

  const handleNext = async () => {
    console.log('Order Completed');
  }


  const handleDocumentUpload = async (type) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('Document Picker Response:', res); // Debugging line to check response
      setUploadedDocuments((prev) => ({ ...prev, [type]: res[0] }));
      Alert.alert('Success', `Document ${type} uploaded successfully.`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Cancelled', 'Document selection cancelled.');
      } else {
        console.error('Document Picker Error:', err); // Debugging line to check error
        Alert.alert('Error', 'Failed to upload document.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
          <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
          </TouchableOpacity>
          <Text style={cStyles.backText}>Order Details</Text>
          <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.orderC}>
          <Text style={[cStyles.headerText0BL, {}]}>{orderID}</Text>
          <View style={[cStyles.cardBtn, { marginTop: 8 }]}>
            <Text style={[cStyles.cardText, { color: '#1ECC44' }]}>Out for Delivery</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={[styles.productDetailscard, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
            <Text style={[cStyles.headerText0BL]}>Product Details</Text>
            <Image source={require('../../assets/img/collapse.png')} resizeMode='contain'
              style={{ height: 21, width: 12 }}></Image>
          </View>
        </View>
        <View style={styles.card2}>
          <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
          </View>
          <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15 },]}>
            <View style={styles.leftContainer}>
              <View style={styles.imageL}>
                <Image source={require('../../assets/img/beer1.png')} style={styles.image2} />
              </View>

              <View style={styles.textContainer}>
                <Text style={[cStyles.cardText, { marginBottom: 0, }]}>The Glenlivet 12 Year Old</Text>
                <Text style={[cStyles.cardText, styles.numberText, { marginVertical: 4 }]}>
                  350 ML
                </Text>
                <Text style={[cStyles.headerTextBL, {}]}>Quantity: 1</Text>
              </View>
            </View>
          </View>
          <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15 },]}>
            <View style={styles.leftContainer}>
              <View style={styles.imageL}>
                <Image source={require('../../assets/img/beer1.png')} style={styles.image2} />
              </View>
              <View style={styles.textContainer}>
                <Text style={[cStyles.cardText, { marginBottom: 0, }]}>Jim Bim Bourbon Whiskey</Text>
                <Text style={[cStyles.cardText, styles.numberText, { marginVertical: 4 }]}>
                  350 ML
                </Text>
                <Text style={[cStyles.headerTextBL, {}]}>Quantity: 1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card2}>
          <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
            <Text style={[cStyles.headerText0BL]}>Total Order Value</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[cStyles.cardText, styles.numberText, { fontFamily: 'Poppins-Medium', }]}>
                Cash
              </Text>
              <View style={styles.starImage}>
                <Image
                  source={require('../../assets/img/edit-2.png')}
                  style={cStyles.icon}
                />
              </View>
            </View>
          </View>
          <Text style={[cStyles.headerText2Gr, { marginBottom: 0, }]}>₹1,569.00</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={[cStyles.headerText2BL, { marginBottom: 14 }]}>
            Upload Delivery Photo <Text style={cStyles.requiredIndicator}>*</Text>
          </Text>
          <TouchableOpacity
            style={[cStyles.uploadBtn]}
            onPress={() => handleDocumentUpload('deliveryphoto')}
            activeOpacity={0.8}
          >
            <Text style={cStyles.uploadBtnText}>Upload</Text>
          </TouchableOpacity>
          {/* {uploadedDocuments.panCard && (
              <Text style={cStyles.fileNameText}>{uploadedDocuments.panCard.name}</Text>
            )} */}
        </View>

        <SwipeButton onSwipeStart={navigation.navigate('OrderDeliver')}
          style={styles.slideButton}
          disabled={false}
          swipeSuccessThreshold={70}
          height={56}
          width={width / 1.2}
          borderRadius={6}
          title="Order Picked -up"
          titleColor='#DF1F26'
          //titleFontSize={24}
          titleStyles={{
            justifyContent: 'center',
            alignItems: 'center',
            //paddingLeft: 30,
            fontWeight: "600",
            color: "#000000",
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 19
          }}
          containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          thumbIconImageSource={thumbIcon}
          thumbIconStyles={{ borderRadius: 6 }}
          onSwipeSuccess={handleNext}
          thumbIconBackgroundColor='#DF1F26'
          thumbIconBorderColor='#FEFCFC'
          railBorderColor='#DF1F26'
          railBackgroundColor='#FEFCFC'
          railFillBackgroundColor='rgba(255, 255, 255, 0.7)'

        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFCFC',
  },
  headerContainer: {
    //paddingHorizontal: 10,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  orderC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 16,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginTop: 30
  },
  productDetailscard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 16,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginTop: 30
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageL: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 12
  },
  image2: {
    height: '85%',
    width: '85%',
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  numberText: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  starImage: {
    height: 19,
    width: 19,
    alignSelf: 'center',
    marginLeft: 8
  },
  inputContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderDetails;
