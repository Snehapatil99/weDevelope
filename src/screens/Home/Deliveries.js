/* eslint-disable prettier/prettier */
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, LayoutAnimation } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import cStyles from '../../components/cStyles';

const { width, height } = Dimensions.get('window');

const Deliveries = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(0);
    const scrollViewRef = useRef();
    const tabs = ['Pending', 'New Orders', 'Completed'];

    // const handleTabPress = (index) => {
    //     setActiveTab(index);
    //     scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    // };
    const handleTabPress = (index) => {
        setActiveTab(index);
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        scrollViewRef.current.scrollTo({ x: index * width / 0.2, animated: true });
    };


    const renderTabContent = (index) => {
        const orderDataTab0 = [
            { orderID: '#UNTD2405134', price: '₹1,939.00', time: '10:00 AM - 11:00 AM', item: 'The Glenlivet 12 Year Old', additionalItems: '+ 4 Items', status: 'Out for Delivery', statusColor: '#1ECC44' },
            { orderID: '#UNTD2405135', price: '₹1,939.00', time: '10:00 AM - 11:00 AM', item: 'The Glenlivet 12 Year Old', additionalItems: '+ 4 Items', status: 'Order Picked Up', statusColor: '#1ECC44' },
            { orderID: '#UNTD2405136', price: '₹1,939.00', time: '10:00 AM - 11:00 AM', item: 'The Glenlivet 12 Year Old', additionalItems: '+ 4 Items', status: 'Pending', statusColor: '#DF1F26' },
            { orderID: '#UNTD2405137', price: '₹1,939.00', time: '10:00 AM - 11:00 AM', item: 'The Glenlivet 12 Year Old', additionalItems: '+ 4 Items', status: 'Order Picked Up', statusColor: '#1ECC44' },
        ];

        const orderDataTab1 = [
            { orderID: '#UNTD2405138', price: '₹1,939.00', time: '11:00 AM - 12:00 PM', item: 'Jameson Irish Whiskey', additionalItems: '+ 2 Items', status: 'Accept Order', statusColor: '#1ECC44' },
            { orderID: '#UNTD2405139', price: '₹1,939.00', time: '11:00 AM - 12:00 PM', item: 'Jameson Irish Whiskey', additionalItems: '+ 2 Items', status: 'Accept Order', statusColor: '#1ECC44' },
            { orderID: '#UNTD2405140', price: '₹1,939.00', time: '11:00 AM - 12:00 PM', item: 'Jameson Irish Whiskey', additionalItems: '+ 2 Items', status: 'Accept Order', statusColor: '#1ECC44' },
            { orderID: '#UNTD2405141', price: '₹1,939.00', time: '11:00 AM - 12:00 PM', item: 'Jameson Irish Whiskey', additionalItems: '+ 2 Items', status: 'Accept Order', statusColor: '#1ECC44' },
        ];

        const orderDataTab2 = [
            { orderID: '#UNTD2405142', price: '₹1,939.00', time: '12:00 PM - 01:00 PM', item: 'Chivas Regal 18 Year Old', additionalItems: '+ 3 Items', status: 'Completed', statusColor: '#1ECC44' },
            { orderID: '#UNTD2405143', price: '₹1,939.00', time: '12:00 PM - 01:00 PM', item: 'Chivas Regal 18 Year Old', additionalItems: '+ 3 Items', status: 'Completed', statusColor: '#1ECC44' },
            { orderID: '#UNTD2405144', price: '₹1,939.00', time: '12:00 PM - 01:00 PM', item: 'Chivas Regal 18 Year Old', additionalItems: '+ 3 Items', status: 'Completed', statusColor: '#1ECC44' },
        ];

        const renderOrderCard = (order) => (
            <TouchableOpacity key={order.orderID} onPress={() => navigation.navigate('OrderDetails', { orderID: order.orderID })} style={styles.card2} activeOpacity={0.8}>
                <View style={[styles.leftContainer, { justifyContent: 'space-between' }]}>
                    <Text style={[cStyles.headerText0BL]}>{order.orderID}</Text>
                    <Text style={[cStyles.headerText2G]}>{order.price}</Text>
                </View>
                <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15 }]}>
                    <View style={styles.leftContainer}>
                        <View style={styles.imageL}>
                            <Image source={require('../../assets/img/beer1.png')} style={styles.image2} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[cStyles.cardText, { marginBottom: 0 }]}>{order.item}</Text>
                            <Text style={[cStyles.cardText, { color: '#DF1F26', marginVertical: 4 }]}>{order.additionalItems}</Text>
                            <Text style={[cStyles.cardText, styles.numberText]}>{order.time}</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
                        <View style={styles.starImage}>
                            <Image source={require('../../assets/img/file.png')} style={cStyles.icon} />
                        </View>
                    </View>
                </View>
                <View style={[cStyles.cardBtn, { marginTop: 8 }]}>
                    <Text style={[cStyles.cardText, { color: order.statusColor }]}>{order.status}</Text>
                </View>
            </TouchableOpacity>
        );
        switch (index) {
            case 0:
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {orderDataTab0.map((order) => renderOrderCard(order))}
                    </ScrollView>
                );
            case 1:
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {orderDataTab1.map((order) => renderOrderCard(order))}
                    </ScrollView>
                );
            case 2:
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {orderDataTab2.map((order) => renderOrderCard(order))}
                    </ScrollView>
                );
            default:
                return null;
        }
    };

    //   const renderTabContent = (index) => {
    //     switch (index) {
    //       case 0:
    //         return (
    //             <ScrollView showsVerticalScrollIndicator={false}>
    //                 <View style={styles.card2}>
    //             <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
    //             <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
    //              <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
    //         </View>
    //           <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
    //               <View style={styles.leftContainer}>
    //          <View  style={styles.imageL}>
    //               <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
    //          </View>

    //         <View style={styles.textContainer}>
    //           <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
    //           <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
    //            <Text style={[cStyles.cardText, styles.numberText]}>
    //               10:00 AM - 11:00 AM
    //             </Text>
    //         </View>

    //       </View>
    //      <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
    //      <View  style={styles.starImage}>
    //         <Image
    //             source={require('../../../assets/img/file.png')}
    //             style={cStyles.icon}
    //           />
    //      </View>

    //         </View>
    //         </View>

    //         <View style={[cStyles.cardBtn,{ marginTop: 8}]}>
    //             <Text style={[cStyles.cardText, {color: '#1ECC44'}]}>Out for Delivery</Text>
    //         </View>

    //          </View>
    //          <View style={styles.card2}>
    //             <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
    //             <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
    //              <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
    //         </View>
    //           <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
    //               <View style={styles.leftContainer}>
    //          <View  style={styles.imageL}>
    //               <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
    //          </View>

    //         <View style={styles.textContainer}>
    //           <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
    //           <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
    //            <Text style={[cStyles.cardText, styles.numberText]}>
    //               10:00 AM - 11:00 AM
    //             </Text>
    //         </View>

    //       </View>
    //      <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
    //      <View  style={styles.starImage}>
    //         <Image
    //             source={require('../../../assets/img/file.png')}
    //             style={cStyles.icon}
    //           />
    //      </View>

    //         </View>
    //         </View>

    //         <View style={[cStyles.cardBtn,{ marginTop: 8}]}>
    //             <Text style={[cStyles.cardText, {color: '#1ECC44'}]}>Order Picked Up</Text>
    //         </View>

    //          </View>
    //          <View style={styles.card2}>
    //             <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
    //             <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
    //              <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
    //         </View>
    //           <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
    //               <View style={styles.leftContainer}>
    //          <View  style={styles.imageL}>
    //               <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
    //          </View>

    //         <View style={styles.textContainer}>
    //           <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
    //           <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
    //            <Text style={[cStyles.cardText, styles.numberText]}>
    //               10:00 AM - 11:00 AM
    //             </Text>
    //         </View>

    //       </View>
    //      <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
    //      <View  style={styles.starImage}>
    //         <Image
    //             source={require('../../../assets/img/file.png')}
    //             style={cStyles.icon}
    //           />
    //      </View>

    //         </View>
    //         </View>

    //         <View style={[cStyles.cardBtn,{ marginTop: 8}]}>
    //             <Text style={[cStyles.cardText, {color: '#DF1F26'}]}>Pending</Text>
    //         </View>

    //          </View>
    //             <View style={styles.card2}>
    //             <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
    //             <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
    //              <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
    //         </View>
    //           <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
    //               <View style={styles.leftContainer}>
    //          <View  style={styles.imageL}>
    //               <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
    //          </View>

    //         <View style={styles.textContainer}>
    //           <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
    //           <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
    //            <Text style={[cStyles.cardText, styles.numberText]}>
    //               10:00 AM - 11:00 AM
    //             </Text>
    //         </View>

    //       </View>
    //      <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
    //      <View  style={styles.starImage}>
    //         <Image
    //             source={require('../../../assets/img/file.png')}
    //             style={cStyles.icon}
    //           />
    //      </View>

    //         </View>
    //         </View>

    //         <View style={[cStyles.cardBtn,{ marginTop: 8}]}>
    //             <Text style={[cStyles.cardText, {color: '#1ECC44'}]}>Order Picked Up</Text>
    //         </View>

    //          </View>
    //             </ScrollView>

    //         );
    //       case 1:
    //          return (
    //             <ScrollView showsVerticalScrollIndicator={false}>
    //                 <View style={styles.card2}>
    //             <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
    //             <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
    //              <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
    //         </View>
    //           <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
    //               <View style={styles.leftContainer}>
    //          <View  style={styles.imageL}>
    //               <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
    //          </View>

    //         <View style={styles.textContainer}>
    //           <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
    //           <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
    //            <Text style={[cStyles.cardText, styles.numberText]}>
    //               10:00 AM - 11:00 AM
    //             </Text>
    //         </View>

    //       </View>
    //      <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
    //      <View  style={styles.starImage}>
    //         <Image
    //             source={require('../../../assets/img/file.png')}
    //             style={cStyles.icon}
    //           />
    //      </View>

    //         </View>
    //         </View>

    //         <View style={[cStyles.cardBtn,{ marginTop: 8}]}>
    //             <Text style={[cStyles.cardText, {color: '#1ECC44'}]}>Accept Order</Text>
    //         </View>

    //          </View>
    //          <View style={styles.card2}>
    //             <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
    //             <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
    //              <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
    //         </View>
    //           <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
    //               <View style={styles.leftContainer}>
    //          <View  style={styles.imageL}>
    //               <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
    //          </View>

    //         <View style={styles.textContainer}>
    //           <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
    //           <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
    //            <Text style={[cStyles.cardText, styles.numberText]}>
    //               10:00 AM - 11:00 AM
    //             </Text>
    //         </View>

    //       </View>
    //      <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
    //      <View  style={styles.starImage}>
    //         <Image
    //             source={require('../../../assets/img/file.png')}
    //             style={cStyles.icon}
    //           />
    //      </View>

    //         </View>
    //         </View>

    //         <View style={[cStyles.cardBtn,{ marginTop: 8}]}>
    //              <Text style={[cStyles.cardText, {color: '#1ECC44'}]}>Accept Order</Text>
    //         </View>

    //          </View>
    //          <View style={styles.card2}>
    //             <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
    //             <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
    //              <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
    //         </View>
    //           <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
    //               <View style={styles.leftContainer}>
    //          <View  style={styles.imageL}>
    //               <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
    //          </View>

    //         <View style={styles.textContainer}>
    //           <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
    //           <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
    //            <Text style={[cStyles.cardText, styles.numberText]}>
    //               10:00 AM - 11:00 AM
    //             </Text>
    //         </View>

    //       </View>
    //      <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
    //      <View  style={styles.starImage}>
    //         <Image
    //             source={require('../../../assets/img/file.png')}
    //             style={cStyles.icon}
    //           />
    //      </View>

    //         </View>
    //         </View>

    //         <View style={[cStyles.cardBtn,{ marginTop: 8}]}>
    //              <Text style={[cStyles.cardText, {color: '#1ECC44'}]}>Accept Order</Text>
    //         </View>

    //          </View>
    //             <View style={styles.card2}>
    //             <View style={[styles.leftContainer, { justifyContent: 'space-between', },]}>
    //             <Text style={[cStyles.headerText0BL]}>#UNTD2405134</Text>
    //              <Text style={[cStyles.headerText2G,]}>₹1,939.00</Text>
    //         </View>
    //           <View style={[styles.leftContainer, { justifyContent: 'space-between', marginTop: 15},]}>
    //               <View style={styles.leftContainer}>
    //          <View  style={styles.imageL}>
    //               <Image source={require('../../../assets/img/beer1.png')} style={styles.image2} />
    //          </View>

    //         <View style={styles.textContainer}>
    //           <Text style={[cStyles.cardText, {marginBottom: 0,}]}>The Glenlivet 12 Year Old</Text>
    //           <Text style={[cStyles.cardText, {color: '#DF1F26', marginVertical: 4}]}>+ 4 Items</Text>
    //            <Text style={[cStyles.cardText, styles.numberText]}>
    //               10:00 AM - 11:00 AM
    //             </Text>
    //         </View>

    //       </View>
    //      <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
    //      <View  style={styles.starImage}>
    //         <Image
    //             source={require('../../../assets/img/file.png')}
    //             style={cStyles.icon}
    //           />
    //      </View>

    //         </View>
    //         </View>

    //         <View style={[cStyles.cardBtn,{ marginTop: 8}]}>
    //             <Text style={[cStyles.cardText, {color: '#1ECC44'}]}>Accept Order</Text>
    //         </View>

    //          </View>
    //             </ScrollView>

    //         );
    //       case 2:
    //         return <Text>Completed Content</Text>;
    //       default:
    //         return null;
    //     }
    //   };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={[cStyles.wrapT, {
                    flexDirection: "column", paddingHorizontal: 90
                }]}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
                        </TouchableOpacity>
                        <Text style={styles.deliveriesText}>Deliveries</Text>
                        <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                        <Image
                            source={require('../../assets/img/refersh.png')}
                            style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'contain', left: 80
                            }}
                        />
                    </View>

                </View>
            </View>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
                    {tabs.map((tab, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.tab, { borderColor: activeTab === index ? "#DF1F26" : '#000000' }]}
                            onPress={() => handleTabPress(index)}
                        >
                            <Text style={[styles.tabText, { color: activeTab === index ? '#DF1F26' : '#000000' }]}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    ref={scrollViewRef}
                    onScroll={(event) => {
                        const index = Math.round(event.nativeEvent.contentOffset.x / width);
                        setActiveTab(index);
                    }}
                    scrollEventThrottle={16}
                >
                    {tabs.map((tab, index) => (
                        <View key={index} style={styles.tabContent}>
                            {renderTabContent(index)}
                            <View style={{ marginBottom: height * 0.15, }}></View>
                        </View>
                    ))}
                </ScrollView>
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
        // paddingHorizontal: 10,
    },
    scrollContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        // left:10
    },
    tabContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    tab: {
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
        paddingHorizontal: height * 0.0175,
        paddingVertical: height * 0.012,
        borderWidth: 1,
    },
    tabText: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#121212',
        lineHeight: 19,
    },
    tabContent: {
        width: width - 32, // Adjusted to fit within padding
        paddingVertical: 16,
    },
    card2: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 16,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginBottom: 30,
        margin: 3,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageL: {
        width: 50,
        height: 50,
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
        borderRadius: 40,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignSelf: 'flex-start',
    },
    starImage: {
        height: 19,
        width: 19,

    },
    deliveriesText:{
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#F1E92A',
        lineHeight: 19,
        alignSelf: 'center',
        paddingHorizontal: 5,
        textAlign: 'center',
        left:85
    }
});

export default Deliveries;