import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import cStyles from '../../components/cStyles';
import Row from '../../common/Row';
import Col from '../../common/Col';
import { useNavigation } from '@react-navigation/native';
import staticStyle from '../../common/Styles/StaticsStyles';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const CashDeposit = () => {
    const navigation = useNavigation();
    const [selectedDay, setSelectedDay] = useState('7 Days');

    const handleDaySelection = (day) => {
        setSelectedDay(day);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={[cStyles.wrapT, { paddingHorizontal: 10 }]}>
                    <TouchableOpacity style={cStyles.backContainer} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/img/Back.png')} style={cStyles.icon} />
                    </TouchableOpacity>
                    <Text style={cStyles.backText}>Cash Deposits</Text>
                    <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                </View>
            </View>
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
                <View style={[staticStyle.cashDepositCard,{marginVertical:4}]}>
                    <Row>
                        <Col>
                            <Text style={styles.placeName}>Vikhroli Store</Text>
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
                                <Text style={styles.smallText}>20th June, 2024, 12:12 PM</Text>
                            </View>
                        </Col>
                    </Row>
                </View>
            </View>
            <View style={staticStyle.cardContainer}>
            <View style={[staticStyle.cashDepositCard,{marginVertical:4}]}>
            <Row>
                        <Col>
                            <Text style={styles.placeName}>Vikhroli Store</Text>
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
                    </Row>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        height: 64,
    },
    buttonContainer: {
        flexDirection: "row",
        margin: 20,
        top: 16
    },
    placeName: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
        marginTop: 10,
        bottom: 5,
        paddingHorizontal:8
    },
    smallText: {
        fontSize: 12,
        color: '#979797',
        fontFamily: "Poppins-Medium",
        fontWeight: '500',
        lineHeight: 15,
        paddingHorizontal:8,
        bottom:2

    },
    amountContainer: {
        alignItems: 'flex-end',
        marginTop: 5,
    },
    dateTimeContainer: {
        // marginBottom: 10,
        bottom: 7
    },
   
});

export default CashDeposit;
