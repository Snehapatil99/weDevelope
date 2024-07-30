/* eslint-disable prettier/prettier */
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import DocumentPicker from 'react-native-document-picker';
import SwipeButton from 'rn-swipe-button';
import thumbIcon from '../../assets/img/arrow-left1.png';
import Row from '../../common/Row';
import Col from '../../common/Col';



const { width, height } = Dimensions.get('window');

const CompleteOrder = ({ navigation, route }) => {
  // const { orderID } = route.params;
  // console.log('orderID', orderID);


  const [isCollapsed, setIsCollapsed] = useState(true);
  const [swiped, setSwiped] = useState(false);
  const [orderStatus, setOrderStatus] = useState('Pending');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [uploadedDocuments, setUploadedDocuments] = useState({});

  const handleNext = async () => {
    console.log('Order Completed');
  }


  const handleSwipeSuccess = () => {
    // if (orderStatus === 'Pending') {
    //   setSwiped(true);
    //   setOrderStatus('Out for Delivering');
    // } else if (orderStatus === 'Out for Delivering') {
      navigation.navigate('OrderDeliver');
    // }
  }


  const handleDocumentUpload = async (type) => {
    // try {
    //   const res = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.allFiles],
    //   });
    //   console.log('Document Picker Response:', res); // Debugging line to check response
    //   setUploadedDocuments((prev) => ({ ...prev, [type]: res[0] }));
    //   Alert.alert('Success', Document ${type} uploaded successfully.);
    // } catch (err) {
    //   if (DocumentPicker.isCancel(err)) {
    //     Alert.alert('Cancelled', 'Document selection cancelled.');
    //   } else {
    //     console.error('Document Picker Error:', err); // Debugging line to check error
    //     Alert.alert('Error', 'Failed to upload document.');
    //   }
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
          <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
          </TouchableOpacity>
          <Text style={cStyles.backText}>Order Details</Text>
          <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}>
            <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8} >
              <Image source={require('../../assets/img/helpline.png')}></Image>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.orderC}>
          <Text style={[cStyles.headerText0BL, { alignSelf: 'center' }]}>#UNTD2405135</Text>
          <View style={[cStyles.cardBtn, {}]}>
            {/* <Text style={[cStyles.cardText, { color: '#1ECC44' }]}>Out for Delivery</Text> */}
            {/* <Text style={[cStyles.cardText, { color: '#DF1F26' }]}>Pending</Text> */}
            <Text style={[cStyles.cardText, { color:'#1A8A32' }]}>
            Out For Delivery
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View style={[styles.productDetailsCard, {}]}>
            <TouchableOpacity style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]} onPress={toggleCollapse}>
              <Text style={cStyles.headerText0BL}>Product Details</Text>
              <View>
                <Image
                  source={isCollapsed ? require('../../assets/img/collapse.png') : require('../../assets/img/expand.png')}
                  resizeMode='contain'
                  style={{ height: 21, width: 12 }}
                />
              </View>

            </TouchableOpacity>
            {!isCollapsed && (
              <>
                <View style={styles.detailsCard2}>
                  <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
                  </View>
                  <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15 },]}>
                    <View style={styles.leftContainer}>
                      <View style={styles.imageL}>
                        <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
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
                        <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
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
              </>
            )}

          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.leftContainer, { justifyContent: 'space-between' },]}>
            <Text style={[cStyles.headerText0BL]}>Total Order Value</Text>
            <View style={{ flexDirection: 'row', justifyContent: "flex-end" }}>
              <Text style={[cStyles.cardText, styles.numberText, { fontFamily: 'Poppins-Medium', left: 6}]}>
                Cash
              </Text>
              <View style={styles.starImage}>
                <Image
                  source={require('../../../assets/img/edit-2.png')}
                  style={[cStyles.icon, {left:1}]}
                />
              </View>
            </View>
          </View>
          <Text style={[cStyles.headerText3Gr, { marginTop: 4, color: "#1A8A32" }]}>₹1,569.00</Text>
        </View>
        <View style={styles.card}>
          <View style={[styles.leftContainer, { justifyContent: 'space-between' },]}>
            <Text style={[cStyles.headerText0BL]}>Delivery Address</Text>
            <Image source={require('../../assets/img/locate.png')} resizeMode='contain'
              style={{ height: 20, width: 20 }}
            ></Image>
          </View>
          <View style={{}}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.addressText}>
                91springboard, Godrej & Boyce,{'\n'}
                Gate No. 2, Plant, No. 6,{'\n'}
                LBS Road . Vikhroli West,{'\n'}
                Mumbai, Maharashtra 400079
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[cStyles.cardText, styles.TimeText, {}]}>
                12:00 AM - 01:00 PM
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <SwipeButton
        onSwipeSuccess={handleSwipeSuccess}
        style={styles.slideButton}
        disabled={false}
        swipeSuccessThreshold={65}
        height={56}
        width={width / 1.2}
        containerStyles={{ borderRadius: 6, position: "absolute", bottom: 16, alignSelf: "center" }}
        title={"Complete Order"}
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
        // thumbIconImageSource={thumbIcon}
        thumbIconStyles={{ borderRadius: 6, height: 44, width: 44, left: 1 }}
        // onSwipeSuccess={handleNext}
        thumbIconBackgroundColor='#DF1F26'
        thumbIconBorderColor='#FEFCFC'
        railBorderColor='#DF1F26'
        railBackgroundColor='#FEFCFC'
        railFillBackgroundColor='rgba(255, 255, 255, 0.7)'

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    marginTop: 8
  },
  detailsCard2: {

    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    //marginVertical: 5,
  },
  card2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 16,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginTop: 30,
    marginHorizontal: 1,
    bottom: 0, margin: 2
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 16,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginTop: 30,
    marginHorizontal: 1,
    bottom: 7
  },
  productDetailsCard: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginVertical: 5,
    marginTop: 24,
    paddingVertical: 15
  },
  addressText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#4D4D4D',
    lineHeight: 19,
    marginVertical: 6,
  },
  addressCards: {
    width: width - 35,
    borderRadius: 6,
    padding: 16,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginTop: 25,
    marginHorizontal: 3,
    // bottom: 16    // margin:8
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
    // top:10
  },
  TimeText: {
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


export default CompleteOrder;
