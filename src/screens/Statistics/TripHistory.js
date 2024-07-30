import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import cStyles from "../../components/cStyles";
import Row from "../../common/Row";
import Col from "../../common/Col";
import { useNavigation } from '@react-navigation/native';
import staticStyle from '../../common/Styles/StaticsStyles';


const TripHistory = () => {
    const [selectedDay, setSelectedDay] = useState('7 Days');
    const navigation = useNavigation();

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
                        <Text style={cStyles.backText}>Trip History</Text>
                        <TouchableOpacity style={cStyles.backContainer1} activeOpacity={0.8}></TouchableOpacity>
                    </View>
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
                        style={[staticStyle.calendarImage, { tintColor: selectedDay === 'Calendar' ? '#DF1F26' : '#4D4D4D', }]} 
                    />
                </TouchableOpacity>
            </View>
            <View style={staticStyle.dateTextContainer}>
                <Text style={staticStyle.dateText}>14th Jun to 20th Jun, 2024</Text>
            </View>
            <View style={staticStyle.cardContainer}>
                <View style={staticStyle.rectangle}>
                    <Text style={staticStyle.JuneText}>20th June, 2024, Thursday</Text>
                    <View style={styles.line} />
                    <Row>
                        <Col>
                            <View >
                                <Text style={staticStyle.delRevText}>Deliveries</Text>
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.rightColumn}>
                                <Text>
                                    <Text style={styles.boldText}>14</Text>
                                    <Text style={styles.smallText}> (10 Timely | </Text>
                                    <Text style={[styles.smallText, styles.lateText]}>4 Late</Text>
                                    <Text style={styles.smallText}>)</Text>
                                </Text>
                            </View>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <View>
                                <Text style={staticStyle.delRevText}>Revenue</Text>
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.rightColumn}>
                                <Text>
                                    <Text style={styles.boldText}>₹1600</Text>
                                    <Text style={styles.smallText}> (₹200 Incentives) </Text>
                                </Text>
                            </View>
                        </Col>
                    </Row>
                </View>
            </View>
            <View style={staticStyle.cardContainer}>
                <View style={staticStyle.rectangle}>
                    <Text style={staticStyle.JuneText}>18th June, 2024, Tuesday</Text>
                    <View style={styles.line} />
                    <Row>
                        <Col>
                            <View>
                                <Text style={staticStyle.delRevText}>Deliveries</Text>
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.rightColumn}>
                                <Text>
                                    <Text style={styles.boldText}>14</Text>
                                    <Text style={styles.smallText}> (10 Timely | </Text>
                                    <Text style={[styles.smallText, styles.lateText]}>4 Late</Text>
                                    <Text style={styles.smallText}>)</Text>
                                </Text>
                            </View>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <View>
                                <Text style={staticStyle.delRevText}>Revenue</Text>
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.rightColumn}>
                                <Text>
                                    <Text style={styles.boldText}>₹1600</Text>
                                    <Text style={styles.smallText}> (₹200 Incentives) </Text>
                                </Text>
                            </View>
                        </Col>
                    </Row>
                </View>
            </View>
            <View style={staticStyle.cardContainer}>
                <View style={staticStyle.rectangle}>
                    <Text style={staticStyle.JuneText}>19th June, 2024, Wednesday</Text>
                    <View style={styles.line} />
                    <Row>
                        <Col>
                            <View>
                                <Text style={staticStyle.delRevText}>Deliveries</Text>
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.rightColumn}>
                                <Text>
                                    <Text style={styles.boldText}>14</Text>
                                    <Text style={styles.smallText}> (10 Timely | </Text>
                                    <Text style={[styles.smallText, styles.lateText]}>4 Late</Text>
                                    <Text style={styles.smallText}>)</Text>
                                </Text>
                            </View>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <View>
                                <Text style={staticStyle.delRevText}>Revenue</Text>
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.rightColumn}>
                                <Text>
                                    <Text style={styles.boldText}>₹1600</Text>
                                    <Text style={styles.smallText}> (₹200 Incentives) </Text>
                                </Text>
                            </View>
                        </Col>
                    </Row>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Set your desired background color here
    },
    headerContainer: {
        height: 64,
    },
    cardsContainer: {
        marginHorizontal: 12,
        marginVertical: 12  ,
    },
    rectangle: {
        width: '95%', // Make the card width responsive
        borderColor: "#D9D9D9",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: '2.5%',
        borderStyle: "solid",
        overflow: 'hidden',
        padding: 10,
    },
    JuneText: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        lineHeight: 18,
        fontWeight: '600',
    },
    delRevText: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        lineHeight: 35,
        fontWeight: '500',
    },
    line: {
        height: 1,
        width: '120%',
        backgroundColor: '#D9D9D9',
        lineHeight: 19,
        marginVertical: 10,
        right:10
    },
    rightColumn: {
        top: 0,
    },
    boldText: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        fontWeight: '500',
    },
    smallText: {
        fontSize: 11,
        fontFamily: 'Poppins-SemiBold',
        color: '#4D4D4D',
        fontWeight: '600',
    },
    lateText: {
        color: 'red',
    },
});

export default TripHistory;
