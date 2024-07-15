import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Alert, Modal } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';
import DocumentPicker from 'react-native-document-picker';
import SwipeButton from 'rn-swipe-button';
import thumbIcon from '../../assets/img/arrow-left1.png';
import { Button, Card } from 'react-native-paper';
import Arrow from '../../assets/img/arrow-button.png'


const OrderDeliver = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');


    const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility

    const handleNext = async () => {
        console.log('Order Completed');
        // Set modal visible after completing order
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }
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
            <View style={styles.card2}>
                <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
                    <Text style={[cStyles.headerText0BL]}>Amount Received</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[cStyles.cardText, styles.numberText, { fontFamily: 'Poppins-Medium', }]}>
                            Cash
                        </Text>
                        <View style={styles.starImage}>
                            <Image
                                source={require('../../assets/img/edit-2.png')}
                                style={cStyles.icon} />
                        </View>
                    </View>
                </View>
                <Text style={[cStyles.headerText2Gr, { marginBottom: 0, }]}>₹1,569.00</Text>
            </View>
            <Text style={[cStyles.headerText0BL, { marginBottom: 18, left: 28 }]}>
                Upload Delivery Photos (Min 1) <Text style={cStyles.requiredIndicator}>*</Text>
            </Text>
            <View style={{ flexDirection: "column", }}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", margin: 10 }}>
                    <View style={styles.uploadcard}>
                        <Image source={require('../../assets/img/DeliveryPhotosIcon.png')} resizeMode='contain'
                            style={styles.uploadIcon}></Image>
                    </View>
                    <View style={styles.uploadcard}>
                        <Image source={require('../../assets/img/DeliveryPhotosIcon.png')} resizeMode='contain'
                            style={styles.uploadIcon}></Image>
                    </View>
                </View>
            </View>
            <View style={{ margin: 20, top: "22%" }}>
                <SwipeButton onSwipeStart={navigation.navigate('BackToDashBoard')}
                    style={styles.slideButton}
                    disabled={false}
                    swipeSuccessThreshold={70}
                    height={56}
                    width={width / 1.2}
                    borderRadius={6}
                    title="Order Delivered"
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
                    containerStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: 1
                    }}

                    thumbIconImageSource={thumbIcon}
                    thumbIconStyles={{ borderRadius: 1 }}
                    onSwipeSuccess={handleNext}
                    thumbIconBackgroundColor='#DF1F26'
                    thumbIconBorderColor='#FEFCFC'
                    railBorderColor='#DF1F26'
                    railBackgroundColor='#FEFCFC'
                    railFillBackgroundColor='rgba(255, 255, 255, 0.7)'
                >
                </SwipeButton>
                <Image source={require('../../assets/img/arrow-button.png')} resizeMode='contain'
                    style={{ height: 50, bottom: 60, left: "68%", width: 40, borderRadius: 2 }}></Image>
            </View>
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
                                <Image source={require('../../assets/img/warning.png')} resizeMode='contain' style={{ margin: 4 }}></Image>
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
                            <View style={{
                                flexDirection: "row",
                                borderWidth: 1, borderColor: "#000000",
                                width: 100, height: 28, borderRadius: 7,
                                justifyContent: "space-evenly"
                            }}>
                                <Image source={require('../../assets/img/phone.png')} resizeMode='contain' style={{ top: 6, padding: 3, left: 4 }}></Image>
                                <Text style={{
                                    fontWeight: "600",
                                    color: "#000000",
                                    fontSize: 12,
                                    fontFamily: 'Poppins-SemiBold',
                                    lineHeight: 19,
                                    textAlign: "center",
                                    top: 4
                                }}>Call Now</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
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
        marginTop: 30,
        margin: 20
    },
    productDetailscard: {
        backgroundColor: '#979797',
        borderRadius: 6,
        padding: 16,
        borderColor: '#979797',
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
    uploadcard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 16,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginTop: 5,
        margin: 28,
        height: 150,
        width: 120 // Add margin to create space between cards
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
export default OrderDeliver
