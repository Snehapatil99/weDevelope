import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Alert, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import SwipeButton from 'rn-swipe-button';
import thumbIcon from '../../assets/img/arrow-left1.png';
import Row from '../../common/Row';
import Col from '../../common/Col';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const OrderDeliver = ({ route }) => {
    const { width } = Dimensions.get('window');
    const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility
    const [orderStatus, setOrderStatus] = useState('Pending');
    const navigation = useNavigation();
    const { did,dispid } = route.params || 12;
    console.log("dataid0",dispid)
    // const route = useRoute(); 
    const [orderData, setOrderData] = useState({});
    // console.log("id", orderData)

    const updateOrderStatus = async (did) => {
        try {
            const response = await axios.get('https://temp.wedeveloptech.in/united/appdata/getdeliverydtls-ax.php?did=${did}&statusid=3', {
                params: {
                    did: orderData.did,
                    statusid: 3 // Status ID
                }
            });

            console.log('Response from status update:', response.data);

            if (navigation && typeof navigation.navigate === 'function') {
                if (response.data.code === 1) { 
                    const orderData = response.data.data;
                    console.log("paas", response.data)
                    navigation.navigate('BackToDashBoard', {
                        orderData: {
                            did: orderData.did,
                            statusid: orderData.statusid,
                            bonus: orderData.bonus,
                            pocketbalance: orderData.pocketbalance || "0",
                            todayearning: orderData.todayearning || "0",
                            orderdtls: {
                                deliverytime: orderData.orderdtls.deliverytime,
                                paymode: orderData.orderdtls.paymode,
                                amountrecvd: orderData.orderdtls.amountrecvd
                            }
                        }
                    });

                } else {
                    Alert.alert('Update Failed', 'The order status update failed.');
                }
            } else {
                console.error('Navigation object is not defined.');
            }

        } catch (error) {
            console.error('Error updating order status:', error);
            Alert.alert('Error', 'Failed to update order status.');
        }
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const handleSwipeSuccess = () => {
        if (orderStatus === 'Pending') {
            setOrderStatus('Out for Delivery');
            updateOrderStatus();  
        } else if (orderStatus === 'Out for Delivery') {
            navigation.navigate('BackToDashoBoard');
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
                    <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8} onPress={openModal}>
                        <Image source={require('../../assets/img/helpline.png')} style={{ right: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.orderC}>
                    <Text style={[cStyles.headerText0BL, { alignSelf: 'center' }]}>{dispid}</Text>
                    <View style={[cStyles.cardBtn, { marginTop: 5, bottom: 4 }]}>
                        <Text style={[cStyles.cardText, { color: '#1A8A32', fontFamily: "Poppins-Medium", fontWeight: "500", fontSize: 12 }]}>
                            {orderStatus}
                        </Text>
                    </View>
                </View>
                <View style={styles.Card}>
                    <View style={[styles.leftContainer, { justifyContent: 'space-between' }]}>
                        <Text style={[cStyles.headerText0BL, {}]}>Amount Received</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[cStyles.cardText, styles.numberText, { fontFamily: 'Poppins-Medium', left: 8 }]}>
                                Cash
                            </Text>
                            <View style={styles.starImage}>
                                <Image source={require('../../assets/img/edit-2.png')} style={[cStyles.icon, { left: 16 }]} />
                            </View>
                        </View>
                    </View>
                    <Text style={[cStyles.headerText2Gr, { marginBottom: 5, color: "#1A8A32" }]}>₹1,569.00</Text>
                </View>
                <Text style={[cStyles.headerText0BL, { marginBottom: 9, left: 25, top: 6, marginTop: 19 }]}>
                    Upload Delivery Photos (Min 1) <Text style={cStyles.requiredIndicator}>*</Text>
                </Text>
                <View style={styles.photoUploadContainer}>
                    <Row>
                        <Col numRows={2}>
                            <View style={styles.uploadcard}>
                                <Image
                                    source={require('../../assets/img/DeliveryPhotosIcon.png')}
                                    resizeMode='contain'
                                    style={styles.uploadIcon}
                                />
                            </View>
                        </Col>
                        <Col numRows={2}>
                            <View style={styles.uploadcard}>
                                <Image
                                    source={require('../../assets/img/DeliveryPhotosIcon.png')}
                                    resizeMode='contain'
                                    style={styles.uploadIcon}
                                />
                            </View>
                        </Col>
                        <Col numRows={2}>
                            <View style={styles.uploadcard}>
                                <Image
                                    source={require('../../assets/img/DeliveryPhotosIcon.png')}
                                    resizeMode='contain'
                                    style={styles.uploadIcon}
                                />
                            </View>
                        </Col>
                    </Row>
                </View>
            </ScrollView>
            <SwipeButton
                onSwipeSuccess={handleSwipeSuccess}
                style={styles.slideButton}
                disabled={false}
                swipeSuccessThreshold={70}
                height={56}
                width={width / 1.2}
                containerStyles={{ borderRadius: 6, position: "absolute", bottom: 25, alignSelf: "center" }}
                title="Order Delivered"
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
                thumbIconStyles={{ borderRadius: 8, height: 44, width: 44, left: 1 }}
                thumbIconBackgroundColor='#DF1F26'
                thumbIconBorderColor='#FEFCFC'
                railBorderColor='#DF1F26'
                railBackgroundColor='#FEFCFC'
                railFillBackgroundColor='rgba(255, 255, 255, 0.7)'
            />
            <Image source={require('../../assets/img/arrow-button.png')} resizeMode='contain'
                style={{ bottom: 37, left: "75%", width: 45, borderRadius: 2, height: 45 }} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", margin: 10 }}>
                                <Image source={require('../../assets/img/warning.png')} resizeMode='contain' style={{ margin: 4 }} />
                                <Text style={{
                                    fontWeight: "600",
                                    color: "#DF1F26",
                                    fontSize: 16,
                                    fontFamily: 'Poppins-SemiBold',
                                    lineHeight: 19,
                                    left: 8, top: 4
                                }}>Facing Issue</Text>
                            </View>
                            <Text style={{
                                fontWeight: "600",
                                color: "#000000",
                                fontSize: 16,
                                fontFamily: 'Poppins-SemiBold',
                                lineHeight: 19, textAlign: "center"
                            }}>Call Helpline Number!</Text>
                        </View>
                        <View style={{ flexDirection: "column", margin: 10 }}>
                            <TouchableOpacity style={{
                                flexDirection: "row",
                                borderWidth: 1, borderColor: "#000000",
                                width: 100, height: 28, borderRadius: 7,
                                justifyContent: "space-evenly"
                            }} onPress={() => {
                                Alert.alert('Calling Helpline');
                            }}>
                                <Image source={require('../../assets/img/phone.png')} resizeMode='contain' style={{ top: 6, padding: 3, left: 4 }} />
                                <Text style={{
                                    fontWeight: "600",
                                    color: "#000000",
                                    fontSize: 16,
                                    fontFamily: 'Poppins-SemiBold',
                                    lineHeight: 19, textAlign: "center", right: 10, top: 2
                                }}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    orderC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 19,
        top: 20
    },
    card2: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 10,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginTop: 45,
        marginHorizontal: 18,
        marginBottom: 20,
    },
    Card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 16,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginTop: 45,
        marginHorizontal: 19,
        bottom: 7
    },   // productDetailscard: {
    //     backgroundColor: '#979797',
    //     borderRadius: 6,
    //     padding: 16,
    //     borderColor: '#979797',
    //     borderWidth: 1,
    //     marginTop: 35
    // },
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
        marginLeft: 9,
        right: 14
    },
    inputContainer: {
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoUploadContainer: {
        marginHorizontal: 15,
        marginBottom: 25,
    },
    uploadcard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 10,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 15, // Added margin between cards
        height: 125,
        gap: 22,
        right: 10,
        width: 100,
        justifyContent: "space-evenly"
    },
    uploadIcon: {
        alignSelf: "center",
        marginVertical: 30,
        margin: 10
    },
    slideButton: {
        color: "red",
        padding: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10,
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 1,
        alignItems: 'center',
        paddingVertical: 30,
        borderColor: "#000000",
        borderWidth: 1.3,
        width: 308,
    },
});

export default OrderDeliver;
