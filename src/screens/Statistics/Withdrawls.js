import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import cStyles from "../../components/cStyles";
import Row from "../../common/Row";
import Col from "../../common/Col";
import { useNavigation } from '@react-navigation/native';
import staticStyle from '../../common/Styles/StaticsStyles';

const { width } = Dimensions.get('window');

const WithDrawals = () => {
    const navigation = useNavigation();
    const [selectedDay, setSelectedDay] = useState('7 Days');

    const handleDaySelection = (day) => {
        setSelectedDay(day);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
                        <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
                        </TouchableOpacity>
                        <Text style={cStyles.backText}>Withdrawals</Text>
                        <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <View style={{ margin: 1 }}> */}
            <View style={staticStyle.daysContainer}>
                <TouchableOpacity 
                    style={[staticStyle.daysCard, selectedDay === '7 Days' ? staticStyle.activeCard : staticStyle.inactiveCard]} 
                    onPress={() => handleDaySelection('7 Days')}>
                    <Text style={[staticStyle.daysText, selectedDay === '7 Days' ? staticStyle.activeText : staticStyle.inactiveText]}>7 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[staticStyle.daysCard, selectedDay === '30 Days' ? staticStyle.activeCard : staticStyle.inactiveCard]} 
                    onPress={() => handleDaySelection('30 Days')}>
                    <Text style={[staticStyle.daysText, selectedDay === '30 Days' ? staticStyle.activeText : staticStyle.inactiveText]}>30 Days</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[staticStyle.calendarCard, selectedDay === 'Calendar' ? staticStyle.activeCard : staticStyle.inactiveCard]} 
                    onPress={() => handleDaySelection('Calendar')}>
                    <Image 
                        source={require("../../assets/bottomtab/DateSet.png")}
                        resizeMode="contain" 
                        style={[staticStyle.calendarImage, { tintColor: selectedDay === 'Calendar' ? '#DF1F26' : '#4D4D4D' }]} 
                    />
                </TouchableOpacity>
            </View>
                <View style={staticStyle.dateTextContainer}>
                    <Text style={staticStyle.dateText}>14th Jun to 20th Jun, 2024</Text>
                </View>
                <View style={staticStyle.cardContainer}>
                    <View style={[staticStyle.cashDepositCard,{marginVertical:3}]}>
                        <Row>
                            <Col>
                                <View style={styles.placeNameContainer}>
                                    <Text style={styles.placeName}>Vikhroli Store</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.amountContainer}>
                                    <Text style={styles.placeName}>₹1200</Text>
                                </View>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <View style={styles.dateTimeContainer}>
                                    <Text style={styles.smallText}>19th June, 2024, 12:12 PM</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.methodContainer}>
                                <Text style={[styles.smallText,{right:3}]}>Bank</Text>
                                </View>
                            </Col>
                        </Row>
                    </View>
                </View>
                <View style={staticStyle.cardContainer}>
                <View style={[staticStyle.cashDepositCard,{marginVertical:3}]}>
                <Row>
                            <Col>
                            <View style={styles.placeNameContainer}>
                                <Text style={styles.placeName}>Vikhroli Store</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.amountContainer}>
                                    <Text style={styles.placeName}>₹500</Text>
                                </View>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <View style={styles.dateTimeContainer}>
                                    <Text style={styles.smallText}>20th June, 2024, 12:12 PM</Text>
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.methodContainer}>
                                    <Text style={[styles.smallText,{right:2,}]}>Cash</Text>
                                </View>
                            </Col>
                        </Row>
                    </View>
                </View>
            {/* </View> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        height: 64,
    },
    placeName: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
        top: 11,
        paddingHorizontal:8

    },
    smallText: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#979797',
        lineHeight: 15,
        fontWeight: '500',
        bottom:4,
        paddingHorizontal:8,
        
    },
    
    dateTimeContainer: {
        top: 10,
    },
    methodContainer: {
        alignSelf: 'flex-end',
        top: 10,
    },
    placeNameContainer:{
        bottom:4
    },
    amountContainer: {
        alignSelf: 'flex-end',
        bottom:3,
    },
});

export default WithDrawals;
