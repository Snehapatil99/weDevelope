import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Alert, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import DocumentPicker from 'react-native-document-picker';
import SwipeButton from 'rn-swipe-button';
import thumbIcon from '../../../assets/img/arrow-left1.png';
import axios from 'axios';

const { width, height } = Dimensions.get('window');


const OrderDetails = ({ navigation, route }) => {
  // const { orderID } = route.params;
  // console.log('orderID', orderID);
  const { did, dispid } = route.params || 12;
  console.log("id", dispid)
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [orderStatus, setOrderStatus] = useState('Pending');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [orderData, setOrderData] = useState({});
  const [mopVisible, setMopVisible] = useState(false);


  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [uploadedDocuments, setUploadedDocuments] = useState({});



  const handleNext = async () => {
    setSwiped(true);
    console.log('Order Completed');
  }

  useEffect(() => {
    // Fetch order details from API
    const fetchOrderDetails = async () => {
      try {
        // const response = await axios.get(`https://temp.wedeveloptech.in/united/appdata/getdeliverydtls-ax.php?did=${did}`);
        const response = await axios.get(`https://temp.wedeveloptech.in/united/appdata/getdeliverydtls-ax.php?did=$did&statusid=1`)
        const data = response.data.data;
        setOrderData(data);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
        setOrderStatus(data.status);
        setMopVisible(data.orderstatus === 2);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [did, dispid]);

  // const handleSwipeSuccess = () => {
  //   if (orderStatus === 'Pending') {
  //     setSwiped(true);
  //     setOrderStatus('Out for Delivering');
  //   } else if (orderStatus === 'Out for Delivering') {
  //     navigation.navigate('OrderDeliveries');
  //   }
  // };
  const handleSwipeSuccess = async () => {
    if (orderStatus === 'Pending') {
      try {
        const response = await axios.post('https://temp.wedeveloptech.in/united/appdata/requpdatedeliverystatus-ax.php?did=1&statusid=2', {
          did: orderData.did,
          status: 'Out for Delivering',
        });
        // console.log('orderDeatisl:', response.data);
        // Check if statusid is 2
        if (response.data.data.statusid === '2') {
          setOrderStatus('CompleteOrder');
          navigation.navigate('OrderDeliver', { did: orderData.did, dispid: orderData.dispid });
        } else {
          console.log('Status ID is not 2. No navigation.');
        }
      } catch (error) {
        console.error('Error updating order status:', error);
      }
    } else if (orderStatus === 'Out for Delivering') {
      navigation.navigate('OrderDeliver', { did: orderData.did, dispid: orderData.dispid });
    }
  };


  const openGoogleMaps = () => {
    if (latitude && longitude) {
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
    } else {
      console.error("Latitude or longitude is not available.");
    }
  };


  const renderSwipeButton = () => {
    if (orderData.orderstatus === 1) {
      return (
        <SwipeButton
          key="initial"
          onSwipeSuccess={handleSwipeSuccess}
          style={styles.slideButton}
          disabled={false}
          swipeSuccessThreshold={70}
          height={56}
          width={width / 1.2}
          containerStyles={{ borderRadius: 3, position: "absolute", bottom: 16, alignSelf: "center" }}
          title="Order Picked-up"
          titleColor='#DF1F26'
          titleStyles={{
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: "600",
            color: "#000000",
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 19
          }}
          containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          thumbIconImageSource={thumbIcon}
          thumbIconStyles={{ borderRadius: 8, height: 44, width: 44, left: 1 }}
          thumbIconBackgroundColor='#DF1F26'
          thumbIconBorderColor='#FEFCFC'
          railBorderColor='#DF1F26'
          railBackgroundColor='#FEFCFC'
          railFillBackgroundColor='rgba(255, 255, 255, 0.7)'
          resetAfterSuccess={true}
        />
      );
    } else if (orderData.orderstatus === 2) {
      return (
        <SwipeButton
          key="swiped"
          onSwipeSuccess={handleSwipeSuccess}
          style={styles.slideButton}
          disabled={false}
          swipeSuccessThreshold={70}
          height={56}
          width={width / 1.2}
          containerStyles={{ borderRadius: 3, position: "absolute", bottom: 16, alignSelf: "center" }}
          title='Complete Order'
          titleColor='#DF1F26'
          titleStyles={{
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: "600",
            color: "#000000",
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 19
          }}
          containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          thumbIconImageSource={thumbIcon}
          thumbIconStyles={{ borderRadius: 8, height: 44, width: 44, left: 1 }}
          thumbIconBackgroundColor='#DF1F26'
          thumbIconBorderColor='#FEFCFC'
          railBorderColor='#DF1F26'
          railBackgroundColor='#FEFCFC'
          railFillBackgroundColor='rgba(255, 255, 255, 0.7)'
          resetAfterSuccess={true}
        />
      );
    } else {
      return null;
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
          <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}>
            <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8} >
              <Image source={require('../../../assets/img/helpline.png')}></Image>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.orderC}>
          <Text style={[cStyles.headerText0BL, { alignSelf: 'center' }]}>{orderData.dispid}</Text>
          <View style={[cStyles.cardBtn, {}]}>
            {/* <Text style={[cStyles.cardText, { color: '#1ECC44' }]}>Out for Delivery</Text> */}
            {/* <Text style={[cStyles.cardText, { color: '#DF1F26' }]}>Pending</Text> */}
            <Text style={[cStyles.cardText, { color: orderData.orderstatus === 1 ? '#DF1F26' : '#1ECC44' }]}>
              {orderData.status}
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
                  {orderData.prodlist && orderData.prodlist.map((product, index) => (
                    <View key={index} style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15 }]}>
                      <View style={styles.leftContainer}>
                        <View style={styles.imageL}>
                          <Image source={{ uri: product.dispimage }} style={styles.image2} />
                        </View>
                        <View style={styles.textContainer}>
                          <Text style={[cStyles.cardText, { marginBottom: 0, }]}>{product.name}</Text>
                          <Text style={[cStyles.cardText, styles.numberText, { marginVertical: 4 }]}>
                            {product.qtylabel}
                          </Text>
                          <Text style={[cStyles.headerTextBL, {}]}>Quantity: {product.quantity}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </>
            )}

          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.leftContainer, { justifyContent: 'space-between' }]}>
            <Text style={[cStyles.headerText0BL]}>Total Order Value</Text>
            {mopVisible && (
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.numberText1, { fontFamily: 'Poppins-Medium', fontSize: 11, lineHeight: 15 }]}>
                  {orderData.moptext}

                </Text>
                <View style={styles.starImage}>
                  <Image source={require('../../assets/img/edit-2.png')} style={cStyles.icon} />
                </View>
              </View>
            )}
          </View>
          <Text style={[cStyles.headerText3Gr, { marginTop: 4, color: "#1A8A32" }]}>₹{orderData.totalprice}</Text>
        </View>
        <View style={styles.card}>
          <View style={[styles.leftContainer, { justifyContent: 'space-between' }]}>
            <Text style={[cStyles.headerText0BL]}>Delivery Address</Text>
            <TouchableOpacity onPress={openGoogleMaps}>
              <Image
                source={require('../../assets/img/locate.png')}
                resizeMode='contain'
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.addressText}>
                {orderData.address}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[cStyles.cardText, styles.TimeText]}>
                {orderData.timeslot}
              </Text>
            </View>
          </View>
        </View>


      </ScrollView>

      {/* {orderData.status = '1' ? (
         <SwipeButton
            key="swiped"
            onSwipeSuccess={handleSwipeSuccess}
            style={styles.slideButton}
            disabled={false}
            swipeSuccessThreshold={70}
            height={56}
            width={width / 1.2}
            containerStyles={{ borderRadius: 3, position: "absolute", bottom: 16, alignSelf: "center" }}
            title="Complete Order"
            titleColor='#DF1F26'
            titleStyles={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: "600",
              color: "#000000",
              fontSize: 16,
              fontFamily: 'Poppins-SemiBold',
              lineHeight: 19
            }}
            containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            thumbIconImageSource={thumbIcon}
            thumbIconStyles={{ borderRadius: 8, height: 44, width: 44, left: 1 }}
           thumbIconBackgroundColor='#DF1F26'
        thumbIconBorderColor='#FEFCFC'
        railBorderColor='#DF1F26'
        railBackgroundColor='#FEFCFC'
        railFillBackgroundColor='rgba(255, 255, 255, 0.7)'
            resetAfterSuccess={true}
          />
      ) : (
        <SwipeButton
          key="initial"
          onSwipeSuccess={handleSwipeSuccess}
          style={styles.slideButton}
          disabled={false}
          swipeSuccessThreshold={70}
          height={56}
          width={width / 1.2}
          containerStyles={{ borderRadius: 3, position: "absolute", bottom: 16, alignSelf: "center" }}
          title="Order Picked-up"
          titleColor='#DF1F26'
          titleStyles={{
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: "600",
            color: "#000000",
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 19
          }}
          containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          thumbIconImageSource={thumbIcon}
          thumbIconStyles={{ borderRadius: 8, height: 44, width: 44, left: 1 }}
          thumbIconBackgroundColor='#DF1F26'
        thumbIconBorderColor='#FEFCFC'
        railBorderColor='#DF1F26'
        railBackgroundColor='#FEFCFC'
        railFillBackgroundColor='rgba(255, 255, 255, 0.7)'
          resetAfterSuccess={true}
        />
      )} */}
      {renderSwipeButton()}
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
  numberText1: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'center',
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


export default OrderDetails


